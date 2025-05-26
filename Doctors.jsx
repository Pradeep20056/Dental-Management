import { useState } from "react";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";

function Doctors() {
  const [availability, setAvailability] = useState({
    "Dr. Anjali Mehta": true,
    "Dr. Rakesh Kumar": false,
    "Dr. Priya Singh": true,
  });

  const [selectedSlot, setSelectedSlot] = useState({});

  const doctors = [
    {
      name: "Dr. Anjali Mehta",
      specialty: "Orthodontist",
      experience: "10+ years",
      image: "https://cdn-icons-png.flaticon.com/512/387/387561.png",
      phone: "+1234567890",
      slots: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"],
    },
    {
      name: "Dr. Rakesh Kumar",
      specialty: "Pediatric Dentist",
      experience: "8+ years",
      image: "https://cdn-icons-png.flaticon.com/512/2362/2362719.png",
      phone: "+1234567891",
      slots: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
    },
    {
      name: "Dr. Priya Singh",
      specialty: "Endodontist",
      experience: "12+ years",
      image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
      phone: "+1234567892",
      slots: ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"],
    },
  ];

  const toggleAvailability = (doctorName) => {
    setAvailability((prev) => ({
      ...prev,
      [doctorName]: !prev[doctorName],
    }));
  };

  const handleLiveChat = (phone) => {
    const message = "Hello, I need help with my dental appointment!";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleSlotSelection = (doctorName, slot) => {
    setSelectedSlot((prev) => ({
      ...prev,
      [doctorName]: slot,
    }));
  };

  const generatePDF = (doctor) => {
    const doc = new jsPDF();
    doc.text("Doctor Appointment Report", 20, 20);
    doc.text(`Name: ${doctor.name}`, 20, 30);
    doc.text(`Specialty: ${doctor.specialty}`, 20, 40);
    doc.text(`Experience: ${doctor.experience}`, 20, 50);
    doc.text(`Availability: ${availability[doctor.name] ? "Available" : "Not Available"}`, 20, 60);
    if (selectedSlot[doctor.name]) {
      doc.text(`Slot Booked: ${selectedSlot[doctor.name]}`, 20, 70);
    }
    doc.save(`${doctor.name}_appointment_report.pdf`);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">
        👩‍⚕️ Our Expert Dental Team
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {doctors.map((doc, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-lg border text-center space-y-4"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-24 h-24 mx-auto rounded-full border border-blue-300"
            />
            <h2 className="text-xl font-semibold text-blue-600">{doc.name}</h2>
            <p className="text-gray-600">{doc.specialty}</p>
            <p className="text-gray-500">{doc.experience}</p>

            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => toggleAvailability(doc.name)}
                className={`px-4 py-2 rounded-md font-medium shadow ${
                  availability[doc.name]
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-red-500 hover:bg-red-600"
                } text-white transition`}
              >
                {availability[doc.name] ? "Available ✅" : "Unavailable ❌"}
              </button>

              <button
                onClick={() => handleLiveChat(doc.phone)}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md shadow transition"
              >
                💬 Chat
              </button>
            </div>

            {/* Slot Selection */}
            {availability[doc.name] && (
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold text-blue-600">Slots</h3>
                {doc.slots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlotSelection(doc.name, slot)}
                    className={`w-full py-2 rounded-md ${
                      selectedSlot[doc.name] === slot
                        ? "bg-teal-600 text-white"
                        : "bg-teal-300 hover:bg-teal-400 text-black"
                    } transition`}
                  >
                    {slot}
                  </button>
                ))}
                {selectedSlot[doc.name] && (
                  <p className="text-green-600 font-semibold mt-1">
                    ✅ Slot: {selectedSlot[doc.name]}
                  </p>
                )}
              </div>
            )}

            {/* Animated Download PDF Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => generatePDF(doc)}
              className="px-4 py-2 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-md"
            >
              📄 Download PDF Report
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
