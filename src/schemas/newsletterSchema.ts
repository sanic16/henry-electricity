import * as z from "zod";

export const newsletterSchema = z.object({
  email: z
    .string({
      message: "Por favor, introduce un correo electrónico válido",
    })
    .email({
      message: "Por favor, introduce un correo electrónico válido",
    }),
});
