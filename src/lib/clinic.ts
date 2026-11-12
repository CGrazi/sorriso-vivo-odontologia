import {
  Sparkles,
  ShieldCheck,
  Smile,
  Baby,
  Stethoscope,
  Gem,
  HeartPulse,
  Activity,
  type LucideIcon,
} from "lucide-react";

export const clinic = {
  name: "Sorriso Vivo",
  tagline: "Odontologia completa em São Paulo",
  address: "Av. Paulista, 1000 — conj. 82, Bela Vista, São Paulo – SP",
  phone: "(11) 3000-0000",
  phoneHref: "tel:+551130000000",
  whatsapp: "(11) 90000-0000",
  whatsappHref: "https://wa.me/5511900000000",
  email: "contato@sorrisovivo.com.br",
  hours: [
    { days: "Segunda a sexta", time: "8h às 20h" },
    { days: "Sábado", time: "8h às 13h" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "clinica-geral",
    title: "Clínica geral e prevenção",
    short: "Check-up, limpeza e cuidado contínuo.",
    description:
      "Consultas de avaliação, limpeza profissional, restaurações e orientação de higiene para manter seu sorriso saudável o ano todo.",
    icon: Stethoscope,
  },
  {
    slug: "clareamento",
    title: "Clareamento dental",
    short: "Dentes mais brancos com segurança.",
    description:
      "Clareamento em consultório ou caseiro supervisionado, com protocolos que respeitam a sensibilidade e a saúde do esmalte.",
    icon: Sparkles,
  },
  {
    slug: "ortodontia",
    title: "Ortodontia e alinhadores",
    short: "Aparelhos fixos e alinhadores invisíveis.",
    description:
      "Planejamento digital do tratamento ortodôntico com aparelhos convencionais, estéticos ou alinhadores transparentes.",
    icon: Smile,
  },
  {
    slug: "implantes",
    title: "Implantes dentários",
    short: "Reposição de dentes com naturalidade.",
    description:
      "Implantes e próteses sobre implante planejados com tomografia, para devolver função, conforto e estética.",
    icon: ShieldCheck,
  },
  {
    slug: "estetica",
    title: "Estética e lentes de contato",
    short: "Facetas e lentes em porcelana ou resina.",
    description:
      "Harmonização do sorriso com facetas, lentes de contato dental e restaurações estéticas feitas sob medida.",
    icon: Gem,
  },
  {
    slug: "endodontia",
    title: "Endodontia (canal)",
    short: "Tratamento de canal com conforto.",
    description:
      "Tratamento endodôntico com tecnologia rotatória e anestesia cuidadosa, para aliviar a dor e preservar o dente.",
    icon: HeartPulse,
  },
  {
    slug: "periodontia",
    title: "Periodontia",
    short: "Saúde da gengiva e do osso.",
    description:
      "Prevenção e tratamento de gengivite e periodontite, raspagem e acompanhamento da saúde gengival.",
    icon: Activity,
  },
  {
    slug: "odontopediatria",
    title: "Odontopediatria",
    short: "Atendimento acolhedor para crianças.",
    description:
      "Cuidado odontológico para bebês, crianças e adolescentes, em um ambiente leve e sem medo.",
    icon: Baby,
  },
];
