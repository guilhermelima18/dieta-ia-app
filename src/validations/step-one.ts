import { z } from "zod";

export const stepOneSchema = z.object({
  name: z
    .string({ required_error: "Nome é obrigatório" })
    .min(1, { message: "Nome é obrigatório" }),
  age: z
    .string({ required_error: "Idade é obrigatório" })
    .min(1, { message: "Idade é obrigatório" }),
  weight: z
    .string({ required_error: "Peso é obrigatório" })
    .min(1, { message: "Peso é obrigatório" }),
  height: z
    .string({ required_error: "Altura é obrigatório" })
    .min(1, { message: "Altura é obrigatório" }),
});

export type StepOneSchemaType = z.infer<typeof stepOneSchema>;
