import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        cta: [
          'var(--text-cta)',
          {
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
          },
        ],
      },
      colors: {
        surface: 'var(--color-surface)',
        base: 'var(--color-base)',
        muted: 'var(--color-muted)',
        subtle: 'var(--color-subtle)',
        backgroundColor: 'var(--color-backgroundColor)',
      },
    },
  },
  plugins: [],
} satisfies Config;
