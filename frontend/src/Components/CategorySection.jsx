import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: "Hair Cut", icon: "✂️", bgColor: "bg-blue-50" },
  { id: 2, name: "Hair Spa", icon: "💆‍♀️", bgColor: "bg-pink-50" },
  { id: 3, name: "Facial", icon: "✨", bgColor: "bg-amber-50" },
  { id: 4, name: "Bridal", icon: "👰", bgColor: "bg-rose-50" },
  { id: 5, name: "Massage", icon: "🌿", bgColor: "bg-green-50" },
  { id: 6, name: "Nail Art", icon: "💅", bgColor: "bg-purple-50" },
];

const CategorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trending Services</h2>
          <p className="text-gray-500 mt-3 text-lg">Choose from our most popular beauty services</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link 
              to="/find-salons" 
              key={cat.id} 
              className={`flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer ${cat.bgColor} hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 block`}
            >
              <div className="text-4xl mb-4 bg-white w-16 h-16 flex items-center justify-center rounded-full shadow-sm">
                {cat.icon}
              </div>
              <h3 className="font-semibold text-gray-800">{cat.name}</h3>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CategorySection;