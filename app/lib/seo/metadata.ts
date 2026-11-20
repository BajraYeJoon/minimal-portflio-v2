import { site } from '~/content/site';

interface MetadataInput {
  title: string;
  description: string;
  path?: string;
}

export function generateMetadata({ title, description, path }: MetadataInput) {
  const url = path ? `${site.url}${path}` : site.url;

  return [
    { title },
    { name: 'description', content: description },
    {
      name: 'keywords',
      content:
        'Binaya Bajracharya, Frontend Developer, React, TypeScript, Next.js, React Router, Tailwind CSS, Sanity, Portfolio, Kathmandu, Nepal',
    },
    { name: 'author', content: site.name },
    { name: 'theme-color', content: '#0a0a0c' },
    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:site_name', content: site.name },
    { property: 'og:locale', content: 'en_US' },
    // Twitter
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    // Canonical
    { tagName: 'link', rel: 'canonical', href: url },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: site.name,
        jobTitle: site.role,
        url: site.url,
        description: site.description,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bhaktapur',
          addressCountry: 'NP',
        },
        sameAs: [
          'https://github.com/bajrayejoon',
          'https://www.linkedin.com/in/binayabajracharya977',
        ],
      },
    },
  ];
}
