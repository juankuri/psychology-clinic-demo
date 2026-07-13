export interface BusinessIdentity {
  name: string;
  tagline: string;
  description: string;
  logo?: string;
  /** Short locality shown as the hero eyebrow, e.g. "Ciudad del Carmen, Campeche". */
  locality?: string;
  /**
   * Marketing headline for the hero. Wrap a word/phrase in *asterisks* to
   * render it as an italic serif accent. Falls back to `name` when omitted.
   */
  heroTitle?: string;
}

export interface WhatsAppConfig {
  number: string;
  message?: string;
}

export interface ContactInfo {
  whatsapp: WhatsAppConfig;
  email?: string;
  phone?: string;
}

export interface LocationInfo {
  address: string;
  googleMapsUrl?: string;
  googleMapsEmbed?: string;
}

export type SocialPlatform =
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'youtube'
  | 'twitter'
  | 'linkedin';

export type SocialLinks = Partial<Record<SocialPlatform, string>>;
