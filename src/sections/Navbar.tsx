"use client";
import { cn } from "@/lib/utils";
import { Oswald } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { MenuIcon, XIcon } from "lucide-react";
import useTheme from "@/context/ThemeContext";
import { navbar } from "@/data/services";

const oswald = Oswald({
  weight: ["600"],
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgOnScroll, setBgOnScroll] = useState(false);
  const { setTheme, theme } = useTheme();

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
      className={`container max-w-[1280px] mx-auto fixed ${
        bgOnScroll ? "h-28" : "h-20"
      } top-0 left-0 right-0 bg-[whitesmoke] dark:bg-black w-full grid ${
        bgOnScroll ? "grid-rows-[2fr,5fr]" : "items-center"
      } z-[1] ${
        bgOnScroll
          ? "bg-white/50 dark:bg-black/55 backdrop-blur-sm shadow-sm border-1 border-b border-black/50 dark:border-yellow-200/50"
          : "bg-[whitesmoke] dark:bg-black"
      }`}
    >
      <div
        className={`${
          bgOnScroll ? "block" : "hidden"
        } bg-blue-950 dark:bg-yellow-500 flex items-center justify-center`}
      >
        <p className="text-white text-center dark:text-black">
          <a href="tel:+573103333333">
            Ing. <span className="hidden sm:inline">Electricista</span> Henry
            Ajquejay +502 3236 5352
          </a>
        </p>
      </div>
      <nav className="px-4 flex items-center justify-between font-bold self-center">
        <Link
          href={"/"}
          className={cn(
            "text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-950 dark:from-yellow-500 to-black dark:to-yellow-200 flex",
            oswald.className
          )}
        >
          Ingeniería Eléctrica
        </Link>
        <div className="hidden lg:flex gap-8">
          <div
            className="cursor-pointer dark:text-yellow-500"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <MoonIcon size={24} /> : <SunIcon size={24} />}
          </div>
          {navbar.map((item) => (
            <div key={item.id}>
              <Link href={item.href}>{item.title}</Link>
            </div>
          ))}
        </div>

        {/* MOBILE */}
        <div
          className={`lg:hidden transition-all duration-500 fixed z-10 ${
            isOpen ? "top-20 backdrop-blur-md" : "-top-[100vh]"
          } left-0 right-0 bottom-0 flex flex-col w-full h-[calc(100vh-5rem)] pt-40 landscape:pt-4 landscape:space-y-1 pl-12 space-y-3 text-lg text-white bg-black/95`}
        >
          {navbar.map((item) => (
            <div key={item.id}>
              <Link href={item.href}>{item.title}</Link>
            </div>
          ))}
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
              className="hamburguer outline-none grid text-black dark:text-white"
            >
              {isOpen ? <XIcon size={32} /> : <MenuIcon size={32} />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
