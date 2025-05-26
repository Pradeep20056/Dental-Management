import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [appointment, setAppointment] = useState({
    name: "",
    email: "",
    date: "",
    reason: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    existingAppointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(existingAppointments));

    toast.success("✅ Appointment placed successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });

    setAppointment({ name: "", email: "", date: "", reason: "" });

    setShowConfirmation(true);

    setTimeout(() => {
      setShowConfirmation(false);
      navigate("/appointment");
    }, 3000);
  };

  return (
    <div className="p-4 md:p-8 space-y-16 relative">
      {/* Confirmation Popup Animation */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.3 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-10 py-6 rounded-xl shadow-2xl z-50 text-center"
          >
            <motion.div
              initial={{ rotate: -30 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.6 }}
              className="text-4xl mb-2"
            >
              ✅
            </motion.div>
            <h2 className="text-xl font-bold">Appointment Confirmed!</h2>
            <p className="text-sm">Redirecting to appointment page...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          🦷 Smile Brighter with DentalCare+
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          We provide premium dental services with a touch of care and advanced technology. Book your appointment today and keep your smile shining! 😁
        </p>
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/3063/3063827.png"
          alt="Dental Hero"
          className="w-48 mx-auto"
          whileHover={{ scale: 1.1 }}
        />
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center text-blue-600">🛠️ Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Teeth Cleaning 🧼", desc: "Remove plaque and tartar to keep your teeth healthy." },
            { title: "Whitening 😁", desc: "Brighten your smile with professional whitening." },
            { title: "Braces & Aligners 🦷", desc: "Straighten your teeth with invisible aligners." },
            { title: "Root Canal 🪥", desc: "Painless treatment for infected teeth." },
            { title: "Dental Implants 🛠️", desc: "Replace missing teeth with durable implants." },
            { title: "Child Care 👶", desc: "Gentle care for your little ones." },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white shadow-lg rounded-xl border"
            >
              <h3 className="font-semibold text-xl text-blue-500">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 text-center"
      >
        <h2 className="text-2xl font-semibold text-blue-600">🦷 Why Choose Us?</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          At DentalCare+, we care for your oral health as much as you do. Our highly qualified professionals use the latest technology and provide a warm and welcoming environment. Whether you're coming in for a routine checkup or more specialized treatment, we're here to provide the best dental experience for you and your family.
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex justify-center space-x-6"
        >
          <motion.div className="w-16 h-16 flex justify-center items-center bg-blue-600 text-white rounded-full">
            🦷
          </motion.div>
          <motion.div className="w-16 h-16 flex justify-center items-center bg-green-600 text-white rounded-full">
            😁
          </motion.div>
          <motion.div className="w-16 h-16 flex justify-center items-center bg-yellow-600 text-white rounded-full">
            🧼
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Appointment Form Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-xl mx-auto bg-white p-6 shadow rounded-xl"
      >
        <h2 className="text-2xl font-bold text-center text-green-700 mb-4">📅 Book an Appointment</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            value={appointment.name}
            onChange={(e) => setAppointment({ ...appointment, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={appointment.email}
            onChange={(e) => setAppointment({ ...appointment, email: e.target.value })}
            required
          />
          <input
            type="date"
            className="w-full border p-2 rounded"
            value={appointment.date}
            onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
            required
          />
          <textarea
            placeholder="Reason for Appointment"
            className="w-full border p-2 rounded"
            value={appointment.reason}
            onChange={(e) => setAppointment({ ...appointment, reason: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded transition-all duration-300"
          >
            Confirm Appointment ✅
          </button>
        </form>
      </motion.section>
    </div>
  );
}

export default Home;
