"use server";
// import * as z from "zod";
import { contactSchema } from "@/schemas";

export const contactAction = async (values: unknown) => {
  const validatedFields = contactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Datos inválidos" };
  }
  console.log("Datos válidos", validatedFields.data);
  return {
    success: "Datos válidos",
  };
};
