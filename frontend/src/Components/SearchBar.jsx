import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/find-salons');
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-2xl flex flex-col md:flex-row items-center w-full max-w-3xl">
      
      {/* Location Input */}
      <div className="w-full md:w-5/12 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200">
        <span className="text-[#bda87f] text-xl mr-3">📍</span>
        <input 
          type="text" 
          placeholder="Location (e.g. Bhopal)" 
          className="w-full outline-none text-gray-800 bg-transparent placeholder-gray-500 font-medium"
        />
      </div>
      
      {/* Service Input */}
      <div className="w-full md:w-7/12 flex items-center px-4 py-3">
        <span className="text-[#bda87f] text-xl mr-3">✂️</span>
        <input 
          type="text" 
          placeholder="Search for Haircut, Spa..." 
          className="w-full outline-none text-gray-800 bg-transparent placeholder-gray-500 font-medium"
        />
      </div>
      
      {/* Golden Search Button */}
      <button 
        onClick={handleSearch}
        className="w-full md:w-auto bg-[#bda87f] hover:bg-[#a8936a] text-white px-8 py-3.5 rounded-md font-bold uppercase tracking-wider transition-colors mt-2 md:mt-0 whitespace-nowrap"
      >
        Search
      </button>
      
    </div>
  );
};

export default SearchBar;