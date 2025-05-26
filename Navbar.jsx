import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  let timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => setShowDropdown(false), 500);
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">🦷 DentalCare</div>
      <div className="space-x-4 flex items-center">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/appointment" className="text-gray-700 hover:text-blue-600">Appointment</Link>
        <Link to="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        <Link to="/signup" className="text-gray-700 hover:text-blue-600">Signup</Link>
        <Link to="/faq" className="text-gray-700 hover:text-blue-600">Faq</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="text-gray-700 hover:text-blue-600 flex items-center">
            Treatments <span className="ml-1">▼</span>
          </button>
          {showDropdown && (
            <div className="absolute top-10 bg-white shadow-md rounded-md py-2 w-56 z-10 animate-fadeIn border">
              {[
                { name: "Teeth Cleaning", path: "teeth-cleaning" },
                { name: "Whitening", path: "whitening" },
                { name: "Braces & Aligners", path: "braces-aligners" },
                { name: "Root Canal", path: "root-canal" },

                { name: "Child Dental Care", path: "child-care" },
                { name: "Tooth Extraction", path: "tooth-extraction" },
                { name: "Smile Makeover", path: "smile-makeover" },
                { name: "Dental X-rays", path: "dental-xrays" },
                { name: "Gum Treatment", path: "gum-treatment" },
              ].map((treatment, index) => (
                <Link
                  key={index}
                  to={`/treatments/${treatment.path}`}
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-100"
                >
                  {treatment.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
