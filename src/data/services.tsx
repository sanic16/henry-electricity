import {
  Plug,
  Layout,
  Wrench,
  Sliders,
  TrendingUp,
  Activity,
  Power,
  Sun,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Instalaciones Eléctricas",
    description:
      "Instalaciones eléctricas de baja tensión para casas, comercios y oficinas.",
    icon: Plug,
  },
  {
    id: 2,
    title: "Diseño Eléctrico",
    description:
      "Diseño de sistemas eléctricos para proyectos de baja tensión.",
    icon: Layout, // Electrical design
  },
  {
    id: 3,
    title: "Mantenimiento Eléctrico",
    description:
      "Mantenimiento preventivo y correctivo de sistemas eléctricos.",
    icon: Wrench, // Electrical maintenance
  },
  {
    id: 4,
    title: "Automatización Eléctrica",
    description:
      "Automatización de luces, motores y sistemas eléctricos en general.",
    icon: Sliders, // Electrical automation
  },
  {
    id: 5,
    title: "Corrección de Factor de Potencia",
    description: "Estudio y correción de factor potencia para evitar multas.",
    icon: TrendingUp, // Power factor correction
  },
  {
    id: 6,
    title: "Estudios de Calidad de Energía",
    description:
      "Análisis de armónicos y calidad de energía en sistemas eléctricos industriales.",
    icon: Activity, // Power quality studies
  },
  {
    id: 7,
    title: "Instalación de Plantas Eléctricas",
    description:
      "Instalación de plantas eléctricas de emergencia y transferencia automática.",
    icon: Power, // Power plants installation
  },
  {
    id: 8,
    title: "Instalación de Paneles Solares",
    description:
      "Estudio, diseño e instalación de inversores y paneles solares.",
    icon: Sun, // Solar panels installation
  },
];
