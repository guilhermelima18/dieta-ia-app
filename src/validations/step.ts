import { z } from "zod";

export const stepSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  age: z.string().min(1, { message: "Idade é obrigatório" }),
  weight: z.string().min(1, { message: "Peso é obrigatório" }),
  height: z.string().min(1, { message: "Altura é obrigatório" }),
});

export type StepSchemaType = z.infer<typeof stepSchema>;
