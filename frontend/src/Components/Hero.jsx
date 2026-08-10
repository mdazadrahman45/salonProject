import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <section 
      className="relative w-full min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ 
        /* Naya Premium Dark Salon Image URL */
        backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/071/531/575/small_2x/barber-shop-haircut-service-professional-stylist-using-clippers-for-a-modern-men-s-fade-hairstyle-photo.jpeg')" 
      }}
    >
      {/* Dark Overlay - Yeh image ko thoda dark karega taaki safed text chamke */}
      <div className="absolute inset-0 bg-black/70 w-full h-full"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide leading-tight mb-4 uppercase drop-shadow-lg">
            Find & Book Your <br />
            Favourite Salon
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 font-light tracking-wide drop-shadow-md">
            Your Types. Your Style. Your Color. <br className="hidden md:block" />
            Book appointments easily with trusted experts near you.
          </p>

          <SearchBar />
          
        </div>
      </div>
    </section>
  );
};

export default Hero;