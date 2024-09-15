"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import eaton from "@/../public/images/logos/EatonLogo.png";
import ge from "@/../public/images/logos/GE-Symbol-600x338.png";
import legrand from "@/../public/images/logos/Legrand-logo.jpg";
import rockwell from "@/../public/images/logos/Rockwell_logo-768x204.png";
import abb from "@/../public/images/logos/abb.png";
import scheneider from "@/../public/images/logos/schnedier.webp";
import siemens from "@/../public/images/logos/siemens-logo.png";
import Image from "next/image";
import AutoPlay from "embla-carousel-autoplay";

const brands = [
  {
    id: 1,
    name: "Eaton",
    image: eaton,
  },
  {
    id: 2,
    name: "GE",
    image: ge,
  },
  {
    id: 3,
    name: "Legrand",
    image: legrand,
  },
  {
    id: 4,
    name: "Rockwell",
    image: rockwell,
  },
  {
    id: 5,
    name: "ABB",
    image: abb,
  },
  {
    id: 6,
    name: "Scheneider",
    image: scheneider,
  },
  {
    id: 7,
    name: "Siemens",
    image: siemens,
  },
];

export function BrandsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        AutoPlay({
          delay: 3000,
          jump: false,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {brands.map((brand) => (
          <CarouselItem
            key={brand.id}
            className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
          >
            <div className="flex items-center aspect-square">
              <Image
                src={brand.image}
                alt={brand.name}
                className="w-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
