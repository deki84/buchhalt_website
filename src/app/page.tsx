'use client';


import { FaPhone } from 'react-icons/fa';


export default function Home() {
  return (
    <main className="bg-white text-blue-500 font-[Cambria]">
   

      <section
  id="home" 
  className="w-full-screen scroll-mt-20 relative bg-cover bg-center h-[30vh] flex items-center justify-center text-center"
  style={{ backgroundImage: "url('/hero-image.png')" }}
>
  {/* bläulicher Overlay mit Transparenz */}
  <div className="absolute inset-0 bg-blue-900 opacity-50"></div>

  {/* Text darüber */}
  <div className="relative z-10 px-4 text-white">
    <h1 className="text-4xl md:text-6xl font-extrabold font-[Cambria] drop-shadow">
      Ihre zuverlässige Buchhaltung
    </h1>
    <p className="mt-4 text-lg md:text-3xl font-[Cambria] drop-shadow">
      Professionell, sorgfältig und digital.
    </p>
  </div>
</section>

<div className="mt-10 font-bold italic text-xl text-gray-600 max-w-3xl mx-auto border border-dashed border-blue-800 p-4 rounded text-center font-[Cambria]">
  Erbracht werden ausschließlich Leistungen gem. § 6 Nr. 3 und 4 des StBerG, ohne Rechts- und Steuerberatung.
</div>

      {/* 🟨 KONTAKTBLOCK unter Hero */}
      <div className="bg-white mb-4 text-center pt-6  px-4" >
        <h2 className="text-3xl font-bold text-blue-800 mb-4 font-[Cambria]">Kontaktieren Sie uns</h2>

        <p className="text-gray-800 text-base">
    Telefon: <a href="tel:+4982144423383" className="text-blue-800 font-semibold hover:underline">0821 444 233 83</a>
  </p>
  <p className="text-gray-800 text-base mt-3">
    Email: <a href="mailto:info@buchhalt.de" className="text-blue-800 font-semibold hover:underline">info@buchhalt.de</a>
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-[10px]">

         
          <a
            href="tel:+4917696724525"
            className="bg-blue-800 text-white font-[Cambria] px-5 py-2 rounded-2xl shadow-md hover:bg-blue-500 transition text-sm
            w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0
            text-center inline-flex items-center justify-center gap-2"            >   
              <FaPhone className="text-white text-lg rotate-180" />
              Anrufen
          </a>
          <a
            href="mailto:info@buchhalt.de"
            className="bg-blue-800 text-white font-[Cambria] px-5 py-2 rounded-2xl shadow-md hover:bg-blue-500 transition text-sm
            w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0
            text-center inline-flex items-center justify-center gap-2"            >
            ✉️ E-Mail schreiben
          </a>
        </div>
      </div>

   
    </main>
  );
}
