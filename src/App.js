import React from "react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Hero from "./components/Hero/Hero.js";
import AboutSection from "./components/AboutSection.js";
import Tokenomics from "./components/Tokenomics.js";
import Roadmap from "./components/Roadmap.js";
import Footer from "./components/Footer.js";


function App() {
  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Hero/>
      <Features />
      <AboutSection/>
      <Tokenomics/>
      <Roadmap/>
      <Footer/>
    </div>
  );
}

export default App;
