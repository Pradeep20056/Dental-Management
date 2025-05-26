import React from 'react';
import { FaXRay, FaTooth, FaCamera, FaRadiationAlt } from 'react-icons/fa';

const DentalXrays = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800 animate-fadeIn">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 flex justify-center items-center">
          <FaXRay className="mr-3" /> Dental X-Rays
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Essential diagnostic tools that help dentists visualize the internal structure of teeth and jaw.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaTooth className="mr-2 text-green-600" /> What are Dental X-Rays?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Dental X-rays are imaging techniques used to view hidden dental structures, bone loss, and cavities. They provide a detailed view of oral health conditions that are not visible during a regular dental exam.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaCamera className="mr-2 text-purple-600" /> Types of X-Rays
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Bitewing X-rays:</strong> Show upper and lower back teeth and detect decay between them.</li>
          <li><strong>Periapical X-rays:</strong> Focus on one or two teeth from root to crown.</li>
          <li><strong>Panoramic X-rays:</strong> Capture the entire mouth in one image including jaw and sinuses.</li>
          <li><strong>Occlusal X-rays:</strong> Show the roof or floor of the mouth and are used in children’s treatment.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaRadiationAlt className="mr-2 text-red-500" /> Safety & Aftercare
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Minimal radiation exposure with modern digital X-ray machines.</li>
          <li>Lead aprons and thyroid collars are used for protection.</li>
          <li>Always inform your dentist if you are pregnant or planning to be.</li>
        </ul>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src="/images/xray1.jpg" alt="X-ray machine" className="rounded shadow" />
        <img src="/images/xray2.jpg" alt="Dental X-ray result" className="rounded shadow" />
      </div>
    </div>
  );
};

export default DentalXrays;
