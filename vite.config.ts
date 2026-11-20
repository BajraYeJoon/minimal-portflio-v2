import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type EnvironmentOptions, type Plugin } from 'vite';

/**
 * React Router v8 compiles each server bundle in its own Vite environment
 * (`ssrBundle_<id>`), so the top-level `ssr.noExternal` option never reaches
 * them and GSAP stays a runtime import. GSAP's package has no `"type":
 * "module"` and points `import` at an ESM file inside a CommonJS package, so
 * Vercel's function loader rejects its named exports and the function crashes
 * before any route renders. Bundling it removes the runtime import entirely.
 */
function bundleGsapInServer(): Plugin {
  return {
    name: 'bundle-gsap-in-server',
    configEnvironment(name: string, config: EnvironmentOptions) {
      const isServerEnvironment =
        name === 'ssr' || name.startsWith('ssrBundle');
      if (!isServerEnvironment) return;

      const resolve = (config.resolve ?? {}) as Record<string, unknown>;
      const current = resolve.noExternal;
      const list = Array.isArray(current) ? current : current ? [current] : [];

      config.resolve = {
        ...resolve,
        noExternal: [...list, 'gsap', '@gsap/react'],
      } as EnvironmentOptions['resolve'];
    },
  };
}

export default defineConfig(() => ({
  plugins: [tailwindcss(), bundleGsapInServer(), reactRouter()],
  // Vite 8 resolves `paths` from tsconfig.json natively, so the
  // vite-tsconfig-paths plugin is no longer needed.
  resolve: { tsconfigPaths: true },
}));
