import { z } from "zod";

export const stepTwoSchema = z.object({
  gender: z
    .string({ required_error: "Sexo é obrigatório" })
    .min(1, { message: "Sexo é obrigatório" }),
  objective: z
    .string({ required_error: "Objetivo é obrigatório" })
    .min(1, { message: "Objetivo é obrigatório" }),
  level: z
    .string({ required_error: "Nível é obrigatório" })
    .min(1, { message: "Nível é obrigatório" }),
});

export type StepTwoSchemaType = z.infer<typeof stepTwoSchema>;
