import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/site/cta-band";
import { services } from "@/lib/clinic";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços odontológicos — Sorriso Vivo" },
      {
        name: "description",
        content:
          "Clínica geral, clareamento, ortodontia, implantes, lentes de contato dental, canal, periodontia e odontopediatria em São Paulo.",
      },
      { property: "og:title", content: "Serviços odontológicos — Sorriso Vivo" },
      {
        property: "og:description",
        content: "Conheça todos os tratamentos da Sorriso Vivo, da prevenção à estética.",
      },
    ],
  }),
  component: Servicos,
});

function Servicos() {
  return (
    <>
      <section className="bg-hero">
        <div className="container-page py-20">
          <p className="eyebrow animate-rise">Serviços</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-medium leading-[1.05] md:text-6xl animate-rise">
            Tratamentos completos, do check-up ao sorriso novo.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-rise">
            Cada tratamento começa com uma avaliação cuidadosa. Assim, indicamos apenas o que faz
            sentido para você.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="group flex gap-6 rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-card md:p-9"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="size-6" />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1 text-2xl font-medium">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.description}</p>
                <Link
                  to="/contato"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Agendar avaliação <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
