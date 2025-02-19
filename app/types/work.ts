import type { SanityDocument } from '@sanity/client';

export interface Work extends SanityDocument {
  _id: string;
  title: string;
  image: string;
  services: string[];
  link: string;
  size: 'normal' | 'large';
}

export interface WorkProps {
  works: Work[];
  error?: string;
}
