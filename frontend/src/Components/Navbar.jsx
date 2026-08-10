import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Bold, Black, Uppercase with Golden Accent */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="text-3xl font-black text-gray-900 uppercase tracking-widest flex items-center gap-2">
              <span className="text-[#bda87f]">✂️</span> SALONWALA
            </Link>
          </div>

          {/* Desktop Menu - Uppercase, Spaced Out */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-900 hover:text-[#bda87f] text-sm font-bold uppercase tracking-widest transition-colors">Home</Link>
            <Link to="/services" className="text-gray-900 hover:text-[#bda87f] text-sm font-bold uppercase tracking-widest transition-colors">Services</Link>
            <Link to="/find-salons" className="text-gray-900 hover:text-[#bda87f] text-sm font-bold uppercase tracking-widest transition-colors">Find Salons</Link>
            <Link to="/about" className="text-gray-900 hover:text-[#bda87f] text-sm font-bold uppercase tracking-widest transition-colors">About</Link>
          </div>

          {/* Desktop Buttons - Sharp corners, Golden colors */}
          <div className="hidden md:flex items-center space-x-5">
            <Link to="/register-salon" className="text-xs font-bold text-gray-500 border border-gray-200 px-4 py-2 hover:border-[#bda87f] hover:text-[#bda87f] uppercase tracking-wider transition-colors">
              Register Salon
            </Link>
            <Link to="/login" className="text-gray-900 hover:text-[#bda87f] text-sm font-bold uppercase tracking-widest transition-colors">Login</Link>
            <Link to="/signup" className="bg-[#bda87f] text-white px-6 py-2.5 font-bold text-sm uppercase tracking-widest hover:bg-[#a8936a] transition-all shadow-sm">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none text-2xl">
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg absolute w-full">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-900 font-bold uppercase tracking-widest hover:text-[#bda87f]">Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block text-gray-900 font-bold uppercase tracking-widest hover:text-[#bda87f]">Services</Link>
          <Link to="/find-salons" onClick={() => setIsOpen(false)} className="block text-gray-900 font-bold uppercase tracking-widest hover:text-[#bda87f]">Find Salons</Link>
          <hr className="border-gray-100" />
          <Link to="/login" onClick={() => setIsOpen(false)} className="block text-center text-[#bda87f] border border-[#bda87f] font-bold uppercase tracking-widest py-2">Login</Link>
          <Link to="/signup" onClick={() => setIsOpen(false)} className="block text-center bg-[#bda87f] text-white py-2 font-bold uppercase tracking-widest">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;