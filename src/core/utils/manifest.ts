import { manifest } from '../../../project/manifest';
import type { ProjectManifest } from '../../types/manifest';
import type { SectionId } from '../../types/sections';

export function getManifest(): ProjectManifest {
  return manifest;
}

export function getWhatsAppUrl(manifest: ProjectManifest): string {
  const { number, message } = manifest.contact.whatsapp;
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

const defaultHeadings: Record<SectionId, string> = {
  hero: '',
  trust: '',
  about: 'Acerca de',
  services: 'Servicios',
  'product-menu': 'Menú',
  benefits: 'Beneficios',
  process: 'Proceso',
  gallery: 'Galería',
  testimonials: 'Testimonios',
  faq: 'Preguntas frecuentes',
  contact: 'Contacto',
  'category-nav': '',
  'featured-products': 'Destacados',
  schedule: 'Horario',
};

export function getSectionHeading(id: SectionId): string {
  const entry = manifest.sections.find((s) => s.id === id);
  return entry?.heading ?? defaultHeadings[id] ?? '';
}

export function getSectionSubtitle(id: SectionId): string | undefined {
  const entry = manifest.sections.find((s) => s.id === id);
  return entry?.subtitle;
}

export function getNavLabel(id: SectionId): string {
  return getSectionHeading(id);
}
