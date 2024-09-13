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

export const standards = [
  {
    id: 1,
    title: "IEC",
    titleAbbreviation: "International Electrotechnical Commission",
    description: "Normas de instalaciones eléctricas en Europa.",
    content:
      "Aplicamos normas IEC para asegurar la calidad y la seguridad en instalaciones eléctricas de baja tensión, abarcando desde el diseño y la automatización hasta el mantenimiento y la instalación de sistemas eléctricos.",
    standards: [
      "IEC 60364 - Instalaciones eléctricas en baja tensión",
      "IEC 60439 - Tableros de distribución de energía eléctrica",
      "IEC 61439 - Tableros de baja tensión",
      "IEC 61557 - Medición de aislamiento",
      "IEC 61643 - Protección contra sobretensiones",
    ],
  },
  {
    id: 2,
    title: "NEC",
    titleAbbreviation: "National Electrical Code",
    description: "Normas de instalaciones eléctricas en Estados Unidos.",
    content:
      "Adherimos a las normas NEC para garantizar la seguridad y el rendimiento óptimo en instalaciones eléctricas de baja tensión, incluyendo el diseño, la automatización, el mantenimiento y la instalación de sistemas eléctricos.",
    standards: [
      "NEC 210 - Instalaciones eléctricas en viviendas",
      "NEC 215 - Instalaciones eléctricas en comercios",
      "NEC 220 - Cálculo de cargas eléctricas",
      "NEC 240 - Protección contra sobrecargas",
      "NEC 250 - Conexión a tierra",
    ],
  },
];
