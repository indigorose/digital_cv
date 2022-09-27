import React from 'react';
import Headerbar from '../components/Navbar';
import Heroproject from '../components/Heroproject';
import Footer from '../components/Footer';
import Aboutcv from '../components/Aboutcv';

const About = () => {
  return (
    <>
      <Headerbar />
      <Heroproject heading="About me" text="My current work history." />
      <Aboutcv />
      <Footer />
    </>
  );
};

export default About;
