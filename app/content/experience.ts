import type { Experience } from '~/types';

/** Fallback used until the seed has published `experience` documents. */
export const defaultExperience: Experience[] = [
  {
    _id: 'experience-hamropatro',
    order: 1,
    company: 'HamroPatro Inc',
    role: 'Frontend Developer',
    summary:
      'Product work across Hamro Patro and its satellite services — the calendar super app, health, astrology, cricket and football.',
  },
  {
    _id: 'experience-aitc',
    order: 2,
    company: 'AITC International',
    role: 'Frontend Developer',
    summary:
      'Client interfaces and component systems, including the company marketing site.',
  },
];
