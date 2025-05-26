import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username === username && user.password === password) {
      alert("Login successful ✅");
      navigate("/");
    } else {
      alert("❌ Invalid credentials");
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-pink-500 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-white text-center">Login</h2>
      <div className="bg-white shadow-lg rounded-lg p-8 w-80">
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
          className="mb-6 p-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
        />
        <button
          onClick={handleLogin}
          className="px-6 py-2 bg-teal-500 text-white rounded-md w-full hover:bg-teal-600 focus:outline-none"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-center">
          Forgot your password?{" "}
          <a href="/forgot-password" className="text-teal-500">Click here</a>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
