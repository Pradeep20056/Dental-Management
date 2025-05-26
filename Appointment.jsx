import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Appointment() {
  const [latest, setLatest] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    if (stored.length > 0) {
      setLatest(stored[stored.length - 1]); // Get latest appointment
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-tr from-blue-100 via-white to-green-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-xl p-6 max-w-md w-full text-center space-y-4"
      >
        <h2 className="text-2xl font-bold text-blue-600">📄 Appointment Details</h2>

        {latest ? (
          <div className="space-y-2 text-left text-gray-700">
            <p><strong>👤 Name:</strong> {latest.name}</p>
            <p><strong>📧 Email:</strong> {latest.email}</p>
            <p><strong>📅 Date:</strong> {latest.date}</p>
            <p><strong>📝 Reason:</strong> {latest.reason || "Not specified"}</p>
          </div>
        ) : (
          <p className="text-red-500">❌ No appointment found.</p>
        )}

        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          ⬅️ Back to Home
        </button>
      </motion.div>
      {/* Doctor's Schedule Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-xl p-6 max-w-md w-full text-center space-y-4 mt-8"
      >
        <h2 className="text-2xl font-bold text-blue-600">🩺 Doctor's Schedule</h2>
        <p className="text-gray-700">
          [Doctor's schedule will be displayed here]
        </p>
      </motion.div>
    </div>
  );
}

export default Appointment;
