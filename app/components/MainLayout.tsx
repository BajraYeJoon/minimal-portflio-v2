import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto px-16 flex flex-col">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
