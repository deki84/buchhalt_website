import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white text-xs sm:text-sm py-4 sm:py-6 font-[Cambria] shadow-inner">
      <div className="max-w-screen-md mx-auto px-4 text-center space-y-2">
        <p>&copy; 2026 buchhalt.de. Alle Rechte vorbehalten.</p>
        <nav>
          <ul className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-x-6">
            <li>
              <Link href="/impressum" className="hover:underline">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:underline">Datenschutz</Link>
            </li>
            <li>
              <Link href="/agb" className="hover:underline">AGB</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}