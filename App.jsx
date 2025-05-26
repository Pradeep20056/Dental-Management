import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Appointment from "./pages/Appointment";
import TeethCleaning from "./pages/treatments/TeethCleaning";
import Whitening from "./pages/treatments/Whitening";
import BracesAligners from "./pages/treatments/BracesAligners";
import RootCanal from "./pages/treatments/RootCanal";
import ChildCare from "./pages/treatments/ChildCare";
import ToothExtraction from "./pages/treatments/ToothExtraction";
import SmileMakeover from "./pages/treatments/SmileMakeover";
import DentalXrays from "./pages/treatments/DentalXrays";
import GumTreatment from "./pages/treatments/GumTreatment";

import Faq from "./pages/Faq";



function App() {

  // Example appointment set for 30 minutes from now
 

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/faq" element={<Faq />} />
           {/* Treatment Routes */}
        <Route path="/treatments/teeth-cleaning" element={<TeethCleaning />} />
        <Route path="/treatments/whitening" element={<Whitening />} />
        <Route path="/treatments/braces-aligners" element={<BracesAligners />} />
        <Route path="/treatments/root-canal" element={<RootCanal />} />
        
        <Route path="/treatments/child-care" element={<ChildCare />} />
        <Route path="/treatments/tooth-extraction" element={<ToothExtraction />} />
        <Route path="/treatments/smile-makeover" element={<SmileMakeover />} />
        <Route path="/treatments/dental-xrays" element={<DentalXrays />} />
        <Route path="/treatments/gum-treatment" element={<GumTreatment />} />
         

          {/* Add AppointmentReminder here to be shown on specific page */}
      
        </Routes>

        {/* Add AppointmentReminder globally or on specific page */}
  
        
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
