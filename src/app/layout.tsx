import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="flex flex-col min-h-screen font-[Cambria] bg-white text-blue-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}