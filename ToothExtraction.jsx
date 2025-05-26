import React from 'react';
import { FaTooth, FaTools, FaPills, FaUserMd } from 'react-icons/fa';

const ToothExtraction = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800 animate-fadeIn">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-600 flex justify-center items-center">
          <FaTooth className="mr-3" /> Tooth Extraction
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Tooth extraction is the removal of a tooth from its socket in the bone to treat decay, infection, or overcrowding.
        </p>
      </header>

      {/* What is Tooth Extraction */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center text-blue-700 mb-4">
          <FaUserMd className="mr-2" /> When is Extraction Needed?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Tooth extraction may be necessary in cases of:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>Severe tooth decay or infection</li>
          <li>Gum disease leading to loose teeth</li>
          <li>Impacted wisdom teeth</li>
          <li>Orthodontic treatment to align teeth</li>
          <li>Tooth fracture or trauma</li>
        </ul>
      </section>

      {/* Tools Used */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center text-green-700 mb-4">
          <FaTools className="mr-2" /> Tools Used in Extraction
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Dental Elevator:</strong> Used to loosen the tooth before pulling it.</li>
          <li><strong>Extraction Forceps:</strong> Grips and removes the tooth from the socket.</li>
          <li><strong>Surgical Scalpel:</strong> For surgical extractions (if gums need to be cut).</li>
          <li><strong>Suction Device:</strong> Keeps the area dry during the procedure.</li>
        </ul>
      </section>

      {/* Medicines Used */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center text-purple-700 mb-4">
          <FaPills className="mr-2" /> Medicines Prescribed
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Antibiotics:</strong> Amoxicillin or Metronidazole to prevent infection.</li>
          <li><strong>Pain Relievers:</strong> Ibuprofen or Acetaminophen for pain control.</li>
          <li><strong>Mouth Rinse:</strong> Chlorhexidine to maintain oral hygiene post-surgery.</li>
          <li><strong>Topical Gels:</strong> For numbing the area if needed post-extraction.</li>
        </ul>
      </section>

      {/* Aftercare */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-orange-600 mb-4">Aftercare Tips</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Bite on gauze to stop bleeding for 30–45 minutes post-extraction.</li>
          <li>Avoid spitting, rinsing, or using a straw for 24 hours.</li>
          <li>Eat soft foods and stay hydrated (avoid hot/spicy items).</li>
          <li>Apply ice packs to reduce swelling and take prescribed medication.</li>
        </ul>
      </section>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src="/images/extraction1.jpg" alt="Tooth extraction tools" className="rounded shadow-lg" />
        <img src="/images/extraction2.jpg" alt="Extraction procedure" className="rounded shadow-lg" />
      </div>
    </div>
  );
};

export default ToothExtraction;
