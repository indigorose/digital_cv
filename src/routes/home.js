import React from 'react';
import Headerbar from '../components/Navbar';
import HeroSection from '../components/Herosection';
import Footer from '../components/Footer';
import Projectcard from '../components/Projectcard';

const Home = () => {
  return (
    <>
      <Headerbar />
      <HeroSection />
      <Projectcard />
      <Footer />
    </>
  );
};

export default Home;
