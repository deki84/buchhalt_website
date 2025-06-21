'use client';

import { motion } from 'framer-motion';
import { FaPhone,FaMobileAlt, FaEnvelope,FaWhatsapp } from 'react-icons/fa';


export default function Home() {
  return (
    <main className="bg-white text-blue-900 font-[Cambria]">
      {/* Hero Section */}
<section
  className="relative h-[35vh] sm:h-[45vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url('/hero-image.png')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-800 opacity-50" />

  {/* Animated Text */}
  <div className="relative z-10 text-center text-white px-4">
    {/* Neue Zeile: buchhalt.de */}
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-6xl sm:text-7xl md:text-8xl font-black tracking-wide lowercase drop-shadow-lg"
    >
      buchhalt.de
    </motion.h1>

    {/* Bestehender Titel */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-2xl text-gray-100  sm:text-3xl md:text-5xl font-extrabold drop-shadow"
    >
      Ihre zuverlässige Buchhaltung
    </motion.h2>

    {/* Unterzeile */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="text-sm sm:text-base md:text-xl mt-4 drop-shadow"
    >
      Professionell, sorgfältig und digital.
    </motion.p>
  </div>
</section>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.6 }}
  transition={{ duration: 0.6 }}
  className="mx-auto mt-10 px-4 sm:px-6"
>

</motion.div>
   

      {/* Kontaktbereich */}
      <section className="bg-white px-6 pt-12 pb-28 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
          Kontaktieren Sie uns
        </h2>
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
  label: (
    <span className="flex items-center gap-1">
      Mobil (auch WhatsApp   <FaWhatsapp className="text-green-500 w-6 h-6" />)
    
    </span>
  ),
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
        

                   <div className="mt-20 mb-10 flex flex-col items-center">
          <img
            src="/lexware-office-logo.png"
            alt="Lexware Logo"
            className="w-48 h-auto"
          />
        </div>
      </section>
 <div className="w-full bg-gray-100 border-t border-blue-800 py-4 overflow-hidden">
  <div className="animate-marquee whitespace-nowrap text-blue-900 text-sm sm:text-base font-[Cambria] font-semibold">
    <span className="inline-block px-6">
      Erbracht werden ausschließlich Leistungen gem. §6 Nr.3 und 4 des StBerG – 
      <span className="underline underline-offset-2 decoration-dotted text-black ml-1">
        keine Rechts- oder Steuerberatung
      </span>.
    </span>
  </div>
</div>
    </main>
  );
}