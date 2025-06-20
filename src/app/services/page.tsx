export default function ServicePage() {
  return (
    <section className="bg-white pt-8 pb-12 px-6 text-center font-[Cambria]">
      {/* Überschrift */}
      <h2 className="text-3xl font-bold text-blue-800 mb-8">Unsere Leistungen</h2>

      {/* Lexware Hinweis */}
      <div className="flex flex-col items-center mb-4">
    
     <div className="flex flex-col items-center mb-1">
  <p className="text-lg text-gray-700 max-w-xl mb-1">
    Wir arbeiten mit <strong>Lexware</strong> – Buchhaltungssoftware mit DATEV-Schnittstelle
  </p>
  <img
    src="/lexware-office-logo.png"
    alt="Lexware Logo"
    className="w-40 h-auto mb-2"
  />
</div>
        
      </div>

      {/* Kachelübersicht */}
<div className="mt-0 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left text-gray-800">        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
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

      {/* Detail: Finanzbuchhaltung */}
      <div className="mt-16 max-w-3xl mx-auto text-left text-gray-800">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Finanzbuchhaltung – professionell & effizient</h3>
        <p className="mb-4">Unsere Leistungen im Bereich der Finanzbuchhaltung umfassen:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Buchung der laufenden Geschäftsvorfälle</li>
          <li>Überwachung von Kreditoren- und Debitorenkonten</li>
          <li>Kaufmännisches Mahnwesen – zuverlässig und diskret</li>
          <li>Regelmäßige betriebswirtschaftliche Auswertungen (BWA)</li>
          <li>Strukturierung und Organisation Ihrer Buchhaltungsunterlagen</li>
          <li>Hol- und Bringservice – auf Wunsch direkt bei Ihnen vor Ort</li>
        </ul>
      </div>

      {/* Detail: Lohnbuchhaltung */}
      <div className="mt-16 max-w-3xl mx-auto text-left text-gray-800">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Lohnbuchhaltung – zuverlässig & termingerecht</h3>
        <p className="mb-4">Unsere Leistungen im Bereich der Lohnbuchhaltung:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Erstellung der monatlichen Lohn- und Gehaltsabrechnungen</li>
          <li>Meldungen an die Krankenkassen und Sozialversicherungsträger</li>
          <li>Übermittlung der Lohnsteueranmeldungen an das Finanzamt</li>
          <li>An- und Abmeldungen von Mitarbeitenden bei den zuständigen Stellen</li>
        </ul>
      </div>

      {/* Lexware Logo */}
    
    </section>
  );
}