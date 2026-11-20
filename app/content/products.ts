import type { Work } from '~/types';

/**
 * Product work at HamroPatro Inc.
 *
 * These entries ship with the repo so the site is complete before the CMS seed
 * runs. `mergeWorks` silently drops any that already exist in Sanity (matched on
 * link), so seeding never produces duplicates.
 */
export const productWorks: Work[] = [
  {
    _id: 'work-hamropatro',
    index: 6,
    title: 'Hamro Patro',
    image: '/images/work/hamropatro.jpg',
    services: ['Frontend Development', 'Super App'],
    link: 'https://hamropatro.com',
    size: 'large',
  },
  {
    _id: 'work-hamro-health',
    index: 7,
    title: 'Hamro Health',
    image: '/images/work/hamro-health.jpg',
    services: ['Frontend Development', 'Health'],
    link: 'https://health.hamropatro.com',
  },
  {
    _id: 'work-hamro-jyotish',
    index: 8,
    title: 'Hamro Jyotish',
    image: '/images/work/hamro-jyotish.jpg',
    services: ['Frontend Development', 'Astrology'],
    link: 'https://www.hamropatro.com/en/jyotish',
  },
  {
    _id: 'work-hamro-cricket',
    index: 9,
    title: 'Hamro Cricket',
    image: '/images/work/hamro-cricket.jpg',
    services: ['Frontend Development', 'Sports'],
    link: 'https://cricket.hamropatro.com',
  },
  {
    _id: 'work-hamro-football',
    index: 10,
    title: 'Hamro Football',
    image: '/images/work/hamro-football.jpg',
    services: ['Frontend Development', 'Sports'],
    link: 'https://football.hamropatro.com',
  },
];
