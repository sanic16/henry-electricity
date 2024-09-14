"use client";
import Section from "@/components/Section";
import { pricingAction } from "@/actions/pricing";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Pricing = () => {
  const [consulta, setConsulta] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await pricingAction(consulta);
    console.log(response);
    if (response && response.redirect) {
      router.push(response.redirect);
    }
  };
  return (
    <Section
      title="Precios"
      description="El precio de nuestros servicios varía dependiendo del tipo de proyecto y de la cantidad de trabajo requerido."
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="consulta"
          className="text-black"
          name="consulta"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </Section>
  );
};

export default Pricing;
