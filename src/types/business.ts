export interface BusinessIdentity {
  name: string;
  tagline: string;
  description: string;
  logo?: string;
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
