import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiDailydotdev } from 'react-icons/si';
import type { Navigation, ServiceCategory } from '~/types/types';

export const navigation: Navigation[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
] as const;

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'UI/UX DESIGN',
    services: [
      'App Design',
      'Website Design',
      'Landing Page Design',
      'Design Systems',
      'Wireframing',
      'Prototyping',
    ],
  },
  {
    title: 'WEB DEVELOPMENT',
    services: [
      'Framer Development',
      'Webflow Development',
      'Wordpress Development',
      'Speed Optimization',
      'SEO Optimization',
      'Website Maintenance',
    ],
  },
  {
    title: 'BRAND IDENTITY',
    services: [
      'Logo Design',
      'Brand Guidlines',
      'Label Design',
      'Packaging Design',
      'Visual Identity',
      'Brand Strategy',
    ],
  },
  {
    title: 'DIGITAL DESIGN',
    services: [
      'Illustrations',
      'Animations',
      'Business Cards',
      'Flyers',
      'Banner Design',
      'Social Media',
    ],
  },
];

export const socialLinks = [
  { name: 'Github', icon: FaGithub, link: 'https://github.com/bajrayejoon' },
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://www.facebook.com/bajra.pax',
  },
  {
    name: 'DailyDev',
    icon: SiDailydotdev,
    link: 'https://app.daily.dev/binayabajra',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/binayabajracharya977',
  },
];
