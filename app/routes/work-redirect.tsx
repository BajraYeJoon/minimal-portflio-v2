import { redirect } from 'react-router';

/** The work index now lives on the home page. */
export function loader() {
  return redirect('/#work');
}
