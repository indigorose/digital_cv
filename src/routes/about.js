import React from 'react';
import Headerbar from '../components/Navbar';
import Heroproject from '../components/Heroproject';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Headerbar />
      <Heroproject heading="About me" text="My current work history." />
      <Footer />
    </>
  );
};

export default About;
