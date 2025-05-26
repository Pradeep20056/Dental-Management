import { motion } from "framer-motion";
import { FaTooth, FaTools, FaSmile, FaUsers, FaHandsHelping, FaRegSmileBeam } from "react-icons/fa";

function About() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10 overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-blue-600"
      >
        About Us
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg text-gray-700 text-center"
      >
        We are committed to providing advanced dental solutions through technology and innovation. Our platform simplifies appointment scheduling, patient management, and clinic administration.
      </motion.p>

      {/* Services */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid md:grid-cols-3 gap-10 text-center"
      >
        {[{
          icon: <FaTooth className="text-5xl text-blue-600" />,
          title: "Oral Health",
          text: "Advanced dental care to keep your smile healthy and bright."
        }, {
          icon: <FaTools className="text-5xl text-green-600" />,
          title: "Dental Tools",
          text: "State-of-the-art tools to ensure precise and effective treatments."
        }, {
          icon: <FaSmile className="text-5xl text-yellow-600" />,
          title: "Patient Care",
          text: "We prioritize your comfort in a friendly and caring environment."
        }].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center space-y-3"
          >
            {item.icon}
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Our Mission */}
      <motion.section
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="space-y-4 mt-10"
      >
        <h3 className="text-2xl font-semibold text-center text-blue-600">Our Mission</h3>
        <p className="text-gray-700 text-lg">
          At DentalCare+, our mission is to provide innovative dental solutions through technology. We aim to make dental care accessible, affordable, and of the highest quality.
        </p>
      </motion.section>

      {/* Our Team */}
      <motion.section
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="space-y-4 mt-10"
      >
        <h3 className="text-2xl font-semibold text-center text-blue-600">Meet Our Team</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { name: "Dr. Kavii", role: "Lead Dentist", icon: <FaUsers className="text-5xl text-blue-600" /> },
            { name: "Dr. Anjali Mehta", role: "Orthodontist", icon: <FaHandsHelping className="text-5xl text-green-600" /> },
            { name: "Dr. Rakesh Kumar", role: "Pediatric Dentist", icon: <FaRegSmileBeam className="text-5xl text-yellow-600" /> },
          ].map((doc, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="space-y-2">
              {doc.icon}
              <h4 className="text-xl font-semibold">{doc.name}</h4>
              <p className="text-gray-600">{doc.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="space-y-4 mt-10"
      >
        <h3 className="text-2xl font-semibold text-center text-blue-600">What Our Patients Say</h3>
        <div className="space-y-6">
          {[
            { text: "I’ve never had such an amazing dental experience. The team made me feel so comfortable!", author: "- Vjk" },
            { text: "The team is extremely friendly and professional. I highly recommend them!", author: "- Vilwesh" }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <p className="text-lg italic text-gray-700">"{testimonial.text}"</p>
              <p className="text-right text-gray-600 mt-2">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default About;
