import Link from "next/link";

export default function Footer() {
  return (
   <footer className="fixed bottom-0 left-0 w-full bg-blue-800 text-white text-xs sm:text-sm py-3 sm:py-5 font-[Cambria] shadow-md z-50">
  <div className="max-w-screen-md mx-auto px-4 text-center space-y-2">
    <p>&copy; 2025 buchhalt.de. Alle Rechte vorbehalten.</p>
    <nav>
      <ul className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-x-6 sm:gap-y-0">
        <li><Link href="/impressum" className="hover:underline">Impressum</Link></li>
        <li><Link href="/datenschutz" className="hover:underline">Datenschutz</Link></li>
        <li><Link href="/agb" className="hover:underline">AGB</Link></li>
      </ul>
    </nav>
  </div>
</footer>
  );
}