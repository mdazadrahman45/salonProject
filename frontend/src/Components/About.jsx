import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">Redefining the <span className="text-indigo-600">Salon Experience</span></h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            SalonWala is India's premier platform for discovering and booking beauty, grooming, and wellness services. We connect you with top-rated professionals to make you look and feel your absolute best.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-indigo-600">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-extrabold text-white mb-2">500+</h3>
            <p className="text-indigo-200 font-medium uppercase tracking-wide">Partner Salons</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-white mb-2">50k+</h3>
            <p className="text-indigo-200 font-medium uppercase tracking-wide">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-white mb-2">1M+</h3>
            <p className="text-indigo-200 font-medium uppercase tracking-wide">Bookings Made</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-white mb-2">25+</h3>
            <p className="text-indigo-200 font-medium uppercase tracking-wide">Cities Active</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex-grow max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="h-96 bg-pink-100 rounded-3xl flex items-center justify-center text-6xl shadow-inner relative overflow-hidden">
             {/* Placeholder for an Image */}
             <span className="z-10 relative">✨ 💇‍♀️ 💆‍♂️</span>
             <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-transparent opacity-50"></div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 text-lg">
              We started SalonWala with a simple idea: booking a haircut or spa session shouldn't involve endless phone calls or waiting in queues. 
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Our goal is to empower local salon businesses with modern tech while providing customers with a seamless, transparent, and luxurious booking experience right from their fingertips.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg">
              Join Our Team
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;