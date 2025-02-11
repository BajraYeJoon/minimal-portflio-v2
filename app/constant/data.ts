import type { Navigation } from '~/types/types';

export const navigation: Navigation = {
  main: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ],
  features: [{ name: 'Services', path: '/services' }],
  support: [{ name: 'Contact', path: '/contact' }],
} as const;
