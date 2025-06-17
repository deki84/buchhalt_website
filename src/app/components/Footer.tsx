'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-blue-800 text-white font-[Cambria] z-50">
      <div className="max-w-screen-md mx-auto px-4 py-4 text-center">
        <p className="text-sm">&copy; 2025 buchhalt.de. Alle Rechte vorbehalten.</p>

        <nav className="mt-2">
          <ul className="flex flex-col sm:flex-row justify-center sm:space-x-5 space-y-2 sm:space-y-0 text-sm">
            <li><Link href="/impressum" className="hover:underline">Impressum</Link></li>
            <li><Link href="/datenschutz" className="hover:underline">Datenschutz</Link></li>
            <li><Link href="/agb" className="hover:underline">AGB</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
