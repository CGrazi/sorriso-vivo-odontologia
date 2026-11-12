import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, ShieldCheck, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { services, clinic } from "@/lib/clinic";
import salaImg from "@/assets/clinica-sala.jpg";
import pacienteImg from "@/assets/paciente-sorriso.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sorriso Vivo — Clínica Odontológica em São Paulo" },
      {
        name: "description",
        content:
          "Clínica odontológica na Av. Paulista com prevenção, clareamento, ortodontia, implantes e estética. Agende sua consulta.",
      },
      { property: "og:title", content: "Sorriso Vivo — Clínica Odontológica em São Paulo" },
      {
        property: "og:description",
        content: "Odontologia completa, com tecnologia e acolhimento. Agende sua consulta online.",
      },
    ],
  }),
  component: Home,
});

const highlights = [
  { icon: ShieldCheck, title: "Biossegurança rigorosa", text: "Protocolos de esterilização auditados." },
  { icon: Star, title: "Equipe especializada", text: "Dentistas com especialização em cada área." },
  { icon: Clock, title: "Horários estendidos", text: "Atendimento até 20h e aos sábados." },
];

function Home() {
  return (
    <>
      <section className="bg-hero">
        <div className="container-page grid items-center gap-12 pb-20 pt-12 md:pt-20 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-rise">
            <p className="eyebrow">Clínica odontológica · São Paulo</p>
            <h1 className="mt-5 text-5xl font-medium leading-[1.04] text-foreground md:text-6xl lg:text-7xl">
              Cuidado que faz o seu sorriso <em className="text-primary">viver</em>.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Da prevenção à estética, a Sorriso Vivo reúne especialistas, tecnologia digital e um
              atendimento sem pressa — para você se sentir à vontade em cada consulta.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero">
                <Link to="/contato">
                  Agendar consulta <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/servicos">Ver serviços</Link>
              </Button>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" /> {clinic.address}
            </p>
          </div>
          <div className="relative animate-rise [animation-delay:150ms]">
            <img
              src={salaImg}
              alt="Consultório da clínica Sorriso Vivo com cadeira odontológica e vista para São Paulo"
              width={1600}
              height={1104}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft md:aspect-[5/6]"
            />
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-card">
              <span className="font-display text-3xl font-medium text-primary">15+</span>
              <span className="text-sm leading-tight text-muted-foreground">
                anos cuidando
                <br />
                de sorrisos
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="container-page grid gap-8 py-10 md:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                <h.icon className="size-5" />
              </span>
              <div>
                <p className="font-semibold">{h.title}</p>
                <p className="text-sm text-muted-foreground">{h.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">Serviços</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">
              Tudo para a saúde da sua boca, em um só lugar.
            </h2>
          </div>
          <Button asChild variant="link" className="px-0">
            <Link to="/servicos">
              Todos os serviços <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((s) => (
            <Link
              key={s.slug}
              to="/servicos"
              className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="size-5" />
              </span>
              <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-deep text-deep-foreground">
        <div className="container-page grid items-center gap-14 py-24 lg:grid-cols-2">
          <img
            src={pacienteImg}
            alt="Paciente sorrindo na cadeira odontológica"
            width={1200}
            height={1200}
            loading="lazy"
            className="aspect-square w-full rounded-[2rem] object-cover"
          />
          <div>
            <p className="eyebrow text-highlight">Nossa forma de cuidar</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">
              Consultas sem pressa, explicações claras.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-deep-muted">
              Antes de qualquer tratamento, você entende o diagnóstico, vê as opções e recebe um
              plano por escrito. Usamos escaneamento intraoral e radiografia digital para decisões
              mais precisas e confortáveis.
            </p>
            <ul className="mt-8 grid gap-3 text-deep-foreground">
              {[
                "Avaliação completa na primeira consulta",
                "Plano de tratamento transparente",
                "Tecnologia digital e anestesia confortável",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-highlight" /> {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" variant="light" className="mt-10">
              <Link to="/sobre">Conheça a clínica</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
