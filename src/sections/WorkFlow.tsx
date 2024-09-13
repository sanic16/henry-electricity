import Section from "@/components/Section";
import React from "react";

const WorkFlow = () => {
  return (
    <Section
      title="Como Trabajamos"
      description="Nuestro proceso de trabajo es simple y efectivo."
    >
      <div className="flex justify-center">
        <div>Análisis del proyecto</div>
        <div>Cotización</div>
        <div>Diseño y desarrollo</div>
        <div>Implementación</div>
        <div>Soporte</div>
      </div>
    </Section>
  );
};

export default WorkFlow;
