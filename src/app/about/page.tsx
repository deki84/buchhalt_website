import { FaPhone, FaMobileAlt, FaEnvelope } from "react-icons/fa";

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
      <div className="mt-12 flex flex-col items-center justify-center space-y-6 text-base text-gray-800 font-[Cambria] px-4 w-full">
      
        {/* Einzelner Kontaktblock */}
        {[
          {
            icon: <FaPhone className="text-blue-800 w-5 h-5 rotate-180" />,
            label: 'Telefon Festnetz:',
            value: '0821 444 233 83',
            href: 'tel:+4982144423383'
          },
          {
            icon: <FaMobileAlt className="text-blue-800 w-5 h-5" />,
            label: 'Mobil (auch WhatsApp):',
            value: '0176 96724525',
            href: 'tel:+4917696724525'
          },
          {
            icon: <FaEnvelope className="text-blue-800 w-5 h-5" />,
            label: 'E-Mail:',
            value: 'jelena.dordevic@buchhalt.de',
            href: 'mailto:jelena.dordevic@buchhalt.de'
          }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-1">
              {item.icon}
              <span className="font-semibold text-blue-900">{item.label}</span>
            </div>
            <a href={item.href} className="text-blue-800 hover:underline">
              {item.value}
            </a>
          </div>
        ))}
      
      </div>

      {/* Lexware-Hinweis */}
   <div className="mt-16 mb-10 flex flex-col items-center space-y-2">
  <img
    src="/lexware-office-logo.png"
    alt="Lexware Logo"
    className="w-48 h-auto"
  />
</div>
    </section>
  );
}