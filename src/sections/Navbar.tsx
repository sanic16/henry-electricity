"use client";
import { cn } from "@/lib/utils";
import { Oswald } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

const oswald = Oswald({
  weight: ["600"],
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgOnScroll, setBgOnScroll] = useState(false);
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? window.localStorage.getItem("theme") || "dark"
      : "dark"
  );

  useEffect(() => {
    if (typeof window !== undefined) {
      if (theme === "dark") {
        window.document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        window.document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [theme]);

  useEffect(() => {
    const changeBgOnScroll = () => {
      if (typeof window !== undefined) {
        if (window.scrollY > 80) {
          setBgOnScroll(true);
        } else {
          setBgOnScroll(false);
        }
      }
    };

    if (typeof window !== undefined) {
      window.addEventListener("scroll", changeBgOnScroll);
    }

    return () => {
      if (typeof window !== undefined) {
        window.removeEventListener("scroll", changeBgOnScroll);
      }
    };
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      if (isOpen) {
        window.document.body.style.overflow = "hidden";
      } else {
        window.document.body.style.overflow = "auto";
      }
    }

    return () => {
      if (typeof window !== undefined) {
        window.document.body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed container max-w-[1280px] mx-auto  h-20 top-0 left-0 right-0 grid items-center px-4 text-black dark:text-white z-[1] ${
        bgOnScroll
          ? "bg-white/50 dark:bg-black/55 backdrop-blur-sm"
          : "bg-[whitesmoke] dark:bg-black"
      }`}
    >
      <nav className="flex items-center justify-between font-bold">
        <Link
          href={"/"}
          className={cn(
            "text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-black dark:to-yellow-200",
            oswald.className
          )}
        >
          HenryElectricidad
        </Link>
        <div className="hidden lg:flex gap-8">
          <div>
            <Link href={"/"}>Inicio</Link>
          </div>
          <div>
            <Link href={"/"}>Nosotros</Link>
          </div>
          <div>
            <Link href={"/"}>Equipo</Link>
          </div>
          <div>
            <Link href={"/"}>Proyectos</Link>
          </div>
          <div>
            <Link href={"/"}>Contacto</Link>
          </div>
        </div>

        {/* MOBILE */}
        <div
          className={`lg:hidden transition-all duration-500 fixed ${
            isOpen ? "left-0 backdrop-blur-md" : "-left-full"
          } top-20 right-0 bottom-0 flex flex-col w-full h-[calc(100vh-5rem)] pt-40 landscape:pt-4 landscape:space-y-1 pl-12 space-y-3 text-lg text-black bg-yellow-500/80`}
        >
          <div>
            <Link href={"/"}>Inicio</Link>
          </div>
          <div>
            <Link href={"/"}>Nosotros</Link>
          </div>
          <div>
            <Link href={"/"}>Equipo</Link>
          </div>
          <div>
            <Link href={"/"}>Proyectos</Link>
          </div>
          <div>
            <Link href={"/"}>Contacto</Link>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <div
            className="cursor-pointer dark:text-yellow-500"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <MoonIcon size={24} /> : <SunIcon size={24} />}
          </div>
          <div>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="hamburguer outline-none "
            >
              <span className={`${isOpen && "open"} hamburguer-top`}></span>
              <span className={`${isOpen && "open"} hamburguer-middle`}></span>
              <span className={`${isOpen && "open"} hamburguer-bottom`}></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
