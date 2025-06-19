export default function DatenschutzPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-blue-900 font-[Cambria]">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Datenschutzerklärung
      </h1>

      <div className="space-y-6 text-base leading-relaxed">
        <p>
          Der Schutz Ihrer personenbezogenen Daten ist uns, Jelena Dordevic, ein wichtiges Anliegen. Im Folgenden informieren wir Sie gemäß den Vorgaben der Datenschutz-Grundverordnung (DSGVO) sowie des Bundesdatenschutzgesetzes (BDSG) über Art, Umfang und Zweck der Erhebung und Verarbeitung personenbezogener Daten auf unserer Website www.buchhalt.de.
        </p>

        <p><strong>1. Verantwortliche Stelle</strong><br />
        Jelena Dordevic<br />
        Zum Griesle 11<br />
        86169 Augsburg<br />
        E-Mail: kontakt@buchhalt.de<br />
        Telefon: +49 XXX XXXXXXX<br />
        Gerichtstand: Augsburg</p>

        <p><strong>2. Erhebung und Verarbeitung personenbezogener Daten</strong><br />
        Wir erheben personenbezogene Daten nur, wenn dies gesetzlich erlaubt ist oder Sie einwilligen. Erfasst werden z. B. Name, Anschrift, E-Mail, im Rahmen von Kontaktformular oder Newsletter. Daten dienen nur der Kommunikation und Optimierung – unter Beachtung gesetzlicher Fristen.</p>

        <p><strong>3. Server-Logfiles</strong><br />
        Beim Aufruf der Seite werden automatisch anonymisierte Logdaten gespeichert (z. B. Datum, IP-Adresse, Browsertyp). Diese dienen ausschließlich zur technischen Analyse und Sicherheit.</p>

        <p><strong>4. Cookies</strong><br />
        Unsere Website verwendet Cookies zur Verbesserung der Benutzerfreundlichkeit. Sie können diese im Browser deaktivieren. Einschränkungen in der Funktionalität sind dann möglich.</p>

        <p><strong>5. Webanalyse (Google Analytics)</strong><br />
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

        <p><strong>6. Weitergabe personenbezogener Daten</strong><br />
        Keine Weitergabe an Dritte ohne gesetzliche Verpflichtung oder Einwilligung. Ihre Daten sind durch technische und organisatorische Maßnahmen geschützt.</p>

        <p><strong>7. Ihre Rechte</strong><br />
        Sie haben u. a. Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Kontakt: kontakt@buchhalt.de</p>

        <p><strong>8. Änderungen dieser Datenschutzerklärung</strong><br />
        Wir behalten uns vor, die Erklärung bei rechtlichen Änderungen anzupassen. Die aktuelle Version ist stets auf der Website verfügbar.</p>

        <p className="mt-8 text-sm text-right text-gray-600 italic">
          Stand: Juni 2025
        </p>
      </div>
    </section>
  );
}