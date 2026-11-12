import { z } from "zod";
import { services } from "./clinic";

export const serviceOptions = [...services.map((s) => s.title), "Ainda não sei / avaliação"] as const;
export const periodOptions = ["Manhã", "Tarde", "Noite", "Sábado"] as const;

export const appointmentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Informe seu nome." })
    .max(100, { message: "Use no máximo 100 caracteres." }),
  email: z
    .string()
    .trim()
    .email({ message: "Informe um e-mail válido." })
    .max(255, { message: "E-mail muito longo." }),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9()+\-\s]{8,30}$/, { message: "Informe um telefone válido com DDD." })
    .refine((v) => v.replace(/\D/g, "").length >= 10, {
      message: "Informe um telefone válido com DDD.",
    }),
  service: z.enum(serviceOptions as unknown as [string, ...string[]], {
    errorMap: () => ({ message: "Escolha um serviço." }),
  }),
  preferredPeriod: z
    .enum(periodOptions as unknown as [string, ...string[]])
    .optional(),
  message: z.string().trim().max(1000, { message: "Use no máximo 1000 caracteres." }).optional(),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;
