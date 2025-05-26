import React from 'react';
import { FaTooth, FaRegSmile, FaSyringe, FaPills, FaTools } from 'react-icons/fa';

const TeethCleaning = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 flex items-center justify-center">
          <FaTooth className="mr-3" /> Teeth Cleaning
        </h1>
        <p className="mt-4 text-lg">
          Professional teeth cleaning helps remove plaque, tartar, and stains, promoting oral health and preventing gum disease.
        </p>
      </header>

      {/* Procedure Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaRegSmile className="mr-2 text-green-500" /> Procedure Overview
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Initial oral examination to assess dental health.</li>
          <li>Removal of plaque and tartar using specialized tools.</li>
          <li>Teeth polishing to eliminate surface stains.</li>
          <li>Flossing between teeth to remove debris.</li>
          <li>Application of fluoride treatment for enamel protection.</li>
        </ol>
      </section>

      {/* Tools & Equipment */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaTools className="mr-2 text-yellow-500" /> Tools & Equipment Used
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Dental Mirror:</strong> Allows visibility of hard-to-see areas in the mouth.</li>
          <li><strong>Scaler:</strong> Removes plaque and tartar from tooth surfaces.</li>
          <li><strong>Ultrasonic Scaler:</strong> Uses vibrations to break down deposits.</li>
          <li><strong>Polishing Tool:</strong> Smoothens teeth surfaces post-cleaning.</li>
          <li><strong>Saliva Ejector:</strong> Keeps the mouth dry during the procedure.</li>
        </ul>
      </section>

      {/* Medications Involved */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaPills className="mr-2 text-red-500" /> Medications Involved
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Topical Fluoride:</strong> Strengthens tooth enamel and prevents decay.</li>
          <li><strong>Antibacterial Mouthwash:</strong> Reduces oral bacteria and freshens breath.</li>
          <li><strong>Desensitizing Agents:</strong> Alleviates sensitivity post-cleaning.</li>
        </ul>
      </section>

      {/* Aftercare Instructions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaSyringe className="mr-2 text-purple-500" /> Aftercare Instructions
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Avoid consuming staining foods and beverages for 24 hours.</li>
          <li>Refrain from smoking to maintain oral health.</li>
          <li>Brush and floss regularly to prolong cleaning effects.</li>
          <li>Use a soft-bristled toothbrush to prevent gum irritation.</li>
        </ul>
      </section>

      {/* Visual Aids */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaRegSmile className="mr-2 text-indigo-500" /> Visual Aids
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/teeth-cleaning-1.jpg" alt="Teeth Cleaning Procedure" className="rounded shadow" />
          <img src="/images/teeth-cleaning-2.jpg" alt="Dental Tools Used" className="rounded shadow" />
        </div>
      </section>
    </div>
  );
};

export default TeethCleaning;
