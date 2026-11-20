import type { IconType } from 'react-icons';

export interface Navigation {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

export type WorkSize = 'normal' | 'large';

export interface Work {
  _id: string;
  index: number;
  title: string;
  image: string;
  services: string[];
  link: string;
  size?: WorkSize;
}

export interface Experience {
  _id: string;
  order: number;
  company: string;
  role: string;
  summary: string;
}

export interface ServiceCategory {
  _id: string;
  title: string;
  services: string[];
  order: number;
}

export interface TestimonialAuthor {
  name: string;
  position: string;
  company: string;
  image?: string;
}

export interface Testimonial {
  _id: string;
  number: string;
  quote: string;
  author: TestimonialAuthor;
}
