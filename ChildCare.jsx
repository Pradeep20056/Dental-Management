import React from 'react';
import { FaTooth, FaBaby, FaSyringe, FaShieldAlt, FaSmile } from 'react-icons/fa';

const Childcare = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800 animate-fadeIn">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 flex items-center justify-center">
          <FaBaby className="mr-3" /> Childcare Dental Treatment
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Specialized dental care for children, from infant care to adolescent orthodontics, ensuring healthy smiles.
        </p>
      </header>

      {/* What is Childcare Dentistry */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaTooth className="mr-2 text-green-600" /> What is Childcare Dentistry?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Childcare dentistry focuses on providing dental care to children, from the time their first teeth emerge through their teenage years. The goal is to ensure good oral hygiene habits are formed early and to prevent dental issues before they become serious.
        </p>
      </section>

      {/* Procedures */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaSyringe className="mr-2 text-yellow-600" /> Common Procedures
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Teething Care:</strong> Guidance for parents to care for the infant's first teeth.</li>
          <li><strong>Preventive Sealants:</strong> Application of protective coatings on molars to prevent cavities.</li>
          <li><strong>Fluoride Treatments:</strong> Regular fluoride treatments to strengthen teeth and prevent decay.</li>
          <li><strong>Orthodontic Evaluation:</strong> Early assessment for braces or other orthodontic treatments.</li>
        </ul>
      </section>

      {/* Aftercare Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaShieldAlt className="mr-2 text-teal-600" /> Aftercare Tips
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Help your child brush their teeth twice daily and floss regularly.</li>
          <li>Regular dental checkups are essential for monitoring oral development.</li>
          <li>Encourage healthy eating habits and avoid sugary snacks and drinks.</li>
          <li>Make dental visits fun to reduce any fear your child may have about dental care.</li>
        </ul>
      </section>

      {/* Visuals */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaSmile className="mr-2 text-blue-500" /> Visuals & Diagnosis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/childcare1.jpg" alt="Child's Dental Care" className="rounded-lg shadow-md" />
          <img src="/images/childcare2.jpg" alt="Pediatric Dentist" className="rounded-lg shadow-md" />
        </div>
      </section>
    </div>
  );
};

export default Childcare;
