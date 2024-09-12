import Image from "next/image";

const Header = () => {
  return (
    <div className="px-4 pb-4 h-[calc(100vh-5rem)] bg-white dark:bg-black">
      <div className="w-full h-full relative mt-20">
        <Image
          src={`${process.env.BASE_IMAGE_URL}servicios-electricos-ajquejay/m0d4w79sf96jw35q2gl4`}
          alt="Servicios eléctricos"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-8 max-w-sm md:max-w-lg p-4 -translate-y-16 border-2 md:p-10 border-yellow-200">
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
