import { createServerFn } from "@tanstack/react-start";
import { appointmentSchema } from "./appointment-schema";

export const submitAppointment = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => appointmentSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("appointment_requests").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      preferred_period: data.preferredPeriod ?? null,
      message: data.message ? data.message : null,
    });
    if (error) {
      console.error("appointment insert failed", error);
      return { ok: false as const };
    }
    return { ok: true as const };
  });
