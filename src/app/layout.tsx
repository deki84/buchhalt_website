import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import { Metadata } from 'next'

// SEO-Metadaten
export const metadata: Metadata = {
  title: 'Buchhaltung in Augsburg – Professionell & digital',
  description: 'Professionelle Buchhaltung – digital, sorgfältig und persönlich. Jetzt informieren!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="flex flex-col min-h-screen font-[Cambria] bg-white text-blue-900 overflow-x-hidden">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}