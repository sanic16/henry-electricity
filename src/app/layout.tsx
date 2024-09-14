import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Servicos Eléctricos",
  description:
    "Servicios eléctricos de baja y media tensión en la ciudad de Guatemala, Chimaltenango, Sacatepéquez y Escuintla.",
  keywords: `electricidad, electricista, baja tensión, media tensión, instalaciones eléctricas, mantenimiento eléctricos, 
  electricidad comercial, diseño eléctrico, electricidad industrial, electricidad residencial, electricidad en general,
  automatización eléctrica, corrección de factor de potencia, instalación de plantas eléctricas, instalación de paneles solares,
  normas eléctricas, normas de seguridad eléctrica, NEMA, NFPA, NEC, IEEE, IEC`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={cn("bg-slate-600 dark:bg-gray-800", roboto.className)}>
        <ThemeContextProvider>
          <Navbar />
          <main className="container max-w-[1280px] px-4 mx-auto bg-[whitesmoke] dark:bg-black overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
