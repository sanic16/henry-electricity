import ImageTheme from "@/components/ImageTheme";
import Link from "next/link";

const Header = () => {
  const images = [
    "servicios-electricos-ajquejay/vbqn6wa9oou3d9ohml63",
    "servicios-electricos-ajquejay/m0d4w79sf96jw35q2gl4",
  ];

  return (
    <div className="pb-4 h-[calc(100vh-5rem)]">
      <div className="w-full h-full relative">
        <ImageTheme images={images} />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-md p-4 flex flex-col gap-4 items-center md:max-w-3xl xl:gap-8 xl:max-w-4xl">
          <h1 className="font-semibold text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white dark:from-yellow-200 dark:to-white ">
            Soluciones Eléctricas
          </h1>
          <p className="text-xl text-center max-w-lg text-blue-200 dark:text-yellow-100 ">
            Servicios de calidad en diseño e instalación de sistemas eléctricos.
          </p>
          <Link
            href="/contacto"
            className="text-2xl text-center w-full max-w-md uppercase border-2 border-blue-200 p-4 text-blue-200 hover:bg-blue-200 hover:text-blue-950 dark:border-yellow-200 dark:text-yellow-200 dark:hover:bg-yellow-200 dark:hover:text-black"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
