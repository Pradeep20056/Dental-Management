import React from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "Go to the Appointment page, fill in your details, and choose a preferred time slot with a doctor.",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes, visit the Patient Profile page or contact our support for rescheduling or cancellations.",
  },
  {
    question: "Is registration mandatory?",
    answer:
      "Yes, you need to register to manage appointments, upload prescriptions, and receive reminders.",
  },
  {
    question: "What documents are required?",
    answer:
      "Please bring valid ID proof and your previous medical history or prescriptions, if any.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "Currently supported languages include English, Tamil, Hindi, French, German, Kannada, and Malayalam.",
  },
];

const Faq = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2 flex justify-center items-center gap-2">
          <FaQuestionCircle className="text-4xl" />
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Find answers to commonly asked questions and important patient requirements.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.details
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white shadow-md border-l-4 border-blue-600 rounded-lg px-5 py-4 group cursor-pointer"
          >
            <summary className="flex items-center justify-between text-lg font-medium text-blue-800">
              {faq.question}
              <MdExpandMore className="text-xl group-open:rotate-180 transition-transform duration-300" />
            </summary>
            <p className="text-gray-700 mt-2 leading-relaxed">{faq.answer}</p>
          </motion.details>
        ))}
      </div>
    </div>
  );
};

export default Faq;
