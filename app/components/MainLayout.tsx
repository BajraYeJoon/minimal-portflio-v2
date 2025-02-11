import { Footer } from '../pages/layout/Footer';
import { Navbar } from '../pages/layout/navbar/Navbar';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto px-4 md:px-16 flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
