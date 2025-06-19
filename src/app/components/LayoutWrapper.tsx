'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
   <div className="h-screen flex flex-col font-[Cambria] text-blue-900 bg-white overflow-hidden">
      {/* Header: fixiert oben */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </header>

      {/* Content: mit Scroll, zwischen Header und Footer */}
      <main className="mt-[80px] mb-[80px] flex-grow overflow-y-auto">
        {children}
      </main>

      {/* Footer: fixiert unten */}
      <footer className="fixed bottom-0 left-0 right-0 z-50">
        <Footer />
      </footer>
    </div>
  );
}