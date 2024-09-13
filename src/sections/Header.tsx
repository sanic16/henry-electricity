import ImageTheme from "@/components/ImageTheme";

const Header = () => {
  const images = [
    "servicios-electricos-ajquejay/vbqn6wa9oou3d9ohml63",
    "servicios-electricos-ajquejay/m0d4w79sf96jw35q2gl4",
  ];

  return (
    <div className="px-4 pb-4 h-[calc(100vh-5rem)] bg-white dark:bg-black">
      <div className="w-full h-full relative mt-20">
        <ImageTheme images={images} />
        <div className="absolute top-1/2 left-8 max-w-60 sm:max-w-sm lg:max-w-lg p-4 -translate-y-16 border-2 md:p-10 border-yellow-200">
          <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white mb-4 text-2xl md:text-5xl uppercase">
            Servicios eléctricos
          </h1>
          <p className="text-yellow-100 text-xl">
            Expertos en instalaciones eléctricas, mantenimiento y reparación de
            sistemas eléctricos de baja y media tensión.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
