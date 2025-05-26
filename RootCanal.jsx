import React from 'react';
import { FaTooth, FaTools, FaSyringe, FaPills, FaXRay } from 'react-icons/fa';

const RootCanal = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800 animate-fadeIn">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-600 flex items-center justify-center">
          <FaTooth className="mr-3" /> Root Canal Treatment
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A root canal is a dental procedure to remove infected pulp from inside the tooth, disinfect the root canals, and seal them to prevent further infection.
        </p>
      </header>

      {/* What is it */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaTooth className="mr-2 text-blue-600" /> What is a Root Canal?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          A root canal treatment is necessary when the soft inner tissue (pulp) of a tooth becomes inflamed or infected due to decay, cracks, or trauma. The procedure involves cleaning out the infected pulp, shaping the root canals, and filling and sealing the space to restore the tooth’s function and integrity.
        </p>
      </section>

      {/* Procedure */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaTools className="mr-2 text-green-600" /> Procedure Steps
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Dental X-rays are taken to examine root and pulp condition.</li>
          <li>Local anesthesia is applied to numb the area.</li>
          <li>Access hole is drilled in the tooth crown to reach the pulp chamber.</li>
          <li>Infected pulp is removed and canals are cleaned and shaped.</li>
          <li>Canals are disinfected and filled with gutta-percha (a rubber-like material).</li>
          <li>The tooth is sealed with a temporary or permanent filling or crown.</li>
        </ol>
      </section>

      {/* Tools Used */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaTools className="mr-2 text-purple-600" /> Tools Used
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Endodontic Explorer:</strong> To detect canal openings.</li>
          <li><strong>Files and Reamers:</strong> To clean and shape the canals.</li>
          <li><strong>Irrigation Syringes:</strong> To flush out debris and bacteria.</li>
          <li><strong>Gutta-percha Points:</strong> To fill and seal the canals.</li>
          <li><strong>Rubber Dam:</strong> To isolate the tooth during the procedure.</li>
        </ul>
      </section>

      {/* Medicines Used */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaPills className="mr-2 text-pink-600" /> Medicines & Materials
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Local Anesthetic (e.g., Lidocaine):</strong> To numb the area.</li>
          <li><strong>Sodium Hypochlorite:</strong> Used for canal irrigation and disinfection.</li>
          <li><strong>Gutta-percha:</strong> Biocompatible material used for filling canals.</li>
          <li><strong>Calcium Hydroxide:</strong> Used between appointments to disinfect.</li>
          <li><strong>Analgesics & Antibiotics:</strong> Ibuprofen, Amoxicillin to manage pain and infection.</li>
        </ul>
      </section>

      {/* Aftercare */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaSyringe className="mr-2 text-yellow-600" /> Aftercare Tips
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Avoid chewing on the treated tooth until it's restored with a crown.</li>
          <li>Take prescribed medications on time.</li>
          <li>Maintain proper oral hygiene with gentle brushing and flossing.</li>
          <li>Visit your dentist for a follow-up and crown placement if needed.</li>
        </ul>
      </section>

      {/* X-ray */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaXRay className="mr-2 text-blue-500" /> Visuals & Diagnosis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/root-canal-xray.jpg" alt="Root Canal X-ray" className="rounded-lg shadow-md" />
          <img src="/images/root-canal-tools.jpg" alt="Root Canal Tools" className="rounded-lg shadow-md" />
        </div>
      </section>
    </div>
  );
};

export default RootCanal;
