import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
