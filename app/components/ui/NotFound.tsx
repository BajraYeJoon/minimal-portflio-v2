import { Button } from './Button';
import { Text } from './Text';

export function NotFound() {
  return (
    <main className="shell flex min-h-svh flex-col items-start justify-center gap-8 py-32">
      <Text variant="micro" className="text-ember">
        Error 404
      </Text>
      <h1 className="display-fade text-display">Lost</h1>
      <Text variant="lead" className="max-w-md">
        This page doesn&apos;t exist. The link may be outdated — everything
        worth reading is one click away.
      </Text>
      <Button to="/" showArrow>
        Back to home
      </Button>
    </main>
  );
}
