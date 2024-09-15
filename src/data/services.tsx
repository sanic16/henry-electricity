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

export const navbar = [
  {
    id: 1,
    title: "Inicio",
    href: "/",
  },
  {
    id: 2,
    title: "Contacto",
    href: "/contacto",
  },
];

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
      "Análisis de armónicos y calidad de energía en sistemas eléctricos.",
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
    description: "Normas de instalaciones eléctricas en EE.UU.",
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

export const questions: {
  id: number;
  question: string;
  answer: string;
}[] = [
  {
    id: 1,
    question:
      "¿Cuánto tiempo tarda una instalación eléctrica residencial o comercial?",
    answer:
      "El tiempo para completar una instalación eléctrica depende del tamaño del proyecto. Para instalaciones residenciales estándar, el tiempo puede variar entre 3 y 5 días laborales, mientras que proyectos comerciales de mayor envergadura pueden tomar entre 1 a 3 semanas. Siempre garantizamos un tiempo estimado durante la visita técnica inicial.",
  },
  {
    id: 2,
    question: "¿Ofrecen mantenimientos preventivos a largo plazo?",
    answer:
      "Sí, ofrecemos contratos de mantenimiento preventivo diseñados para asegurar la longevidad y seguridad de tus instalaciones eléctricas. Estos incluyen revisiones periódicas, mediciones de parámetros eléctricos y corrección de fallas antes de que se conviertan en problemas mayores.",
  },
  {
    id: 3,
    question:
      "¿Puedo integrar paneles solares en mi instalación eléctrica actual?",
    answer:
      "Sí, realizamos estudios de compatibilidad para integrar sistemas de energía solar en instalaciones eléctricas existentes. Evaluamos la infraestructura actual y diseñamos un plan de integración que optimiza el consumo de energía y maximiza los ahorros.",
  },
  {
    id: 4,
    question:
      "¿Cuáles son los beneficios de corregir el factor de potencia en mi negocio?",
    answer:
      "Además de evitar multas por parte de la empresa suministradora, la corrección del factor de potencia reduce el desgaste en los equipos eléctricos y optimiza la eficiencia energética de tus instalaciones, lo que puede representar ahorros significativos en tu factura de electricidad.",
  },
  {
    id: 5,
    question:
      "¿Cuál es el proceso para solicitar un diagnóstico de calidad de energía?",
    answer:
      "El proceso comienza con una consulta inicial donde evaluamos tus necesidades específicas. Luego, programamos una visita técnica en el sitio para tomar las mediciones necesarias. Una vez analizados los datos, te entregamos un informe detallado con las recomendaciones para mejorar la calidad de la energía en tu instalación.",
  },
  {
    id: 6,
    question:
      "¿En qué áreas geográficas ofrecen sus servicios de instalación eléctrica?",
    answer:
      "Actualmente ofrecemos nuestros servicios en Ciudad de Guatemala, Escuintla, Sacatepéquez y Chimaltenango. Si te encuentras en estas zonas, podemos programar una visita técnica y asesorarte personalmente.",
  },
  {
    id: 7,
    question:
      "¿Ofrecen diseño eléctrico en AutoCAD para proyectos residenciales y comerciales?",
    answer:
      "Sí, contamos con un equipo especializado en el diseño eléctrico utilizando AutoCAD, lo que nos permite ofrecer planos detallados y precisos para proyectos residenciales, comerciales e industriales. Estos planos son esenciales para garantizar la eficiencia y seguridad en la instalación.",
  },
  {
    id: 8,
    question: "¿Puedo solicitar una consulta técnica en mi ubicación?",
    answer:
      "Sí, ofrecemos visitas técnicas en Ciudad de Guatemala, Escuintla, Sacatepéquez y Chimaltenango. Durante la visita, nuestros técnicos evaluarán tus necesidades eléctricas y te proporcionarán un plan de acción personalizado.",
  },
  {
    id: 9,
    question:
      "¿Tienen experiencia en instalaciones eléctricas en áreas rurales?",
    answer:
      "Aunque nos enfocamos principalmente en áreas urbanas como Ciudad de Guatemala, Escuintla, Sacatepéquez y Chimaltenango, también hemos trabajado en proyectos en zonas semi-rurales dentro de estas áreas. Evaluamos cada proyecto para ofrecer una solución acorde a las características del lugar.",
  },
  {
    id: 10,
    question:
      "¿Puedo obtener planos eléctricos firmados por un ingeniero eléctrico colegiado?",
    answer:
      "Sí, nuestros ingenieros eléctricos están colegiados y pueden proporcionarte planos eléctricos firmados y sellados, cumpliendo con todas las normativas locales necesarias para trámites de construcción o inspección de instalaciones.",
  },
];
