import type { BusinessIdentity, ContactInfo, LocationInfo, SocialLinks } from './business';
import type { SectionEntry } from './sections';
import type { SEOConfig } from './seo';
import type { ThemeConfig } from './theme';

export type ProjectTier = 'menu' | 'landing';

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
  sections: SectionEntry[];
  cta: {
    primary: CTAConfig;
  };
  labels?: {
    footer?: string;
  };
}
