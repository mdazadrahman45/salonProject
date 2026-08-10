import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Dummy Salon Data
const salonsData = [
  { id: 1, name: "StyleLounge Unisex Salon", rating: "4.8", reviews: 124, address: "Arera Colony, Bhopal", price: "₹499", tags: ["Unisex", "AC"] },
  { id: 2, name: "Glow & Glamour Beauty", rating: "4.9", reviews: 342, address: "MP Nagar, Bhopal", price: "₹799", tags: ["Women Only", "Premium"] },
  { id: 3, name: "The Macho Men's Parlour", rating: "4.6", reviews: 89, address: "Bairagarh, Bhopal", price: "₹299", tags: ["Men Only"] },
  { id: 4, name: "Scissors & Spas", rating: "4.7", reviews: 210, address: "Kolar Road, Bhopal", price: "₹599", tags: ["Unisex", "Parking"] },
];

const FindSalons = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar - Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-28">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center justify-between">
                Filters <span className="text-sm font-normal text-indigo-600 cursor-pointer">Clear All</span>
              </h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Salon Type</h4>
                <div className="space-y-2">
                  {['Unisex', 'Women Only', 'Men Only'].map((type, i) => (
                    <label key={i} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
                      <span className="text-gray-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Price Range</h4>
                <input type="range" className="w-full accent-indigo-600" />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>₹100</span>
                  <span>₹5000+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Area - Salon List */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Salons Near You</h2>
              <select className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 outline-none focus:border-indigo-500">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Rating: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {salonsData.map((salon) => (
                <div key={salon.id} className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all border border-gray-100">
                  <div className="h-48 bg-gray-200 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center text-gray-400">
                    <span className="text-4xl">📸</span>
                    <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-lg text-xs font-bold text-gray-800 flex items-center shadow-sm">
                      ⭐ {salon.rating} <span className="text-gray-400 font-normal ml-1">({salon.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{salon.name}</h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 flex items-center"><span className="mr-1">📍</span> {salon.address}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {salon.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md border border-gray-200">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400">Starts at</p>
                      <p className="text-lg font-extrabold text-indigo-600">{salon.price}</p>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FindSalons;