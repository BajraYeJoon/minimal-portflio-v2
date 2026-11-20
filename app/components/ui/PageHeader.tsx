import type { ReactNode } from 'react';
import { SplitReveal } from './SplitReveal';
import { Text } from './Text';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  meta?: ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  meta,
}: PageHeaderProps) {
  return (
    <header className="border-hairline border-b">
      <div className="shell flex flex-col gap-10 pt-36 pb-14 md:pt-44 md:pb-20">
        <Text variant="micro" className="text-ember">
          {eyebrow}
        </Text>

        <SplitReveal as="h1" className="display-fade text-display max-w-[16ch]">
          {title}
        </SplitReveal>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {description && (
            <Text variant="lead" className="max-w-xl">
              {description}
            </Text>
          )}
          {meta}
        </div>
      </div>
    </header>
  );
}
