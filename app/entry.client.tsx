import posthog from 'posthog-js';
import { StrictMode, startTransition, useEffect } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';

function PosthogInit() {
  useEffect(() => {
    posthog.init('phc_guyLCRQ8OLHRtuFBhuXUQqL9MDlygISQIjbIkqRCXff', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    });
  }, []);

  return null;
}
startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
      <PosthogInit />
    </StrictMode>,
  );
});
