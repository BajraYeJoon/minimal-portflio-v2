import { Button } from '~/components/common/Button';
import { generateMetadata } from '~/utils/generateMetadata';

export function meta() {
  return generateMetadata({
    title: 'Binaya Bajracharya Enhanced portfolio website',
    description: 'Binaya Bajracharya Enhanced portfolio website',
    path: '/',
  });
}

export default function Home() {
  return (
    <main>
      <Button variant="link">Get in Touch </Button>
      <Button>Get in Touch </Button>
    </main>
  );
}
