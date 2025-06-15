import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-900 font-[Cambria]">
      {/* HEADER */}
      <header className="bg-blue-800 text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-3">
          <Image
            src="/Logo_buchhalt.jpg"
            alt="Logo Buchhalt"
            width={60}
            height={60}
            className="rounded-full bg-white"
          />
          <h1 className="text-2xl font-bold">Buchhalt Soft Ware</h1>
        </div>
        <nav className="space-x-6 text-sm">
          <Link href="/">Startseite</Link>
          <Link href="/unternehmen">Über uns</Link>
          <Link href="/leistungen">Leistungen</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>
      </header>

      {/* HAUPTINHALT */}
      <section className="text-center mt-16 animate-fade-in">
        <Image
          src="/Logo_buchhalt.jpg"
          alt="Logo Hauptbereich"
          width={220}
          height={220}
          className="mx-auto rounded shadow-md"
        />
        <p className="mt-6 text-base italic text-blue-900 max-w-xl mx-auto px-4">
          Erbracht werden ausschließlich Leistungen gem. § 6 Nr. 3 und 4 des StBerG, ohne Rechts- und Steuerberatung.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 bg-blue-100 p-4 text-center text-sm text-blue-800">
        <p>Kontakt: Max Mustermann · Musterstraße 1 · 12345 Musterstadt</p>
        <p>
          Tel.:{' '}
          <a href="tel:+491234567890" className="text-blue-700 underline">
            +49 123 456 7890
          </a>
        </p>
        <div className="mt-4 pt-2 border-t border-blue-300 space-x-4">
          <Link href="/impressum" className="text-blue-700 underline">
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-blue-700 underline">
            Datenschutz
          </Link>
          <Link href="/agb" className="text-blue-700 underline">
            AGB
          </Link>
        </div>
      </footer>
    </main>
  )
}