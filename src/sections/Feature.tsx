import Section from "@/components/Section";
import Image from "next/image";

const Feature = () => {
  return (
    <Section padding="pt-16 pb-44 sm:pb-40 md:pb-48 lg:pb-56">
      <div className="relative w-full sm:w-fit">
        <div className="relative h-[400px] lg:h-[500px] w-full sm:w-[450px] md:w-[500px] lg:w-[700px] xl:w-[850px]">
          <Image
            src={`${process.env.BASE_IMAGE_URL}servicios-electricos-ajquejay/feature/cmdvjcdu4yhdoap84zt6`}
            alt="Servicios eléctricos"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-[275px] w-1/2 sm:w-[450px] md:w-[450px] lg:w-[600px] absolute top-60 sm:top-20 md:top-24 lg:top-32   right-0 sm:-right-32 md:-right-56 lg:-right-72 bg-card shadow-sm py-4 sm:py-8 lg:py-16 px-4 sm:px-8 lg:px-10 border-b-2 lg:border-b-[4px] border-b-blue-950 dark:border-b-yellow-500 border-r-2 lg:border-r-[4px] border-r-blue-950 dark:border-r-yellow-500">
          <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase mb-2 sm:mb-4 lg:mb-6 leading-[1.18]">
            Servicios de calidad en ingeniería eléctrica
          </h1>
          <p className="text-base lg:text-lg mb-4">
            Ofrecemos soluciones integrales en ingeniería eléctrica,
            garantizando la máxima calidad y eficiencia en cada proyecto.
          </p>
          <p className="hidden sm:block lg:text-lg">
            Nuestro equipo de profesionales altamente capacitados y
            especializados en el sector eléctrico, nos permite ofrecer un
            servicio de calidad y eficiente, cumpliendo con los más altos
            estándares de seguridad y normativas vigentes en el sector.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Feature;
