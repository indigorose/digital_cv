import React from 'react';
import Headerbar from '../components/Navbar';
import Heroproject from '../components/Heroproject';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <>
      <Headerbar />
      <Heroproject heading="Projects" text="My current projects." />
      <Footer />
    </>
  );
};

export default Projects;
