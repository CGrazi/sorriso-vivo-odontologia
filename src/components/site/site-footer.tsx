import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { clinic } from "@/lib/clinic";

export function SiteFooter() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <p className="font-display text-2xl font-semibold">Sorriso Vivo</p>
          <p className="mt-3 text-sm leading-relaxed text-deep-muted">
            Odontologia completa, com tecnologia e acolhimento, no coração de São Paulo.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">Contato</p>
          <p className="flex gap-2 text-deep-muted">
            <MapPin className="mt-0.5 size-4 shrink-0" /> {clinic.address}
          </p>
          <a href={clinic.phoneHref} className="flex gap-2 text-deep-muted hover:text-deep-foreground">
            <Phone className="mt-0.5 size-4 shrink-0" /> {clinic.phone}
          </a>
          <a
            href={`mailto:${clinic.email}`}
            className="flex gap-2 text-deep-muted hover:text-deep-foreground"
          >
            <Mail className="mt-0.5 size-4 shrink-0" /> {clinic.email}
          </a>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">Horários</p>
          {clinic.hours.map((h) => (
            <p key={h.days} className="flex gap-2 text-deep-muted">
              <Clock className="mt-0.5 size-4 shrink-0" />
              <span>
                {h.days}: {h.time}
              </span>
            </p>
          ))}
          <div className="flex gap-4 pt-3">
            <Link to="/servicos" className="text-deep-muted hover:text-deep-foreground">
              Serviços
            </Link>
            <Link to="/contato" className="text-deep-muted hover:text-deep-foreground">
              Agendar
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-deep-foreground/10">
        <p className="container-page py-6 text-xs text-deep-muted">
          © {new Date().getFullYear()} Sorriso Vivo Odontologia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
