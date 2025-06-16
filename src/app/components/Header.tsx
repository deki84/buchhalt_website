import Image from "next/image"
import Link from "next/link"


export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-blue-800 py-3">
      <div className="max-w-screen-lg mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo_buchhalt.png"
            alt="Logo Buchhalt.de"
            width={60}
            height={60}
            className="rounded-full"
          />
        </Link>
        <nav>
          <ul className="flex space-x-4 text-white text-sm font-medium">
            <li><Link href="/" className="hover:underline">Startseite</Link></li>
            <li><Link href="/about" className="hover:underline">Über uns</Link></li>
            <li><Link href="/services" className="hover:underline">Leistungen</Link></li>
            <li><Link href="/contact" className="hover:underline">Kontakt</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}