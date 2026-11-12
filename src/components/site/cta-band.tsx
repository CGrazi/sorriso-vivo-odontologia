import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/lib/clinic";

export function CtaBand() {
  return (
    <section className="container-page py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-14 text-primary-foreground md:px-14">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 size-72 rounded-full bg-primary-foreground/10"
        />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium leading-tight md:text-4xl">
              Pronto para cuidar do seu sorriso?
            </h2>
            <p className="mt-3 text-primary-foreground/80">
              Envie seu pedido de agendamento e nossa equipe retorna para confirmar o melhor horário.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="light">
              <Link to="/contato">
                Agendar consulta <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <a href={clinic.phoneHref}>Ligar {clinic.phone}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
