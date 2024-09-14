import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string({
      message: "Nombre requerido",
    })
    .min(3, {
      message: "Nombre debe tener al menos 3 caracteres",
    })
    .max(50, {
      message: "Nombre debe tener menos de 50 caracteres",
    }),
  email: z.string({
    message: "Correo electrónico requerido",
  }),
  phone: z
    .string({
      message: "Número de teléfono requerido",
    })
    .min(8, {
      message: "Número de teléfono debe tener al menos 8 caracteres",
    })
    .max(8, {
      message: "Número de teléfono debe tener a lo más 8 caracteres",
    }),
  message: z
    .string({
      message: "Mensaje requerido",
    })
    .min(10, {
      message: "Mensaje debe tener al menos 10 caracteres",
    })
    .max(500, {
      message: "Mensaje debe tener a lo más 500 caracteres",
    }),
});
