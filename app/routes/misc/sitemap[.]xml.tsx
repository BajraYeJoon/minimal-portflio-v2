import { navigation } from '~/constant/data';

export const loader = () => {
  const xmlSitemap = (urls: string[]) => {
    const urlmapping = urls
      .map((url) => {
        return `<url><loc>https://binayabajracharya.tech${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
        </url>`;
      })
      .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${urlmapping}
    </urlset>`;
  };

  const sitemap = xmlSitemap(navigation.map((link) => link.path));

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
