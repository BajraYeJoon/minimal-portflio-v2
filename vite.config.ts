import netlifyPlugin from '@netlify/vite-plugin-react-router';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  plugins: [tailwindcss(), netlifyPlugin(), reactRouter()],
  // Vite 8 resolves `paths` from tsconfig.json natively, so the
  // vite-tsconfig-paths plugin is no longer needed.
  resolve: { tsconfigPaths: true },
}));
