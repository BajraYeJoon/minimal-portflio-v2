interface MetadataProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_NAME = import.meta.env.VITE_SITE_NAME;
export const BASE_URL = import.meta.env.VITE_BASE_URL;

export function generateMetadata({ title, description, path }: MetadataProps) {
  const fullTitle = `${title} `;
  const url = path ? `${BASE_URL}${path}` : BASE_URL;

  return [
    { title: fullTitle },
    { name: 'description', content: description },
    // OpenGraph
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:site_name', content: SITE_NAME },
    // Twitter
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    // Canonical
    { tagName: 'link', rel: 'canonical', href: url },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: SITE_NAME,
        url: url,
        image: `${BASE_URL}/logooo.png`,
        description: description,
      },
    },
  ];
}
