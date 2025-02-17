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
    title: 'Revive',
    image:
      'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto/v1739780832/portfolio/emg404tgywhucdwwr29q.jpg',
    services: ['Web Development', 'Next.js', 'Tailwind CSS'],
    link: 'https://revive-eight.vercel.app/',
    size: 'normal',
  },
  {
    title: 'AITC International',
    image:
      'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto/v1739784566/portfolio/qtvksn3bvmutzqyl9heu.png',
    services: [
      'UI Development',
      'Nextjs',
      'Responsive Design',
      'Component Design',
    ],
    link: 'https://aitc.ai',
    size: 'normal',
  },
  {
    title: 'HawkAi Company Site',
    image:
      'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto/v1739780834/portfolio/f7zeld8slhe0pve1nxpr.png',
    services: ['Web Development', 'Hygraph CMS', 'Motion'],
    link: 'https://hawkai.online',
    size: 'large',
  },
  {
    title: 'Roshan Budhathoki Portfolio',
    image:
      'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto/v1739780832/portfolio/lmvmn4joykq87cypwkji.jpg',
    services: ['Next js', 'GSAP', 'SCSS'],
    link: 'http://roshanbudhathoki.hawkai.online/',
    size: 'normal',
  },
  {
    title: 'TheOrder AI',
    image:
      'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto/v1739780832/portfolio/fawhck2lqelrbwef7jov.jpg',
    services: ['Next js', 'Weaviate', 'Interface Development'],
    link: 'https://theorder.ai',
    size: 'normal',
  },
];

export const socialLinks = [
  { name: 'Github', icon: FaGithub, link: 'https://github.com/' },
  { name: 'Facebook', icon: FaFacebook, link: 'https://facebook.com/' },
  { name: 'Instagram', icon: FaInstagram, link: 'https://instagram.com/' },
  { name: 'LinkedIn', icon: FaLinkedin, link: 'https://linkedin.com/' },
];
