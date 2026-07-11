import type { ProjectManifest } from '../src/types/manifest';

export const manifest: ProjectManifest = {
  project: {
    id: 'demo-psicologia',
    tier: 'landing',
  },

  business: {
    name: 'L.P. Ale Izaguirre',
    tagline: 'Psicóloga Clínica Y Educativa',
    description:
      'Consulta psicológica profesional en Ciudad del Carmen. Terapia individual a niños, adolescentes y familias con más de 10 años de experiencia.',
    logo: '/assets/logo.svg',
  },

  contact: {
    whatsapp: {
      number: '9381373456',
      message: 'Hola Psícologa Ale, me gustaría agendar una cita.',
    },
    email: 'contacto@demo-psicologia.example.com',
    phone: '+52 33 0000 0000',
  },

  location: {
    address: 'Andador Misión Colonial 23, Puerta de Hierro, Calle Mision Guadalupe, 24156, CAM, México',
    googleMapsUrl: 'https://maps.app.goo.gl/8PNnmR9DVJSAJfhd6',
  },

  social: {
    instagram: 'https://instagram.com/demo',
    facebook: 'https://www.facebook.com/aleizaguirrepsicologia/',
  },

  theme: {
    preset: 'professional',
    tokens: {
      colorPrimary: '#C86B3C',
      colorAccent: '#F3EBDD',
    },
  },

  seo: {
    title: 'L. P. Alejandra Izaguirre — Psicóloga Clínica Y Educativa en Ciudad del Carmen',
    description:
      'Terapia psicológica profesional en Ciudad del Carmen. Especialista en ansiedad, depresión, neurodivergencia y autismo.',
    canonicalUrl: 'https://demo-psicologia.example.com',
    ogImage: '/og-image.jpg',
    // ogImage: 'assets/logo.jpg',
    locale: 'es-MX',
  },

  sections: [
    { id: 'hero' },
    { id: 'trust' },
    { id: 'about', heading: 'Sobre mí' },
    { id: 'services' },
    { id: 'benefits', heading: '¿Por qué elegirme?' },
    { id: 'process', heading: '¿Cómo funciona?' },
    { id: 'testimonials', heading: 'Lo que dicen mis pacientes' },
    { id: 'faq' },
    { id: 'contact', subtitle: 'Agenda tu cita hoy' },
  ],

  cta: {
    primary: {
      label: 'Agendar cita por WhatsApp',
      type: 'whatsapp',
    },
  },
};
