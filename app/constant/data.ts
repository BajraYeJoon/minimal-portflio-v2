import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import type { FeaturedWork, Navigation, ServiceCategory } from '~/types/types';

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

export const featuredWorks: FeaturedWork[] = [
  {
    title: 'HawkAi Company Site',
    image: '/assets/hawkai.png',
    services: ['Web Development', 'Next.js', 'Tailwind CSS'],
    link: './works/luxe-beauty',
    size: 'normal',
  },
  {
    title: 'Elegant Pack',
    image:
      'https://framerusercontent.com/images/Irv3n6E0fswOvCAIziAqzrkweE.jpg',
    services: ['Brand Identity', 'Digital Design', 'Web Development'],
    link: './works/elegant-pack',
    size: 'normal',
  },
  {
    title: 'Ridged',
    image: 'https://framerusercontent.com/images/hPTsSt1sQmduV1ssOaArMLvY.jpg',
    services: [
      'UI/UX Design',
      'Web Development',
      'Digital Design',
      'Web Development',
    ],
    link: './works/ridged',
    size: 'large',
  },
  {
    title: 'Water Drops',
    image:
      'https://framerusercontent.com/images/913p8tf1vpDCxsOeybNlUsC5tPU.jpg',
    services: ['UI/UX Design', 'Web Development', 'Digital Design'],
    link: './works/water-drops',
    size: 'normal',
  },
  {
    title: 'Hydra Lips',
    image:
      'https://framerusercontent.com/images/GUGKMpnSRNesMtmP2XGPlWqWYE.jpg',
    services: ['Brand Identity', 'Digital Design'],
    link: './works/hydra-lips',
    size: 'normal',
  },
];

export const socialLinks = [
  { name: 'Github', icon: FaGithub, link: 'https://github.com/' },
  { name: 'Facebook', icon: FaFacebook, link: 'https://facebook.com/' },
  { name: 'Instagram', icon: FaInstagram, link: 'https://instagram.com/' },
  { name: 'LinkedIn', icon: FaLinkedin, link: 'https://linkedin.com/' },
];
