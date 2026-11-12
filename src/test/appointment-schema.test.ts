import { describe, expect, it } from "vitest";
import { appointmentSchema } from "@/lib/appointment-schema";

const valid = {
  name: "Maria Silva",
  email: "maria@example.com",
  phone: "(11) 91234-5678",
  service: "Clareamento dental",
};

describe("appointment request", () => {
  it("accepts a complete request", () => {
    expect(appointmentSchema.safeParse(valid).success).toBe(true);
  });

  it("requires a phone with area code (at least 10 digits)", () => {
    expect(appointmentSchema.safeParse({ ...valid, phone: "91234-5678" }).success).toBe(false);
  });

  it("only accepts services the clinic offers", () => {
    expect(appointmentSchema.safeParse({ ...valid, service: "Cirurgia plástica" }).success).toBe(false);
  });
});
