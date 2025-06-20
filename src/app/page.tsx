'use client';

import { motion } from 'framer-motion';


export default function Home() {
  return (
   
   

  <main className="pt-0 mt-0 bg-white text-blue-900 font-[Cambria]">
<section
  className="relative h-[35vh] bg-cover bg-center flex items-center justify-center"
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
  

<div className="bg-white mb-4 pt-4 pb-28 px-4 text-center font-[Cambria]">
  <h2 className="text-3xl font-bold text-blue-800 mb-4">Kontaktieren Sie uns</h2>

  <div className="space-y-2 text-base text-gray-800">
    <div className="flex justify-center gap-2">
      <span className="font-semibold text-blue-900">Telefon:</span>
      <a href="tel:+4982144423383" className="text-blue-800 hover:underline">
        0821 444 233 83
      </a>
    </div>
    <div className="flex justify-center gap-2">
      <span className="font-semibold text-blue-900">Email:</span>
      <a href="mailto:info@buchhalt.de" className="text-blue-800 hover:underline">
        info@buchhalt.de
      </a>
    </div>
  </div>

  {/* Buttons */}
  <div className="mt-5 flex flex-col sm:flex-row justify-center items-center gap-3">
    <a
      href="tel:+4982144423383"
      className="bg-blue-800 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition w-60 sm:w-auto flex items-center justify-center gap-2 text-sm"
    >
      📞 Anrufen
    </a>
    <a
      href="mailto:info@buchhalt.de"
      className="bg-blue-800 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition w-60 sm:w-auto flex items-center justify-center gap-2 text-sm"
    >
      ✉️ E-Mail schreiben
    </a>
  </div>
</div>

   
    </main>
  );
}
