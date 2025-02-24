const Footer = () => {
  return (
    <footer className="container max-w-[1280px] px-4 mx-auto bg-[whitesmoke] dark:bg-black text-center pb-2 border-t border-black pt-4 border-dashed dark:border-yellow-200">
      <p>&copy; {new Date().getFullYear()} Soluciones Eléctricas</p>
      <p className="text-sm">
        Desarrollado por{" "}
        <a
          href="https://juliosanic.site"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase font-bold text-blue-950 dark:text-yellow-500"
        >
          Julio Sanic
        </a>
      </p>
    </footer>
  );
};

export default Footer;
