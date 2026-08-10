import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import All Pages from Componets folder
import Landing from '../Components/landing'; 
import Services from '../Components/Services';
import FindSalons from '../Components/FindSalons';
import About from '../Components/About';
import RegisterSalon from '../Components/RegisterSalon';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/services" element={<Services />} />
      <Route path="/find-salons" element={<FindSalons />} />
      <Route path="/about" element={<About />} />
      <Route path="/register-salon" element={<RegisterSalon />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route 
        path="*" 
        element={
          <div className="flex items-center justify-center h-screen text-2xl font-bold text-gray-600">
            404 - Page Not Found
          </div>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;