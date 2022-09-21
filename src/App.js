import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/index";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Contact />} />
        <Route path="/" element={<About />} />
        {/* <Route path="/" element={<Project />} /> */}
      </Routes>
    </>
  );
}

export default App;
