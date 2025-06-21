export default function DatenschutzPage() {
  return (
    <section className="max-w-4xl mx-auto bg-white pt-4 sm:pt-6  pb-12 px-6 text-blue-900 font-[Cambria] text-[15px]">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Datenschutzerklärung
      </h1>

      <div className="space-y-6 leading-relaxed">
        <p>
          Der Schutz Ihrer personenbezogenen Daten ist uns, Jelena Dordevic, ein wichtiges Anliegen. Im Folgenden informieren wir Sie gemäß den Vorgaben der Datenschutz-Grundverordnung (DSGVO) sowie des Bundesdatenschutzgesetzes (BDSG) über Art, Umfang und Zweck der Erhebung und Verarbeitung personenbezogener Daten auf unserer Website www.buchhalt.de.
        </p>

        <p>
          <strong className="text-blue-800">1. Verantwortliche Stelle</strong><br />
          Jelena Dordevic<br />
          Zum Griesle 11<br />
          86169 Augsburg<br />
          E-Mail:{" "}
          <a href="mailto:jelena.dordevic@buchhalt.de" className="text-blue-700 underline">
            jelena.dordevic@buchhalt.de
          </a><br />
          Telefon: +49 176 967 245 25<br />
          Gerichtstand: Augsburg
        </p>

        <p>
          <strong className="text-blue-800">2. Erhebung und Verarbeitung personenbezogener Daten</strong><br />
          Wir erheben personenbezogene Daten nur, wenn dies gesetzlich erlaubt ist oder Sie einwilligen. Erfasst werden z. B. Name, Anschrift, E-Mail, im Rahmen von Kontaktformular oder Newsletter. Daten dienen nur der Kommunikation und Optimierung – unter Beachtung gesetzlicher Fristen.
        </p>

        <p>
          <strong className="text-blue-800">3. Server-Logfiles</strong><br />
          Beim Aufruf der Seite werden automatisch anonymisierte Logdaten gespeichert (z. B. Datum, IP-Adresse, Browsertyp). Diese dienen ausschließlich zur technischen Analyse und Sicherheit.
        </p>

        <p>
          <strong className="text-blue-800">4. Cookies</strong><br />
          Unsere Website verwendet Cookies zur Verbesserung der Benutzerfreundlichkeit. Sie können diese im Browser deaktivieren. Einschränkungen in der Funktionalität sind dann möglich.
        </p>

        <p>
          <strong className="text-blue-800">5. Webanalyse (Google Analytics)</strong><br />
          Diese Seite nutzt Google Analytics mit IP-Anonymisierung. Daten werden auf Google-Servern gespeichert. Sie können dies durch ein Browser-Plugin oder ein Opt-Out-Cookie verhindern: <br />
          <a
            href="https://tools.google.com/dlpage/gaoptout?hl=de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            Google Analytics deaktivieren
          </a>
        </p>

        <p>
          <strong className="text-blue-800">6. Weitergabe personenbezogener Daten</strong><br />
          Keine Weitergabe an Dritte ohne gesetzliche Verpflichtung oder Einwilligung. Ihre Daten sind durch technische und organisatorische Maßnahmen geschützt.
        </p>

        <p>
          <strong className="text-blue-800">7. Ihre Rechte</strong><br />
          Sie haben u. a. Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Kontakt:{" "}
          <a href="mailto:kontakt@buchhalt.de" className="text-blue-700 underline">
            jelena.dordevic@buchhalt.de
          </a>
        </p>

        <p>
          <strong className="text-blue-800">8. Änderungen dieser Datenschutzerklärung</strong><br />
          Wir behalten uns vor, die Erklärung bei rechtlichen Änderungen anzupassen. Die aktuelle Version ist stets auf der Website verfügbar.
        </p>

        <p className="mt-6 text-sm text-left text-gray-500 italic">
          Stand: Juni 2025
        </p>
      </div>
    </section>
  );
}