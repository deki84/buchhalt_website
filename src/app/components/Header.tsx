'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-800 text-white font-[Cambria] shadow-md">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_buchhalt.png"
            alt="Logo Buchhalt.de"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>

        {/* Hamburger Button (mobil) */}
        <button
          className="md:hidden p-2 rounded hover:bg-blue-700"
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
        <div className="md:hidden bg-blue-700 px-4 py-3 space-y-2 text-sm">
          <nav className="flex flex-col">
            <Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>Startseite</Link>
            <Link href="/about" className="hover:underline" onClick={() => setIsOpen(false)}>Über uns</Link>
            <Link href="/services" className="hover:underline" onClick={() => setIsOpen(false)}>Leistungen</Link>
            <Link href="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Kontakt</Link>
          </nav>
        </div>
      )}
    </header>
  );
}