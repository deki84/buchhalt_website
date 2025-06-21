export default function AboutPage() {
  return (
    <section id="about" className="bg-white pt-8 pb-20 px-6 text-center">
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
          <div className="mt-2 flex flex-col items-center w-full">        <p className="text-lg text-gray-700 font-[Cambria] mb-2 max-w-xl">
          Wir arbeiten mit <strong>Lexware</strong> – Buchhaltungssoftware mit DATEV-Schnittstelle
        </p></div>
        
      </div>
    

      {/* Raum-Fotos */}
      <div className="flex flex-wrap justify-center items-start gap-6 mb-6 -mt-6">
        <img
          src="/buchhalt_buero1.jpeg"
          alt="Büroansicht"
          className="w-72 rounded-lg shadow-md"
        />
        <img
          src="/buchhalt_buero2.jpeg"
          alt="Besprechungsraum"
          className="w-72 rounded-lg shadow-md"
        />
        <img
          src="/buchhalt_buero3.jpeg"
          alt="Empfangsbereich"
          className="w-72 rounded-lg shadow-md"
        />
      </div>

      {/* Lexware-Hinweis */}
      <div className="flex flex-col  items-center">
    
        <div className="col-span-full flex justify-center mt-[-20px] mb-6">
          <img
            src="/lexware-office-logo.png"
            alt="Lexware Logo"
            className="w-48 h-auto"
          />
        </div>
      </div>
    </section>
  );
}