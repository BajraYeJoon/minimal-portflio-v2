import { site } from '~/content/site';

export const loader = () => {
  const robotText = `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml`;

  return new Response(robotText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
