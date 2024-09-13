const Footer = () => {
  return (
    <footer className="text-center px-4 pb-2 border-t border-black pt-4 border-dashed dark:border-yellow-200">
      <p>&copy; {new Date().getFullYear()} Henry Ajquejay</p>
      <p className="text-sm">
        Diseñado y desarrollado por{" "}
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
