export default function ServicePage() {
    return (
      <section className="bg-white py-16 px-6 text-center">
        {/* Überschrift */}
        <h2 className="text-3xl font-bold text-blue-800 mb-8 font-[Cambria]">
          Unsere Leistungen
        </h2>
  
        {/* Lexware Hinweis */}
        <div className="flex flex-col items-center justify-center mb-10">
          <p className="text-lg text-gray-700 max-w-2xl font-[Cambria]">
            Wir arbeiten mit <strong>Lexware</strong> – Buchhaltungssoftware mit DATEV-Schnittstelle
          </p>
          <img
            src="/images/lexware-logo.png"
            alt="Lexware Logo"
            className="mt-4 w-48 h-auto"
          />
        </div>
  
        {/* Leistungsübersicht */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left text-gray-800 font-[Cambria]">
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Finanzbuchhaltung</h3>
            <p>Komplette laufende Buchführung nach § 6 Nr. 3 und 4 StBerG.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Rechnungswesen</h3>
            <p>Verarbeitung von Belegen, Erstellung interner Übersichten & Auswertungen.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Digitale Prozesse</h3>
            <p>Digitale Zusammenarbeit mit DATEV/LEXWARE-Schnittstelle für effiziente Abläufe.</p>
          </div>
        </div>
  
        {/* §6 Hinweis */}
        <p className="mt-10 italic text-sm text-gray-600 max-w-3xl mx-auto border border-dashed border-blue-300 p-4 rounded font-[Cambria]">
          Erbracht werden ausschließlich Leistungen gem. § 6 Nr. 3 und 4 des StBerG, ohne Rechts- und Steuerberatung.
        </p>
      </section>
    );
  }
  