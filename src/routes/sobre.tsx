import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, Microscope, Leaf } from "lucide-react";
import { CtaBand } from "@/components/site/cta-band";
import dentistaImg from "@/assets/dentista.jpg";
import salaImg from "@/assets/clinica-sala.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "A clínica — Sorriso Vivo Odontologia" },
      {
        name: "description",
        content:
          "Conheça a Sorriso Vivo: clínica odontológica em São Paulo com equipe especializada, tecnologia digital e atendimento humanizado.",
      },
      { property: "og:title", content: "A clínica — Sorriso Vivo Odontologia" },
      {
        property: "og:description",
        content: "Equipe especializada, tecnologia digital e atendimento humanizado em São Paulo.",
      },
    ],
  }),
  component: Sobre,
});

const values = [
  {
    icon: HeartHandshake,
    title: "Acolhimento",
    text: "Ouvimos você com calma e respeitamos seu tempo, seus medos e suas escolhas.",
  },
  {
    icon: Microscope,
    title: "Precisão",
    text: "Diagnóstico com radiografia digital e escaneamento intraoral para tratamentos previsíveis.",
  },
  {
    icon: Leaf,
    title: "Prevenção",
    text: "Acreditamos que o melhor tratamento é aquele que evita o próximo problema.",
  },
];

function Sobre() {
  return (
    <>
      <section className="bg-hero">
        <div className="container-page grid gap-14 py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="animate-rise">
            <p className="eyebrow">A clínica</p>
            <h1 className="mt-5 text-5xl font-medium leading-[1.05] md:text-6xl">
              Odontologia moderna, com jeito de cuidado.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A Sorriso Vivo nasceu da vontade de oferecer, em São Paulo, uma odontologia que une
              técnica de alto nível a um atendimento próximo. Nosso consultório foi pensado para ser
              claro, silencioso e confortável — do primeiro contato ao pós-tratamento.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Reunimos especialistas de diversas áreas para que você resolva tudo em um só lugar,
              com um plano integrado e acompanhamento contínuo.
            </p>
          </div>
          <img
            src={dentistaImg}
            alt="Dentista da clínica Sorriso Vivo sorrindo no consultório"
            width={1008}
            height={1264}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft animate-rise [animation-delay:150ms]"
          />
        </div>
      </section>

      <section className="container-page py-24">
        <p className="eyebrow">Nossos valores</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-tight md:text-5xl">
          O que guia cada consulta.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl border border-border bg-card p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                <v.icon className="size-5" />
              </span>
              <h3 className="mt-6 text-2xl font-medium">{v.title}</h3>
              <p className="mt-3 text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page">
        <div className="grid gap-10 overflow-hidden rounded-[2rem] bg-secondary lg:grid-cols-2">
          <img
            src={salaImg}
            alt="Consultório iluminado com cadeira odontológica"
            width={1600}
            height={1104}
            loading="lazy"
            className="h-full min-h-72 w-full object-cover"
          />
          <div className="p-8 md:p-12 lg:py-16">
            <p className="eyebrow">Estrutura</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight md:text-4xl">
              Um espaço pensado para o seu conforto.
            </h2>
            <ul className="mt-8 grid gap-4 text-secondary-foreground">
              {[
                "Consultórios individuais com luz natural",
                "Radiografia digital e escaneamento intraoral",
                "Esterilização com rastreabilidade de instrumentais",
                "Fácil acesso pelo metrô na região da Paulista",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
