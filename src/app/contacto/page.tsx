import Contact from "@/sections/Contact";

export default function page() {
  return (
    <div className="mt-12 md:mt-20">
      <h1 className="text-5xl text-center text-blue-950 dark:text-yellow-500">
        Contacto
      </h1>
      <p className="text-center">
        Si tienes alguna pregunta, no dudes en contactarnos.
      </p>
      <div className="mt-8">
        <Contact />
      </div>
    </div>
  );
}
