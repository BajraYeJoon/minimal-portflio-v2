import type { Route } from './+types/[robots.txt]';

export const loader = ({ request }: Route.LoaderArgs) => {
  const robotText = `User-agent: *
Allow: /
Sitemap: https://binayabajracharya.tech/sitemap.xml`;

  return new Response(robotText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
