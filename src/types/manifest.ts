import type { BusinessIdentity, ContactInfo, LocationInfo, SocialLinks } from './business';
import type { SectionEntry } from './sections';
import type { SEOConfig } from './seo';
import type { ThemeConfig } from './theme';

export type ProjectTier = 'menu' | 'landing';

/**
 * A switchable image slot. Rendered as a real <img> when `src` is set and
 * `enabled` is not false; otherwise a styled placeholder is shown.
 * Toggle a single image on/off by flipping `enabled` — no markup changes.
 */
export interface ImageAsset {
  src?: string;
  alt: string;
  enabled?: boolean;
  /** Placeholder hint text shown when no image is active. */
  placeholder?: string;
}

export type ImageSlotName =
  | 'hero'
  | 'about'
  | 'gallery-1'
  | 'gallery-2'
  | 'gallery-3'
  | 'map';

export interface CTAConfig {
  label: string;
  type: 'whatsapp' | 'link';
  url?: string;
}

export interface ProjectManifest {
  project: {
    id: string;
    tier: ProjectTier;
  };
  business: BusinessIdentity;
  contact: ContactInfo;
  location: LocationInfo;
  social?: SocialLinks;
  theme: ThemeConfig;
  seo: SEOConfig;
  /** Switchable image slots keyed by slot name. Optional — missing = placeholder. */
  images?: Partial<Record<ImageSlotName, ImageAsset>>;
  sections: SectionEntry[];
  cta: {
    primary: CTAConfig;
  };
  labels?: {
    footer?: string;
  };
}
