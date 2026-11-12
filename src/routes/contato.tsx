import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { AppointmentForm } from "@/components/site/appointment-form";
import { clinic } from "@/lib/clinic";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Agende sua consulta — Sorriso Vivo" },
      {
        name: "description",
        content:
          "Solicite o agendamento da sua consulta na clínica odontológica Sorriso Vivo, em São Paulo.",
      },
      { property: "og:title", content: "Agende sua consulta — Sorriso Vivo" },
      {
        property: "og:description",
        content: "Preencha o formulário e nossa equipe entra em contato para confirmar o horário.",
      },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <section className="bg-hero">
      <div className="container-page grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="animate-rise">
          <p className="eyebrow">Contato</p>
          <h1 className="mt-5 text-5xl font-medium leading-[1.05] md:text-6xl">
            Agende sua consulta.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Preencha o formulário com seus dados e o serviço desejado. Nossa equipe entra em contato
            para confirmar o melhor dia e horário.
          </p>

          <div className="mt-10 grid gap-5">
            <Info icon={MapPin} label="Endereço">
              {clinic.address}
            </Info>
            <Info icon={Phone} label="Telefone">
              <a href={clinic.phoneHref} className="hover:text-primary">
                {clinic.phone}
              </a>
            </Info>
            <Info icon={MessageCircle} label="WhatsApp">
              <a
                href={clinic.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {clinic.whatsapp}
              </a>
            </Info>
            <Info icon={Mail} label="E-mail">
              <a href={`mailto:${clinic.email}`} className="hover:text-primary">
                {clinic.email}
              </a>
            </Info>
            <Info icon={Clock} label="Horários">
              {clinic.hours.map((h) => (
                <span key={h.days} className="block">
                  {h.days}: {h.time}
                </span>
              ))}
            </Info>
          </div>
        </div>
        <div className="animate-rise [animation-delay:120ms]">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-card text-primary shadow-card">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-sm font-semibold">{label}</p>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
