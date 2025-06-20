import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";





export const metadata = {
  title: 'Buchhalt',
  description: 'Ihre zuverlässige Buchhaltung',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="m-0 p-0 bg-white text-blue-900 font-[Cambria]">
        <Header />
        {/* Hero außerhalb von <main> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}