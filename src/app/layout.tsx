import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es">
      <body className="bg-gray-600 dark:bg-gray-800">
        <main className="container max-w-[1280px] mx-auto">{children}</main>
      </body>
    </html>
  );
}
