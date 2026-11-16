import data from '../data/data.json';

export interface LinkType {
  name: string;
  href: string;
}

export interface HeaderData {
  logo_text: string;
  logo: string;
  links: LinkType[];
  button_text: string;
  button_href: string;
}

export interface FooterData {
  logo_text: string;
  logo: string;
  quick_title: string;
  quick_links: LinkType[];
  classes_title: string;
  classes: LinkType[];
  contact_title: string;
  address: string;
  phone: string;
  email: string;
  copyright: string;
}

export interface BackToTopData {
  aria_label: string;
}

export interface HeroSectionData {
  id: string;
  eyebrow: string;
  title_line1: string;
  title_line2: string;
  title_highlight: string;
  description: string;
  button_text: string;
  button_href: string;
  images: string[];
}

export interface AboutSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  description: string;
  points: string[];
  badge_value: string;
  badge_label: string;
  button_text: string;
  button_href: string;
  images: string[];
}

export interface ProgramItem {
  title: string;
  text: string;
  image: string;
  icon: string;
}

export interface ProgramsSectionData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: ProgramItem[];
}

export interface WhySectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  description: string;
  image: string;
  points: { title: string; text: string; icon: string }[];
  stats: { value: string; label: string; icon: string }[];
}

export interface GalleryItem {
  type: string;
  image: string;
  title: string;
}

export interface GallerySectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  description: string;
  items: GalleryItem[];
}

export interface TestimonialItem {
  image: string;
  quote: string;
  avatar: string;
  name: string;
  role: string;
  rating: string;
  ratings_count: string;
}

export interface TestimonialsSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  description: string;
  items: TestimonialItem[];
}

export interface CtaSectionData {
  id: string;
  title: string;
  description: string;
  button_text: string;
  button_href: string;
}

export interface FaqSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  description: string;
  image: string;
  items: { question: string; answer: string; icon: string }[];
}

export interface TeamSectionData {
  id: string;
  eyebrow: string;
  title: string;
  members: { name: string; role: string; image: string }[];
}

export interface ContactSectionData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  name_placeholder: string;
  email_placeholder: string;
  phone_placeholder: string;
  date_placeholder: string;
  message_placeholder: string;
  button_text: string;
  success_message: string;
}

export interface PageComponent {
  key: string;
  component: string;
}

export interface PageMeta {
  title: string;
  pageName: string;
  metadata: { title: string; description: string };
  components: PageComponent[];
}

export const siteJson = data;
export const common = data.common;
export const template = data.categories.Wellness.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;
