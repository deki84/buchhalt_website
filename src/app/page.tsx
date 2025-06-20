'use client';


import { FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <main className="bg-white text-blue-500 font-[Cambria]">
   

  <main className="bg-white text-blue-900 font-[Cambria]">
      <section
        className="relative h-[30vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hero-image.png')" }}
      >
        {/* Overlay wenn gewünscht */}
        <div className="absolute inset-0 bg-blue-800 opacity-50" />

        {/* Animierter Text – erscheint nacheinander */}
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold drop-shadow"
          >
            Ihre zuverlässige Buchhaltung
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl md:text-2xl mt-4 drop-shadow"
          >
            Professionell, sorgfältig und digital.
          </motion.p>
        </div>
      </section>
    </main>

<div className="mt-10 font-bold italic text-xl text-black max-w-3xl mx-auto border border-dashed border-blue-800 p-4 rounded text-center font-[Cambria]">
  Erbracht werden ausschließlich Leistungen gem. § 6 Nr. 3 und 4 des StBerG, ohne Rechts- und Steuerberatung.
</div>

      {/* 🟨 KONTAKTBLOCK unter Hero */}
<div className="bg-white mb-4 text-center pt-4 px-4">
  <h2 className="text-3xl font-bold text-blue-800 mb-2 font-[Cambria]">
    Kontaktieren Sie uns
  </h2>

  <div className="space-y-1">
    <p className="text-gray-800 text-base">
      Telefon:{' '}
      <a
        href="tel:+4982144423383"
        className="text-blue-800 font-semibold hover:underline"
      >
        0821 444 233 83
      </a>
    </p>
    <p className="text-gray-800 text-base">
      Email:{' '}
      <a
        href="mailto:info@buchhalt.de"
        className="text-blue-800 font-semibold hover:underline"
      >
        info@buchhalt.de
      </a>
    </p>
  </div>

  {/* Button-Gruppe */}
  <div className="mt-3 flex flex-col sm:flex-row sm:justify-center gap-2 items-center">
    <a
      href="tel:+4982144423383"
      className="bg-blue-800 text-white font-[Cambria] px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition w-60 sm:w-auto flex items-center justify-center gap-2 text-sm"
    >
      <FaPhone className="text-white rotate-180" />
      Anrufen
    </a>
    <a
      href="mailto:info@buchhalt.de"
      className="bg-blue-800 text-white font-[Cambria] px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition w-60 sm:w-auto flex items-center justify-center gap-2 text-sm"
    >
      ✉️
      E-Mail schreiben
    </a>
  </div>
</div>

   
    </main>
  );
}
