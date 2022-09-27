import React from 'react';
import Headerbar from '../components/Navbar';
import Heroproject from '../components/Heroproject';
import Footer from '../components/Footer';
import Form from '../components/Form';

const Contact = () => {
  return (
    <>
      <Headerbar />
      <Heroproject heading="Contact" text="Let's talk." />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
