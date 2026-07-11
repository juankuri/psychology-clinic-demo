export type SectionId =
  | 'hero'
  | 'trust'
  | 'about'
  | 'services'
  | 'product-menu'
  | 'benefits'
  | 'process'
  | 'gallery'
  | 'testimonials'
  | 'faq'
  | 'contact'
  | 'category-nav'
  | 'featured-products'
  | 'schedule';

export interface SectionEntry {
  id: SectionId;
  heading?: string;
  subtitle?: string;
}
