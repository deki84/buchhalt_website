'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier später: Versand via API oder E-Mail-Service
    console.log('Formulardaten:', formData);
    alert('Nachricht erfolgreich gesendet.');
  };

  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 font-[Cambria]">Kontaktformular</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-6">
        <div>
          <label className="block text-sm font-[Cambria] text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded text-sm font-[Cambria] focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-[Cambria] text-gray-700 mb-1">E-Mail</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded text-sm font-[Cambria] focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-[Cambria] text-gray-700 mb-1">Nachricht</label>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded text-sm font-[Cambria] focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-800 text-white px-6 py-2 rounded font-[Cambria] hover:bg-blue-600 transition"
        >
          Nachricht senden
        </button>
      </form>
    </section>
  );
}
