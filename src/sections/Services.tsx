import Section from "@/components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/data/services";

const Services = () => {
  return (
    <Section title="Servicios">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <div className="flex justify-center mb-2">
                {
                  <service.icon className="h-10 w-10 text-yellow-600 dark:text-yellow-200" />
                }
              </div>
              <CardTitle className="text-center text-2xl">
                {service.title}
              </CardTitle>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Services;
