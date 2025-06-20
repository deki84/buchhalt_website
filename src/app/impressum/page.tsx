export default function ImpressumPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 text-blue-900 font-[Cambria] text-[15px]">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Impressum
      </h1>

      <div className="space-y-5 leading-relaxed">
        <p>
          <strong className="text-blue-800">Betreiberin der Internetseite:</strong><br />
          <span className="text-blue-800 font-semibold">buchhalt.de</span><br />
          Inh.: Frau Jelena Dordevic<br />
          Zum Griesle 11<br />
          86169 Augsburg
        </p>

        <p>
          <strong className="text-blue-800">Telefon:</strong>{" "}
          <a href="tel:+4982144423383" className="text-blue-700 underline">+49 821 444 233 83</a><br />
          <strong className="text-blue-800">Mobil:</strong>{" "}
          <a href="tel:+4917696724525" className="text-blue-700 underline">+49 176 967 245 25</a><br />
          <strong className="text-blue-800">E-Mail:</strong>{" "}
          <a href="mailto:jelena.dordevic@buchhalt.de" className="text-blue-700 underline">jelena.dordevic@buchhalt.de</a><br />
          <strong className="text-blue-800">Gerichtstand:</strong> Augsburg
        </p>

        <hr className="border-t border-blue-200 my-6" />

        <p>
          <strong className="text-blue-800">Webdesign:</strong><br />
          — 
        </p>

        <p>
          <strong className="text-blue-800">SEO-Agentur und Content-Marketing:</strong><br />
          —
        </p>

        <p>
          <strong className="text-blue-800">Bildmaterial:</strong><br />
          iStock, Adobe Stock, privat
        </p>
      </div>
    </section>
  );
}