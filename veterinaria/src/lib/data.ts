export const siteConfig = {
  name: "Pawcare",
  /** Teléfono visible en la web */
  phone: "(+51) 999 000 000",
  /** Para enlaces tel: (sin espacios, con +) */
  phoneLink: "+51999000000",
  /** WhatsApp visible en la web */
  whatsapp: "+51 999 000 000",
  /** Número internacional sin + para wa.me (código país + número) */
  whatsappNumber: "51999000000",
  email: "contacto@pawcare.com",
  address: "Av. Principal 123, Ciudad – País",
};

export function getWhatsAppUrl(
  message = "Hola, quisiera agendar una cita en Pawcare."
) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#instalaciones", label: "Instalaciones" },
];

export const stats = [
  { value: 2500, suffix: "+", label: "Mascotas atendidas" },
  { value: 1850, suffix: "+", label: "Clientes felices" },
  { value: 1300, suffix: "+", label: "Testimonios" },
];

export const services = [
  {
    id: "vacunacion",
    title: "Vacunación",
    description:
      "Protege la salud de tu mascota con un programa de vacunación completo y personalizado.",
    icon: "syringe",
    featured: true,
  },
  {
    id: "grooming",
    title: "Baño y Corte",
    description:
      "Baño y corte profesional para una mascota radiante, feliz y con el mejor aroma.",
    icon: "brush",
    featured: false,
  },
  {
    id: "consulta",
    title: "Consulta Veterinaria",
    description:
      "Atención veterinaria integral para la salud de tu mascota, desde la nariz hasta la cola.",
    icon: "stethoscope",
    featured: false,
  },
  {
    id: "profilaxis",
    title: "Profilaxis",
    description:
      "Dientes sanos y fuertes con cuidados expertos y personalizados para tu mejor amigo.",
    icon: "sparkles",
    featured: false,
  },
];

export const clinicServices = [
  "Consulta Veterinaria",
  "Laboratorio Veterinario",
  "Centro de Imágenes",
  "Centro de Cirugía",
  "Hospitalización 24h",
  "Farmacia Veterinaria",
];

export const facilities = [
  { id: "feed", label: "Entrenamiento alimenticio", side: "left" },
  { id: "health", label: "Exámenes de salud", side: "left" },
  { id: "overnight", label: "Cuidado nocturno", side: "right" },
  { id: "medical", label: "Atención médica", side: "right" },
  { id: "imaging", label: "Diagnóstico por imágenes", side: "left" },
  { id: "pharmacy", label: "Farmacia veterinaria", side: "right" },
];

export const whyChooseUs = [
  {
    title: "Equipo veterinario especializado",
    description:
      "Veterinarios con amplia experiencia, comprometidos con los más altos estándares de ética profesional y cuidado compasivo.",
  },
  {
    title: "Tecnología avanzada",
    description:
      "Equipos de última generación para diagnósticos rápidos y precisos, con la mayor seguridad para tu mascota.",
  },
  {
    title: "Infraestructura sin estrés",
    description:
      "Espacios amplios y tranquilos que minimizan el estrés durante consultas y tratamientos.",
  },
  {
    title: "Servicio integral",
    description:
      "Desde consultas preventivas y cirugías hasta hospitalización y farmacia, todo en un solo lugar.",
  },
];

export const testimonials = [
  {
    name: "María G.",
    pet: "Dueña de Luna",
    quote:
      "Llevé a mi mascota por un chequeo y el equipo fue muy atento. El veterinario explicó todo con claridad y el tratamiento funcionó rápidamente.",
  },
  {
    name: "Carlos R.",
    pet: "Dueño de Max",
    quote:
      "Mi perro tenía problemas de piel y la doctora fue muy clara con el diagnóstico y el tratamiento. Me dio mucha tranquilidad saber que estaba en buenas manos.",
  },
  {
    name: "Ana L.",
    pet: "Dueña de Kira",
    quote:
      "Llevé a mi perra para su chequeo preventivo. Le realizaron análisis completos y me explicaron los resultados con detalle. Excelente atención.",
  },
];

export const images = {
  heroMain: "/images/hero-clinic.png",
  heroSecondary: "/images/hero-puppy.png",
  vetCircle: "/images/vet-booking.png",
};
