"use server";
import * as z from "zod";
import { contactSchema } from "@/schemas";
import { compileContactFormTemplate, sendMail } from "@/mail/mail";

export const contactAction = async (
  values: z.infer<typeof contactSchema>,
  captchaToken: string
) => {
  const validatedFields = contactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Datos inválidos" };
  }

  if (!captchaToken) {
    return {
      error: "Por favor, verifica que no eres un robot",
    };
  }

  const catpchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    {
      method: "POST",
    }
  );

  const captchaResult = await catpchaResponse.json();

  if (!captchaResult.success) {
    return {
      error: "Captcha inválido",
    };
  }

  const { name, email, phone, message } = validatedFields.data;

  const htmlBody = compileContactFormTemplate(name, email, phone, message);

  try {
    await sendMail({
      to: "julio.sanic.gt.256@gmail.com",
      subject: "Nuevo mensaje de contacto",
      body: htmlBody,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }

    return {
      error: "Error al enviar el correo",
    };
  }

  return {
    success: "Gracias por contactarnos, te responderemos pronto",
  };
};
