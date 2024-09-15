"use server";
import * as z from "zod";
import { newsletterSchema } from "@/schemas";
import { compileNewsletterWelcomeTemplate, sendMail } from "@/mail/mail";
import prisma from "@/lib/prisma";

export const newsletterAction = async (
  values: z.infer<typeof newsletterSchema>
) => {
  const validatedValues = newsletterSchema.safeParse(values);

  if (!validatedValues.success) {
    return {
      error: "Ingrese un correo válido",
    };
  }

  try {
    const existingSubscriber = await prisma.newsLetter.findUnique({
      where: {
        email: validatedValues.data.email,
      },
    });

    if (existingSubscriber) {
      return {
        error: "Este correo ya está suscrito",
      };
    }

    await prisma.newsLetter.create({
      data: {
        email: validatedValues.data.email,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Error al guardar el correo",
    };
  }

  const htmlBody = compileNewsletterWelcomeTemplate();

  try {
    await sendMail({
      to: validatedValues.data.email,
      subject: "¡Gracias por suscribirte!",
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

  console.log("Email sent to: ", validatedValues.data.email);
  return {
    success: "Mensaje enviado",
  };
};
