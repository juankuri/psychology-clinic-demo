export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  name: string;
  role?: string;
  quote: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProductCategory {
  name: string;
  description?: string;
  note?: string;
  products: Product[];
}

export interface Product {
  name: string;
  description?: string;
  price: string;
  image?: string;
  tags?: string[];
  badge?: string;
  featured?: boolean;
}

export interface ScheduleEntry {
  day: string;
  hours: string;
}

export interface TrustIndicator {
  value: string;
  label: string;
}
