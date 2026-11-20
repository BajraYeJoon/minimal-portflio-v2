import { site } from '~/content/site';

const PATHS = ['/', '/about', '/contact'];

export const loader = () => {
  const urls = PATHS.map(
    (path) => `<url>
      <loc>${site.url}${path === '/' ? '' : path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${path === '/' ? '1.0' : '0.8'}</priority>
    </url>`,
  ).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
  ${urls}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
