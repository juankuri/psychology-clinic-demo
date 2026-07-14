import type { ProjectManifest } from '../src/types/manifest';

export const manifest: ProjectManifest = {
  project: {
    id: 'demo-psicologia',
    tier: 'landing',
  },

  business: {
    name: 'Luna Marín',
    tagline: 'Psicología Clínica y Educativa',
    locality: 'Villa Serena, México',
    heroTitle: 'Psicología para niños, adolescentes y familias en *Villa Serena*.',
    description:
      'Atiendo procesos de infancia, adolescencia y adultez, con experiencia particular en autismo y neurodivergencia. Sesiones presenciales, sin diagnósticos apresurados.',
  },

  contact: {
    whatsapp: {
      number: '5215555555555',
      message: 'Hola, me gustaría agendar mi primera sesión.',
    },
  },

  location: {
    address: 'Av. Principal 123, Fracc. Los Sauces, Villa Serena, 00000',
    googleMapsUrl: 'https://maps.google.com/?q=Villa+Serena',
  },

  social: {
    facebook: 'https://www.facebook.com/tu-negocio',
  },

  theme: {
    preset: 'professional',
    tokens: {
      colorPrimary: '#3E2A1B',
      colorAccent: '#C97C45',
    },
  },

  // Switchable image slots. Add a `src` and set `enabled: true` to activate a
  // real image; leave disabled to show the styled placeholder.
  images: {
    hero: { enabled: false, alt: 'Consultorio de psicología', placeholder: 'Foto del consultorio o de la profesional' },
    about: { enabled: false, alt: 'Retrato profesional', placeholder: 'Retrato profesional' },
    'gallery-1': { enabled: false, alt: 'Sala de terapia', placeholder: 'Sala de terapia' },
    'gallery-2': { enabled: false, alt: 'Sala de espera', placeholder: 'Sala de espera' },
    'gallery-3': { enabled: false, alt: 'Detalle del consultorio', placeholder: 'Detalle decorativo' },
    map: { enabled: false, alt: 'Mapa del consultorio', placeholder: 'Captura del mapa de Google' },
  },

  seo: {
    title: 'Luna Marín — Psicología Clínica y Educativa en Villa Serena',
    description:
      'Psicóloga clínica y educativa en Villa Serena. Atención a niños, adolescentes y adultos, con formación en autismo y neurodivergencia.',
    canonicalUrl: 'https://demo-psicologia.example.com',
    ogImage: '/og-image.jpg',
    locale: 'es-MX',
  },

  sections: [
    { id: 'hero' },
    { id: 'trust' },
    { id: 'about', heading: 'Acompañamiento completo en los procesos con mis pacientes.' },
    {
      id: 'services',
      heading: '¿En qué puedo acompañarte?',
      subtitle: 'Cada persona y cada familia llega con algo distinto. Estos son los espacios donde puedo caminar contigo.',
    },
    { id: 'benefits', heading: 'Cómo trabajo contigo' },
    {
      id: 'process',
      heading: 'Así empieza tu primera sesión',
      subtitle: 'No necesitas tener las palabras exactas ni saber por dónde empezar. Solo escríbeme.',
    },
    { id: 'gallery', heading: 'Conoce el consultorio' },
    {
      id: 'testimonials',
      heading: 'Lo que sienten quienes ya empezaron',
      subtitle: 'Testimonios de ejemplo — se reemplazarán por reseñas reales con autorización.',
    },
    { id: 'faq', heading: 'Resolvamos tus dudas antes de empezar' },
    {
      id: 'contact',
      heading: 'Te espero en Villa Serena',
      subtitle: 'Escríbeme por WhatsApp y agenda tu primera sesión. Yo me encargo del resto.',
    },
  ],

  cta: {
    primary: {
      label: 'Agenda tu primera sesión',
      type: 'whatsapp',
    },
  },
};
