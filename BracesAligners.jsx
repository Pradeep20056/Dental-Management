import React from 'react';
import { FaTooth, FaTools, FaSyringe, FaPills, FaSmile } from 'react-icons/fa';

const BracesAligners = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800 animate-fadeIn">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 flex items-center justify-center">
          <FaSmile className="mr-3" /> Braces & Aligners Treatment
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Braces and aligners are orthodontic devices used to straighten teeth, fix bite issues, and improve oral health.
        </p>
      </header>

      {/* What are Braces and Aligners */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaTooth className="mr-2 text-green-600" /> What Are Braces & Aligners?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Braces are a type of orthodontic appliance used to align and straighten teeth, while aligners are clear plastic trays designed to move the teeth into the correct position gradually. Both treatments help address issues such as crooked teeth, overcrowded teeth, underbite, overbite, and more.
        </p>
      </section>

      {/* Procedure */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaTools className="mr-2 text-blue-600" /> Procedure Steps
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Initial consultation and examination with X-rays to assess the teeth and jaw alignment.</li>
          <li>For braces, metal or ceramic brackets are fixed to the teeth, and wires are connected to apply pressure.</li>
          <li>For aligners, custom-made clear trays are designed to fit the patient's teeth and gradually shift them into place.</li>
          <li>Regular checkups every 4–6 weeks to adjust braces or provide new aligners.</li>
          <li>After the desired results are achieved, braces are removed, and retainers are used to maintain the teeth position.</li>
        </ol>
      </section>

      {/* Tools Used */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaTools className="mr-2 text-yellow-600" /> Tools Used
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Braces Brackets:</strong> Metal or ceramic brackets that are bonded to each tooth.</li>
          <li><strong>Arch Wires:</strong> Wires that connect the brackets and provide the necessary pressure.</li>
          <li><strong>Clear Aligners:</strong> Transparent trays that gradually shift the teeth into place.</li>
          <li><strong>Orthodontic Bands:</strong> Rubber bands used for specific adjustments to tooth and jaw alignment.</li>
          <li><strong>Elastics:</strong> Small rubber bands that help with bite correction.</li>
        </ul>
      </section>

      {/* Medicines Used */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaPills className="mr-2 text-purple-600" /> Medicines & Materials
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Local Anesthetic (e.g., Lidocaine):</strong> Applied during installation or adjustment of braces to numb the area.</li>
          <li><strong>Ibuprofen:</strong> For pain relief after adjustments.</li>
          <li><strong>Orthodontic Wax:</strong> Used to cover brackets and wires to prevent irritation to the inside of the mouth.</li>
          <li><strong>Fluoride:</strong> To help strengthen the teeth and prevent cavities during orthodontic treatment.</li>
        </ul>
      </section>

      {/* Aftercare */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaSyringe className="mr-2 text-teal-600" /> Aftercare Tips
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Brush and floss your teeth carefully around the braces or aligners to avoid plaque build-up.</li>
          <li>Wear your retainer as prescribed to maintain the results after braces are removed.</li>
          <li>Avoid sticky and hard foods that can damage braces or misaligners.</li>
          <li>Attend regular orthodontic checkups to monitor progress and make adjustments.</li>
        </ul>
      </section>

      {/* Visuals */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaSmile className="mr-2 text-blue-500" /> Visuals & Diagnosis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/braces.jpg" alt="Braces Treatment" className="rounded-lg shadow-md" />
          <img src="/images/aligners.jpg" alt="Clear Aligners" className="rounded-lg shadow-md" />
        </div>
      </section>
    </div>
  );
};

export default BracesAligners;
