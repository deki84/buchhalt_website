'use client';

import { FaPhone, FaMobileAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Kontaktseite() {
  return (
    <main className="min-h-screen bg-white font-[Cambria] text-blue-900 px-4 sm:px-8 py-12">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">So erreichen Sie uns</h1>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Wir freuen uns auf Ihre Kontaktaufnahme. Gerne stehen wir Ihnen per Telefon, E-Mail oder WhatsApp zur Verfügung.
        </p>

        {/* Kontaktkarten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          <div className="bg-blue-50 rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-700" /> Adresse
            </h2>
            <p>buchhalt.de</p>
            <p>Jelena Dordevic<br />Zum Griesle 11<br />86169 Augsburg</p>
          </div>

          <div className="bg-blue-50 rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaClock className="text-blue-700" /> Termine
            </h2>
            <p>
              Termine nach Vereinbarung<br />
              Persönlich, telefonisch oder per Videokonferenz
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaPhone className="text-blue-700 rotate-180" /> Festnetz
            </h2>
            <a href="tel:+4982144423383" className="text-blue-800 hover:underline">
              0821 444 233 83
            </a>
          </div>

          <div className="bg-blue-50 rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaMobileAlt className="text-blue-700" /> Mobil / WhatsApp
            </h2>
            <a href="https://wa.me/4917696724525" className="text-blue-800 hover:underline" target="_blank">
              0176 96724525
            </a>
          </div>

          <div className="bg-blue-50 rounded-xl shadow-md p-6 sm:col-span-2">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaEnvelope className="text-blue-700" /> E-Mail
            </h2>
            <a href="mailto:jelena.dordevic@buchhalt.de" className="text-blue-800 hover:underline">
              jelena.dordevic@buchhalt.de
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}