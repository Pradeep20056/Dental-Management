import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (email && username && password && dob) {
      const newUser = { email, username, password, dob };
      localStorage.setItem("user", JSON.stringify(newUser));
      navigate("/"); // Redirect to login page
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-pink-500 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-white text-center">Sign Up</h2>
      <div className="bg-white shadow-lg rounded-lg p-8 w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="mb-6 p-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
        />
        <button
          onClick={handleSignup}
          className="px-6 py-2 bg-teal-500 text-white rounded-md w-full hover:bg-teal-600 focus:outline-none"
        >
          Sign Up
        </button>
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-teal-500">Login here</a>
        </p>
      </div>
    </motion.div>
  );
};

export default Signup;
