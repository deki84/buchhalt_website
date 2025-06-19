export default function ImpressumPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 text-blue-900 font-[Cambria]">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Impressum
      </h1>

      <div className="space-y-4 text-base leading-relaxed">
        <p><strong>Betreiberin der Internetseite:</strong><br />
        <span className="text-blue-800 font-semibold">buchhalt.de</span><br />
        Inh.: Frau Jelena Dordevic<br />
        Zum Griesle 11<br />
        86169 Augsburg</p>

        <p>
          Telefon: <a href="tel:+4982144423383" className="text-blue-700 underline">+49 821 444 233 83</a><br />
          Mobil: <a href="tel:+4917696724525" className="text-blue-700 underline">+49 176 967 245 25</a><br />
          E-Mail: <a href="mailto:jelena.dordevic@buchhalt.de" className="text-blue-700 underline">jelena.dordevic@buchhalt.de</a><br />
          Gerichtstand: Augsburg
        </p>

        <hr className="border-t border-blue-200 my-6" />

        <p><strong>Webdesign:</strong><br />
        ___________________________________________</p>

        <p><strong>SEO-Agentur und Content-Marketing:</strong><br />
        ______________________</p>

        <p><strong>Bildmaterial:</strong><br />
        iStock, Adobe Stock, privat</p>
      </div>
    </section>
  );
}