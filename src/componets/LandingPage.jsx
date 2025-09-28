import React from 'react';
import Herosection from './Hero';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <Herosection />
      <div id="shop-wrapper">
        <Shop />
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
