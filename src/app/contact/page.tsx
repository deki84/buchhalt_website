'use client';

import { useState } from 'react';
import { FaPhone, FaMobileAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });



  return (
   <section className="bg-white py-16 px-6 text-center font-[Cambria]">
  <h2 className="text-3xl font-bold text-blue-800 mb-8">Kontaktformular</h2>

  <form className="max-w-xl mx-auto space-y-6 text-left">
    <div>
      <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
      <input type="text" id="name" required className="w-full border border-gray-300 rounded px-3 py-2" />
    </div>

    <div>
      <label htmlFor="firma" className="block text-gray-700 mb-1">Firma (optional)</label>
      <input type="text" id="firma" className="w-full border border-gray-300 rounded px-3 py-2" />
    </div>

    <div>
      <label htmlFor="email" className="block text-gray-700 mb-1">E-Mail-Adresse</label>
      <input type="email" id="email" required className="w-full border border-gray-300 rounded px-3 py-2" />
    </div>

    <div>
      <label htmlFor="telefon" className="block text-gray-700 mb-1">Telefonnummer</label>
      <input type="tel" id="telefon" className="w-full border border-gray-300 rounded px-3 py-2" />
    </div>

    <div>
      <label htmlFor="betreff" className="block text-gray-700 mb-1">Betreff</label>
      <input type="text" id="betreff" className="w-full border border-gray-300 rounded px-3 py-2" />
    </div>

    <div>
      <label htmlFor="nachricht" className="block text-gray-700 mb-1">Nachricht</label>
      <textarea id="nachricht" rows={5} required className="w-full border border-gray-300 rounded px-3 py-2" />
    </div>

    <div className="text-center pt-4">
      <button type="submit" className="bg-blue-800 text-white font-semibold px-6 py-2 rounded hover:bg-blue-900 transition">
        Nachricht senden
      </button>
    </div>
  </form>

  {/* Alternativkontakt */}
<div className="mt-12 flex flex-col items-start justify-center text-gray-800 text-base font-[Cambria] space-y-3 mx-auto w-fit">
  <div className="flex items-center space-x-3">
    <FaPhone  className="text-blue-800 w-5 h-5 rotate-180" />
    <span>
      Telefon Festnetz:{" "}
      <a href="tel:+4982144423383" className="text-blue-800 font-semibold hover:underline">
        0821 444 233 83
      </a>
    </span>
  </div>

  <div className="flex items-center space-x-3">
    <FaMobileAlt className="text-blue-800 w-5 h-5" />
    <span>
      Mobil (auch WhatsApp):{" "}
      <a href="tel:+4917696724525" className="text-blue-800 font-semibold hover:underline">
        0176 96724525
      </a>
    </span>
  </div>

  <div className="flex items-center space-x-3">
    <FaEnvelope className="text-blue-800 w-5 h-5" />
    <span>
      E-Mail:{" "}
      <a href="mailto:jelena.dordevic@buchhalt.de" className="text-blue-800 font-semibold hover:underline">
        jelena.dordevic@buchhalt.de
      </a>
    </span>
  </div>
</div>
</section>
  )}