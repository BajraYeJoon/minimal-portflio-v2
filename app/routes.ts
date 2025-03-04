import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),

  route('robots.txt', 'routes/misc/[robots.txt].tsx'),
  route('sitemap.xml', 'routes/misc/sitemap[.]xml.tsx'),
] satisfies RouteConfig;
