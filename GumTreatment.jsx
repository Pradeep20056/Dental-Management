import React from 'react';
import { FaTooth, FaHeartbeat, FaProcedures, FaSyringe } from 'react-icons/fa';

const GumTreatment = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800 animate-fadeIn">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700 flex justify-center items-center">
          <FaHeartbeat className="mr-3" /> Gum Treatment
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Comprehensive care for your gums to treat and prevent periodontal diseases and ensure a healthy foundation for your teeth.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaTooth className="mr-2 text-blue-600" /> Why is Gum Health Important?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Healthy gums are vital for overall oral health. Gum diseases like gingivitis and periodontitis can lead to tooth loss, bad breath, and even affect systemic health such as heart disease.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaProcedures className="mr-2 text-red-600" /> Common Gum Treatments
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Scaling and Root Planing:</strong> Deep cleaning to remove tartar and bacteria below the gum line.</li>
          <li><strong>Antibiotic Therapy:</strong> Localized antibiotics to kill infection-causing bacteria.</li>
          <li><strong>Laser Therapy:</strong> Minimally invasive treatment to reduce inflammation and bacteria.</li>
          <li><strong>Surgical Procedures:</strong> Flap surgery or grafts for severe gum recession and bone loss.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaSyringe className="mr-2 text-purple-700" /> Aftercare Tips
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Maintain proper brushing and flossing habits.</li>
          <li>Use antimicrobial mouthwash as prescribed.</li>
          <li>Avoid smoking, as it slows healing and worsens gum disease.</li>
          <li>Schedule regular cleanings and checkups with your dentist.</li>
        </ul>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src="/images/gum1.jpg" alt="Gum cleaning procedure" className="rounded shadow" />
        <img src="/images/gum2.jpg" alt="Healthy gums" className="rounded shadow" />
      </div>
    </div>
  );
};

export default GumTreatment;
