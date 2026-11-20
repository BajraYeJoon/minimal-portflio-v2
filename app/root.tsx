import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import type { Route } from './+types/root';
import './styles/app.css';
import { Cursor } from './components/layout/Cursor';
import { Footer } from './components/layout/Footer';
import { IntroCurtain } from './components/layout/IntroCurtain';
import { Navbar } from './components/layout/Navbar';
import { PageSweep } from './components/layout/PageSweep';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { NotFound } from './components/ui/NotFound';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.png' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Anton&family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#101012" />
        <Meta />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-02WY179Y2M"
        />
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Google Analytics bootstrap snippet
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-02WY179Y2M', {
        page_path: window.location.pathname,
        });
    `,
          }}
        />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <SmoothScroll>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
      </SmoothScroll>
      <IntroCurtain />
      <PageSweep />
      <ScrollProgress />
      <Cursor />
      <div className="grain" aria-hidden="true" />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return <NotFound />;
  }

  const details =
    import.meta.env.DEV && error instanceof Error
      ? error.message
      : 'An unexpected error occurred.';
  const stack =
    import.meta.env.DEV && error instanceof Error ? error.stack : undefined;

  return (
    <main className="shell flex min-h-[70vh] flex-col gap-6 py-32">
      <h1 className="font-display text-title uppercase">
        Something went wrong.
      </h1>
      <p className="text-lead text-stone">{details}</p>
      {stack && (
        <pre className="border-hairline bg-obsidian overflow-x-auto border p-4 text-small">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
