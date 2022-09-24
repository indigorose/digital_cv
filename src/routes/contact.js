import React from 'react';
import Headerbar from '../components/Navbar';
import Heroproject from '../components/Heroproject';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Headerbar />
      <Heroproject heading="Contact" text="Let's talk." />
      <Footer />
    </>
  );
};

export default Contact;
