import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "A clínica" },
  { to: "/servicos", label: "Serviços" },
  { to: "/contato", label: "Contato" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Sorriso Vivo — início">
      <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
          <path
            d="M5 10.5c1.6 3.6 4.1 5.5 7 5.5s5.4-1.9 7-5.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
        Sorriso Vivo
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-18 items-center justify-between gap-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contato">Agendar consulta</Link>
          </Button>
        </div>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="container-page flex flex-col gap-1 pb-5 md:hidden" aria-label="Menu móvel">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2">
            <Link to="/contato" onClick={() => setOpen(false)}>
              Agendar consulta
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
