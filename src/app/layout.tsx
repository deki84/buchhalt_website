import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import { Metadata } from 'next'

// SEO-Metadaten
export const metadata: Metadata = {
  title: 'Buchhaltung in Augsburg – Professionell & digital | buchhalt.de',
  description: 'Professionelle Buchhaltung in Augsburg für kleine und mittelständische Unternehmen. Digital, sorgfältig und persönlich. Lexware mit DATEV-Schnittstelle. Jetzt Kontakt aufnehmen!',
  keywords: 'Buchhaltung Augsburg, Buchhalter Augsburg, Buchhaltungsservice, Lexware, DATEV, kleine Unternehmen, digitale Buchhaltung',
  openGraph: {
    title: 'Buchhaltung in Augsburg – buchhalt.de',
    description: 'Professionelle Buchhaltung für kleine und mittelständische Unternehmen in Augsburg.',
    locale: 'de_DE',
    type: 'website',
  },
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