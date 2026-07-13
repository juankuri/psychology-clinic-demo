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
    heroTitle: 'Un espacio que *crece* contigo.',
    description:
      'Acompañamiento psicológico cálido y profesional para niños, adolescentes y familias, con especial sensibilidad hacia la neurodivergencia. Terapia sin juicios, a tu propio ritmo.',
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
      colorPrimary: '#BE6A45',
      colorAccent: '#D8A548',
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
      'Acompañamiento psicológico cálido y profesional para niños, adolescentes y familias, con enfoque en neurodivergencia y autismo.',
    canonicalUrl: 'https://demo-psicologia.example.com',
    ogImage: '/og-image.jpg',
    locale: 'es-MX',
  },

  sections: [
    { id: 'hero' },
    { id: 'trust' },
    { id: 'about', heading: 'Acompaño procesos, no impongo diagnósticos.' },
    {
      id: 'services',
      heading: '¿En qué puedo acompañarte?',
      subtitle: 'Cada persona y cada familia llega con algo distinto. Estos son los espacios donde puedo caminar contigo.',
    },
    { id: 'benefits', heading: 'Terapia que se siente humana' },
    {
      id: 'process',
      heading: 'Dar el primer paso es más simple de lo que crees',
      subtitle: 'No necesitas tener las palabras exactas ni saber por dónde empezar. Solo escríbeme.',
    },
    { id: 'gallery', heading: 'Un consultorio hecho para respirar' },
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
