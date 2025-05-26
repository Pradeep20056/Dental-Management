// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    if (email) {
      alert("Password reset link sent to your email.");
    } else {
      alert("Please enter your email.");
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-coral-500 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-white text-center">Forgot Password</h2>
      <div className="bg-white shadow-lg rounded-lg p-8 w-80">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-6 p-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
        />
        <button
          onClick={handleResetPassword}
          className="px-6 py-2 bg-teal-500 text-white rounded-md w-full hover:bg-teal-600 focus:outline-none"
        >
          Send Reset Link
        </button>
      </div>
    </motion.div>
  );
};

export default ForgotPassword;
