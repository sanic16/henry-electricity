"use server";
import { newsletterSchema } from "@/schemas";

export const newsletterAction = async (email: string) => {
  const validation = newsletterSchema.safeParse({ email });

  if (!validation.success) {
    return {
      error: "Por favor, introduce un correo electrónico válido",
    };
  }

  console.log("Email subscription successful", email);
  return {
    success: true,
  };
};
