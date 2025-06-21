'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-800 text-white font-[Cambria] shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_buchhalt.png"
            alt="Logo Buchhalt.de"
            width={80}
            height={80}
            className="rounded-full"
            
          />
           <span className="text-white text-sm sm:text-base md:text-lg font-[Cambria] ">
    Willkommen auf {'\u00A0'}buchhalt.de
  </span>
        </Link>

        {/* Hamburger Button (mobil) */}
        <button
          className="md:hidden p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:underline">Startseite</Link>
          <Link href="/about" className="hover:underline">Über uns</Link>
          <Link href="/services" className="hover:underline">Leistungen</Link>
          <Link href="/contact" className="hover:underline">Kontakt</Link>
        </nav>
      </div>

      {/* Navigation (Mobil) */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-6 py-4 space-y-3 text-sm">
          <nav className="flex flex-col space-y-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:underline">Startseite</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:underline">Über uns</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="hover:underline">Leistungen</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:underline">Kontakt</Link>
          </nav>
        </div>
      )}
    </header>
  );
}