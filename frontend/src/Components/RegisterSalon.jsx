import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const RegisterSalon = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm bg-orange-400/10 px-4 py-1.5 rounded-full mb-4 inline-block">Partner With Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Grow Your Salon Business With <span className="text-pink-500">SalonWala</span></h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Get more customers, manage appointments effortlessly, and increase your revenue. Join thousands of successful salon partners today.</p>
        </div>
      </div>

      {/* Registration Form */}
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-10">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Salon Registration Details</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Salon Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="e.g. Glow & Style" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Your Full Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="+91 00000 00000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="salon@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Salon Address *</label>
              <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" rows="3" placeholder="Complete address of your salon"></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="e.g. Bhopal" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="e.g. 462001" />
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-gray-100">
              <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all text-lg">
                Submit Registration Request
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">Our team will verify your details and approve your dashboard access within 24 hours.</p>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RegisterSalon;