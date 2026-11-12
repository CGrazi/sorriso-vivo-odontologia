import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { appointmentSchema, periodOptions, serviceOptions } from "@/lib/appointment-schema";
import { submitAppointment } from "@/lib/appointments.functions";

type Errors = Partial<Record<"name" | "email" | "phone" | "service" | "message" | "form", string>>;

const fieldClass = "h-12 rounded-xl bg-background";

export function AppointmentForm({ defaultService }: { defaultService?: string }) {
  const send = useServerFn(submitAppointment);
  const [service, setService] = useState<string>(defaultService ?? "");
  const [period, setPeriod] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      service,
      preferredPeriod: period || undefined,
      message: String(fd.get("message") ?? "") || undefined,
    };
    const parsed = appointmentSchema.safeParse(raw);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await send({ data: parsed.data });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("idle");
      setErrors({
        form: "Não foi possível enviar agora. Tente novamente ou ligue para a clínica.",
      });
    }
  }

  if (status === "done") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-[1.75rem] border border-border bg-card p-8 shadow-card md:p-10"
      >
        <span className="grid size-12 place-items-center rounded-full bg-secondary text-primary">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="text-2xl font-medium">Pedido recebido!</h3>
        <p className="text-muted-foreground">
          Obrigado pelo contato. Nossa equipe vai falar com você para confirmar o dia e o horário da
          sua consulta.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Enviar outro pedido
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-5 rounded-[1.75rem] border border-border bg-card p-6 shadow-card md:grid-cols-2 md:p-10"
    >
      <Field label="Nome completo" htmlFor="name" error={errors.name} className="md:col-span-2">
        <Input id="name" name="name" autoComplete="name" maxLength={100} className={fieldClass} />
      </Field>
      <Field label="E-mail" htmlFor="email" error={errors.email}>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={255}
          className={fieldClass}
        />
      </Field>
      <Field label="Telefone / WhatsApp" htmlFor="phone" error={errors.phone}>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(11) 90000-0000"
          maxLength={30}
          className={fieldClass}
        />
      </Field>
      <Field label="Serviço de interesse" htmlFor="service" error={errors.service}>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger id="service" className={`${fieldClass} w-full`}>
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field label="Melhor período (opcional)" htmlFor="period">
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger id="period" className={`${fieldClass} w-full`}>
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            {periodOptions.map((p) => (
              <SelectItem key={p} value={p}>
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field
        label="Mensagem (opcional)"
        htmlFor="message"
        error={errors.message}
        className="md:col-span-2"
      >
        <Textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1000}
          placeholder="Conte um pouco sobre o que você precisa"
          className="rounded-xl bg-background"
        />
      </Field>
      {errors.form && (
        <p role="alert" className="text-sm font-medium text-destructive md:col-span-2">
          {errors.form}
        </p>
      )}
      <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-muted-foreground">
          Seus dados são usados apenas para entrarmos em contato sobre o agendamento.
        </p>
        <Button type="submit" size="lg" variant="hero" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" /> Enviando…
            </>
          ) : (
            "Solicitar agendamento"
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`grid gap-2 ${className ?? ""}`}>
      <Label htmlFor={htmlFor} className="text-sm font-semibold">
        {label}
      </Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
