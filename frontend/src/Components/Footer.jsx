import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t-4 border-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-6">✂️ SalonWala</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Book your salon appointments with ease. Verified salons, trusted professionals, and the best prices guaranteed.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Hair Styling</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Makeup & Bridal</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Skin Care & Spa</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Nail Art & Tattoo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Reach Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="mr-3">📍</span> 123, Salon Street, Bhopal, MP</li>
              <li className="flex items-center"><span className="mr-3">📞</span> +91 98765 43210</li>
              <li className="flex items-center"><span className="mr-3">✉️</span> support@salonwala.com</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© 2026 SalonWala. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;