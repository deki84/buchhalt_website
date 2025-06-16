import Link from "next/link"

export default function Footer() {
  return (
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
</footer>)}