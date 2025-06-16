export default function AboutPage() {
    return (

        
      <section id="about" className="bg-white py-16 px-6 text-center">
        {/* Überschrift */}
        <h2 className="text-3xl font-bold text-blue-800 mb-8 font-[Cambria]">
          Über uns
        </h2>
  
        {/* Beschreibungstext */}
        <div className="max-w-3xl mx-auto text-gray-700 font-[Cambria] text-base leading-relaxed mb-12">
          <p>
            Wir sind Ihr zuverlässiger Partner für moderne Buchhaltungslösungen.
            Als spezialisiertes Unternehmen bieten wir kleinen und mittelständischen Firmen professionelle Unterstützung in allen buchhalterischen Belangen.
          </p>
          <p className="mt-4">
            Unsere Arbeitsweise ist digital, sorgfältig und persönlich – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
          </p>
        </div>
  
        {/* Raum-Fotos */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <img src="/images/raum1.jpg" alt="Büroansicht" className="w-72 rounded-lg shadow-md" />
          <img src="/images/raum2.jpg" alt="Besprechungsraum" className="w-72 rounded-lg shadow-md" />
          <img src="/images/raum3.jpg" alt="Empfangsbereich" className="w-72 rounded-lg shadow-md" />
        </div>
  
        {/* Lexware-Hinweis */}
        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-700 font-[Cambria] mb-4 max-w-xl">
            Wir arbeiten mit <strong>Lexware</strong> – Buchhaltungssoftware mit DATEV-Schnittstelle
          </p>
          <img src="/images/lexware-logo.png" alt="Lexware Logo" className="w-48 h-auto" />
        </div>
      </section>
    );
  }
  