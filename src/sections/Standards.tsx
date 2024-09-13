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
      <div className="grid grid-cols-1 sm:grid-cols-[325px] md:grid-cols-[350px,350px] justify-items-center justify-center gap-8">
        {standards.map((standard) => (
          <Card
            key={standard.id}
            className="min-w-[250px] max-w-[300px] w-full sm:max-w-full"
          >
            <CardHeader className="text-center">
              <CardTitle className="bg-clip-text text-xl text-transparent bg-gradient-to-r dark:from-yellow-500 from-blue-950 to-black max-w-full  dark:to-yellow-200">
                {standard.title} - {standard.id === 2 && <br />} (
                {standard.titleAbbreviation})
              </CardTitle>

              <CardDescription>{standard.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="">{standard.content}</p>
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
