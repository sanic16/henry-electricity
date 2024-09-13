import React from "react";
import Section from "@/components/Section";
import { standards } from "@/data/services";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Standards = () => {
  return (
    <Section
      title="Normas"
      description="Cumplimos con las normas IEC o NEC dependiendo del proyecto y del equipo de trabajo."
    >
      <div className="grid grid-cols-[315px] md:grid-cols-[315px,315px] justify-center gap-8">
        {standards.map((standard) => (
          <Card key={standard.id}>
            <CardHeader className="text-center">
              <CardTitle className="bg-clip-text text-xl text-transparent bg-gradient-to-r from-yellow-500 to-black max-w-full ">
                {standard.title} - ({standard.titleAbbreviation})
              </CardTitle>

              <CardDescription>{standard.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-justify">{standard.content}</p>
              <ul className="mt-4 list-disc list-inside">
                {standard.standards.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Standards;
