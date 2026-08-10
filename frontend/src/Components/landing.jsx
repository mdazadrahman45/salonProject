import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import CategorySection from './CategorySection';
import Footer from './Footer';

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <CategorySection />
      
      {/* Offers, Featured Salons aage yahan add karenge */}
      
      <Footer />
    </div>
  );
};

export default Landing;