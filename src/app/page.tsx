'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-500 font-[Cambria]">
      {/* 🔷 HEADER mit Logo und Navigation */}
      <header className="bg-blue-800 py-3">
        <div className="max-w-screen-lg mx-auto px-4 flex items-center justify-between">
          {/* Logo links */}
          <Link href="/">
            <Image
              src="/logo_buchhalt.png" // Hier dein Logo (liegt im public-Ordner)
              alt="Logo Buchhalt.de"
              width={60}
              height={60}
              className="rounded-full"
            />
          </Link>

          {/* Navigation rechts */}
          <nav>
            <ul className="flex space-x-4 text-white text-sm font-medium">
              <li><a href="#home" className="hover:underline">Startseite</a></li>
              <li><a href="#about" className="hover:underline">Über uns</a></li>
              <li><a href="#services" className="hover:underline">Leistungen</a></li>
              <li><a href="#contact" className="hover:underline">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 🟦 HERO-SECTION mit Hintergrundbild */}
      <section
  id="home"
  className="relative bg-cover bg-center h-[45vh] flex items-center justify-center text-center"
  style={{ backgroundImage: "url('/hero-image.png')" }}
>
  {/* bläulicher Overlay mit Transparenz */}
  <div className="absolute inset-0 bg-blue-900 opacity-50"></div>

  {/* Text darüber */}
  <div className="relative z-10 px-4 text-white">
    <h1 className="text-4xl md:text-6xl font-extrabold font-[Cambria] drop-shadow">
      Ihre zuverlässige Buchhaltung
    </h1>
    <p className="mt-4 text-lg md:text-3xl font-[Cambria] drop-shadow">
      Professionell, sorgfältig und digital.
    </p>
  </div>
</section>

<div className="mt-10 font-bold italic text-xl text-gray-600 max-w-3xl mx-auto border border-dashed border-blue-800 p-4 rounded text-center font-[Cambria]">
  Erbracht werden ausschließlich Leistungen gem. § 6 Nr. 3 und 4 des StBerG, ohne Rechts- und Steuerberatung.
</div>

      {/* 🟨 KONTAKTBLOCK unter Hero */}
      <div className="bg-white text-center py-12 px-4" id="contact">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 font-[Cambria]">Kontaktieren Sie uns</h2>

        <p className="text-gray-800 text-base">
    Telefon: <a href="tel:+4915208883747" className="text-blue-800 font-semibold hover:underline">01520 8883747</a>
  </p>
  <p className="text-gray-800 text-base mt-3">
    Email: <a href="mailto:info@buchhalt.de" className="text-blue-800 font-semibold hover:underline">info@buchhalt.de</a>
  </p>
        <div className="flex justify-center gap-4">
         
          <a
            href="tel:+491234567890"
            className="mt-6 bg-blue-800 text-white font-[Cambria] px-5 py-2 rounded-2xl shadow-md hover:bg-blue-500 transition inline-flex items-center gap-2"
          >   
              <FaPhone className="text-white text-lg rotate-180" />
              Anrufen
          </a>
          <a
            href="mailto:info@buchhalt.de"
            className="mt-6 bg-blue-800 text-white font-[Cambria] px-5 py-2 rounded-2xl shadow-md hover:bg-blue-500 transition"
          >
            ✉️ E-Mail schreiben
          </a>
        </div>
      </div>

      {/* ⚫ FOOTER mit rechtlichen Links */}
      <footer className="bg-blue-800 text-white py-6">
        <div className="max-w-screen-md mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2025 buchhalt.de. Alle Rechte vorbehalten.</p>

          <nav className="mt-3">
            <ul className="flex justify-center space-x-5 text-sm">
              <li><Link href="/impressum" className="hover:underline">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:underline">Datenschutz</Link></li>
              <li><Link href="/agb" className="hover:underline">AGB</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </main>
  );
}
