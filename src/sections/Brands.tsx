import { BrandsCarousel } from "@/components/BrandsCarousel";
import Section from "@/components/Section";
import React from "react";

const Brands = () => {
  return (
    <Section description="Marcas con las que trabajamos" padding="py-8">
      <BrandsCarousel />
    </Section>
  );
};

export default Brands;
