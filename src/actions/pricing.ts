"use server";

import { redirect } from "next/navigation";

export const pricingAction = async (consulta: string) => {
  if (typeof consulta !== "string") {
    return;
  }
  if (consulta.includes("contacto")) {
    console.log("redirecting to /contacto");
    redirect("/contacto");
  } else if (consulta.includes("servicios")) {
    return {
      redirect: "/#servicios",
    };
  } else if (consulta.includes("normas")) {
    return {
      redirect: "/#normas",
    };
  }

  return;
};
