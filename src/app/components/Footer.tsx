import Link from "next/link"

export default function Footer() {
  return (
<footer className="bg-blue-800 text-white py-4 text-sm">
  <div className="max-w-screen-md mx-auto px-4 text-center space-y-2">
    <p>&copy; 2025 buchhalt.de. Alle Rechte vorbehalten.</p>
    <nav>
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
        <li><Link href="/impressum" className="hover:underline">Impressum</Link></li>
        <li><Link href="/datenschutz" className="hover:underline">Datenschutz</Link></li>
        <li><Link href="/agb" className="hover:underline">AGB</Link></li>
      </ul>
    </nav>
  </div>
</footer>)}