import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Dummy data for beautiful cards
const servicesData = [
  { id: 1, name: "Advanced Haircut", price: "₹499", time: "45 Min", icon: "✂️", tag: "Popular" },
  { id: 2, name: "Keratin Hair Spa", price: "₹1299", time: "60 Min", icon: "💆‍♀️", tag: "" },
  { id: 3, name: "Glow Facial", price: "₹899", time: "50 Min", icon: "✨", tag: "Best Seller" },
  { id: 4, name: "Bridal Makeup", price: "₹4999", time: "3 Hrs", icon: "👰", tag: "" },
  { id: 5, name: "Body Massage", price: "₹1499", time: "60 Min", icon: "🌿", tag: "Relaxing" },
  { id: 6, name: "Acrylic Nail Art", price: "₹799", time: "40 Min", icon: "💅", tag: "" },
];

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header / Banner */}
      <div className="bg-indigo-900 text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-800 to-pink-700 opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Premium Services</h1>
          <p className="text-lg text-indigo-100">Explore our wide range of beauty, grooming, and styling services tailored just for you.</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="flex-grow container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-indigo-600 transition-colors">
                  <span className="group-hover:scale-110 transition-transform">{service.icon}</span>
                </div>
                {service.tag && (
                  <span className="bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {service.tag}
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-500 text-sm mb-6">Experience the best styling with our professional experts.</p>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase">Starting at</p>
                  <p className="text-lg font-extrabold text-indigo-600">{service.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-medium uppercase">Duration</p>
                  <p className="text-sm font-semibold text-gray-700">{service.time}</p>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-gray-50 hover:bg-indigo-600 text-gray-700 hover:text-white font-semibold py-3 rounded-xl transition-all">
                View Salons
              </button>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;