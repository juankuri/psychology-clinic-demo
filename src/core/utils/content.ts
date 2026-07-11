import type { Service, Testimonial, FAQItem, Benefit, ProcessStep, GalleryItem, ProductCategory, TrustIndicator, ScheduleEntry } from '../../types/content';

// JSON content loaders
export async function loadServices(): Promise<Service[]> {
  try {
    const data = await import('../../../project/content/services.json');
    return data.default as Service[];
  } catch {
    return [];
  }
}

export async function loadTestimonials(): Promise<Testimonial[]> {
  try {
    const data = await import('../../../project/content/testimonials.json');
    return data.default as Testimonial[];
  } catch {
    return [];
  }
}

export async function loadBenefits(): Promise<Benefit[]> {
  try {
    const data = await import('../../../project/content/benefits.json');
    return data.default as Benefit[];
  } catch {
    return [];
  }
}

export async function loadProcess(): Promise<ProcessStep[]> {
  try {
    const data = await import('../../../project/content/process.json');
    return data.default as ProcessStep[];
  } catch {
    return [];
  }
}

export async function loadAbout(): Promise<string[]> {
  try {
    const raw = await import('../../../project/content/about.md?raw');
    const lines = (raw.default as string).split('\n');
    // Skip h1, return non-empty paragraphs
    return lines
      .filter((l) => !l.startsWith('#') && l.trim().length > 0)
      .map((l) => l.trim());
  } catch {
    return [];
  }
}

export async function loadGallery(): Promise<GalleryItem[]> {
  try {
    const data = await import('../../../project/content/gallery.json');
    return data.default as GalleryItem[];
  } catch {
    return [];
  }
}

export async function loadProducts(): Promise<ProductCategory[]> {
  try {
    const data = await import('../../../project/content/products.json');
    return data.default as ProductCategory[];
  } catch {
    return [];
  }
}

export async function loadTrust(): Promise<TrustIndicator[]> {
  try {
    const data = await import('../../../project/content/trust.json');
    return data.default as TrustIndicator[];
  } catch {
    return [];
  }
}

export async function loadSchedule(): Promise<ScheduleEntry[]> {
  try {
    const data = await import('../../../project/content/schedule.json');
    return data.default as ScheduleEntry[];
  } catch {
    return [];
  }
}

// Markdown FAQ parser
export async function loadFAQ(): Promise<FAQItem[]> {
  try {
    const raw = await import('../../../project/content/faq.md?raw');
    return parseFAQMarkdown(raw.default);
  } catch {
    return [];
  }
}

export function parseFAQMarkdown(md: string): FAQItem[] {
  const items: FAQItem[] = [];
  const lines = md.split('\n');
  let currentQuestion = '';
  let currentAnswer: string[] = [];

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentQuestion && currentAnswer.length > 0) {
        items.push({
          question: currentQuestion,
          answer: currentAnswer.join('\n').trim(),
        });
      }
      currentQuestion = line.slice(3).trim();
      currentAnswer = [];
    } else if (currentQuestion && line.startsWith('# ')) {
      // Skip h1 title
      continue;
    } else if (currentQuestion) {
      currentAnswer.push(line);
    }
  }

  if (currentQuestion && currentAnswer.length > 0) {
    items.push({
      question: currentQuestion,
      answer: currentAnswer.join('\n').trim(),
    });
  }

  return items;
}
