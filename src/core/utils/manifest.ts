import { manifest } from '../../../project/manifest';
import type { ProjectManifest, ImageAsset, ImageSlotName } from '../../types/manifest';
import type { SectionId } from '../../types/sections';

export function getManifest(): ProjectManifest {
  return manifest;
}

export interface ResolvedImage extends ImageAsset {
  /** True when a real image should render; false to show the placeholder. */
  active: boolean;
}

/** Resolve an image slot. A slot is active when it has a src and isn't disabled. */
export function getImage(name: ImageSlotName): ResolvedImage {
  const asset = manifest.images?.[name];
  const alt = asset?.alt ?? '';
  const active = Boolean(asset?.src) && asset?.enabled !== false;
  return {
    alt,
    src: asset?.src,
    enabled: asset?.enabled,
    placeholder: asset?.placeholder,
    active,
  };
}

export function getWhatsAppUrl(manifest: ProjectManifest): string {
  return getWhatsAppUrlFor(manifest.contact.whatsapp.message);
}

/** Build a wa.me link with a custom prefilled message. */
export function getWhatsAppUrlFor(message?: string): string {
  const { number } = manifest.contact.whatsapp;
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
  return defaultHeadings[id] ?? '';
}
