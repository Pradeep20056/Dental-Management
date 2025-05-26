import React from 'react';
import { FaTooth, FaSmileBeam, FaSyringe, FaPills, FaTools } from 'react-icons/fa';

const Whitening = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 animate-fadeIn">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-600 flex items-center justify-center">
          <FaSmileBeam className="mr-3" /> Teeth Whitening
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Brighten your smile with safe and effective teeth whitening procedures, designed to remove stains and discoloration.
        </p>
      </header>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaTooth className="mr-2 text-blue-500" /> Procedure Overview
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Initial shade assessment and dental check-up.</li>
          <li>Protective gel applied to gums to avoid irritation.</li>
          <li>Whitening agent applied to teeth (usually hydrogen peroxide or carbamide peroxide).</li>
          <li>Activation with a special light or laser (optional).</li>
          <li>Rinse and final shade comparison.</li>
        </ol>
      </section>

      {/* Tools */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaTools className="mr-2 text-green-600" /> Tools & Equipment Used
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Cheek Retractor:</strong> Keeps the mouth open and dry during the process.</li>
          <li><strong>Gum Barrier Gel:</strong> Protects soft tissues from the whitening agent.</li>
          <li><strong>Whitening Lamp:</strong> Activates the bleaching gel (LED or UV light).</li>
          <li><strong>Shade Guide:</strong> Measures whitening progress before and after treatment.</li>
        </ul>
      </section>

      {/* Medications */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaPills className="mr-2 text-red-500" /> Chemicals & Medications Used
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Hydrogen Peroxide (25–40%):</strong> Primary active ingredient in whitening gels.</li>
          <li><strong>Carbamide Peroxide:</strong> Breaks into hydrogen peroxide and urea, offering slower whitening effect.</li>
          <li><strong>Desensitizing Gel:</strong> Applied post-whitening to reduce tooth sensitivity.</li>
        </ul>
      </section>

      {/* Aftercare */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaSyringe className="mr-2 text-purple-500" /> Aftercare Instructions
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Avoid colored foods and beverages (coffee, tea, berries) for at least 48 hours.</li>
          <li>Use sensitivity toothpaste if discomfort arises.</li>
          <li>Maintain oral hygiene with regular brushing and flossing.</li>
          <li>Consider touch-up treatments every 6-12 months.</li>
        </ul>
      </section>

      {/* Images */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📸 Visual Aids</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/whitening-before-after.jpg" alt="Before and After Whitening" className="rounded-lg shadow-md" />
          <img src="/images/whitening-tools.jpg" alt="Teeth Whitening Tools" className="rounded-lg shadow-md" />
        </div>
      </section>
    </div>
  );
};

export default Whitening;
