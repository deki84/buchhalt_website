'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-500 font-[Cambria]">
      {/* Header */}
      <header className="bg-blue-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="logo">
            <Image src="/logo_buchhalt.png" alt="Logo Buchhalt.de" width={150} height={50} />
          </div>
          <nav>
            <ul className="flex space-x-6 text-white">
              <li><a href="#home" className="hover:underline">Startseite</a></li>
              <li><a href="#about" className="hover:underline">Über uns</a></li>
              <li><a href="#services" className="hover:underline">Leistungen</a></li>
              <li><a href="#contact" className="hover:underline">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-cover bg-center min-h-screen
 flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('/hero-image.png')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded">
          <h1 className="text-3xl font-bold">Ihre zuverlässige Buchhaltung</h1>
          <p className="mt-2">Professionell, sorgfältig und digital.</p>
        </div>
      </section>

      {/* Kontakt-Info */}
      <section className="container mx-auto px-4 py-12" id="contact-info">
        <h2 className="text-2xl font-bold mb-4">Kontaktieren Sie uns</h2>
        <p className="mb-2">Telefon: <a href="tel:+491234567890" className="text-blue-700 underline">+49 123 456 7890</a></p>
        <p className="mb-4">Email: <a href="mailto:info@buchhalt.de" className="text-blue-700 underline">info@buchhalt.de</a></p>
        <div className="flex space-x-4">
          <a href="tel:+491234567890" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Anrufen</a>
          <a href="mailto:info@buchhalt.de" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">E-Mail senden</a>
        </div>
        <div className="mt-6 text-sm text-gray-700">
          <p>Erbracht werden ausschließlich Leistungen gem. § 6 Nr. 3 und 4 des StBerG, ohne Rechts- und Steuerberatung.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6">
  <div className="container mx-auto px-4 text-center">
    <p className="text-sm">&copy; 2024 buchhalt.de. Alle Rechte vorbehalten.</p>
    <nav className="mt-4">
      <ul className="flex justify-center space-x-6 text-sm">
        <li>
          <Link href="/impressum" className="hover:underline">
            Impressum
          </Link>
        </li>
        <li>
          <Link href="/datenschutz" className="hover:underline">
            Datenschutz
          </Link>
        </li>
        <li>
          <Link href="/agb" className="hover:underline">
            AGB
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</footer>

    </main>
  );
}
