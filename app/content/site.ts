export const site = {
  name: 'Binaya Bajracharya',
  shortName: 'Binaya',
  handle: 'bajrayejoon',
  role: 'Frontend Developer',
  focus: 'Frontend Developer',
  location: 'Bhaktapur, Nepal',
  timeZone: 'Asia/Kathmandu · UTC+5:45',
  availability: 'Open to full-time roles and freelance projects',
  url: import.meta.env.VITE_BASE_URL || 'https://binayabajracharya.tech',
  email: import.meta.env.VITE_CONTACT_EMAIL ?? '',
  resumeUrl: import.meta.env.VITE_RESUME_URL ?? '',
  description:
    'Frontend developer building fast, accessible React applications and editorial interfaces, with 2+ years across product and agency teams.',
} as const;

export const stats = [
  { value: 10, suffix: '+', label: 'Projects shipped' },
  { value: 2, suffix: '+', label: 'Years of experience' },
  { value: 5, suffix: '', label: 'Hamro products' },
] as const;

export const capabilities = [
  {
    title: 'Frontend Engineering',
    items: ['React', 'TypeScript', 'Next.js', 'React Router', 'Tailwind CSS'],
  },
  {
    title: 'UI & Motion',
    items: ['Design systems', 'Accessibility', 'Motion & interaction', 'Figma'],
  },
  {
    title: 'Content & Delivery',
    items: [
      'Sanity CMS',
      'Performance budgets',
      'SEO & metadata',
      'Git workflows',
    ],
  },
] as const;
