import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";

const Services = () => {
  return (
    <Section
      title="Servicios"
      description="Ofrecemos soluciones integrales en ingeniería eléctrica, garantizando la máxima calidad y eficiencia en cada proyecto."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <div className="flex justify-center mb-2">
                {
                  <service.icon className="h-10 w-10  text-blue-800 dark:text-yellow-200" />
                }
              </div>
              <CardTitle className="text-center font-semibold text-xl">
                {service.title}
              </CardTitle>
              <CardContent>
                <p className="text-center text-base">{service.description}</p>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Services;
