import Contact from "@/sections/Contact";

export default function page() {
  return (
    <div className="mt-12 md:mt-20 mb-8">
      <h1 className="text-5xl text-center text-blue-950 dark:text-yellow-500 mb-4">
        Contacto
      </h1>
      <p className="text-center">
        Me puedes llamar al +502 3980-2176 o llenar el siguiente formulario.
      </p>
      <div className="mt-8">
        <Contact />
      </div>
    </div>
  );
}
