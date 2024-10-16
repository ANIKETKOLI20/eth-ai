import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="mt-10 flex flex-col items-center justify-center h-screen bg-hero-pattern bg-cover bg-center relative">
      <h1 className="md:text-6xl font-bold text-center">
        When Innovation Meets Investment
      </h1> 

      <p className="mt-4 text-lg text-center">
        Empowering trading through advanced technology
      </p>

      <button className="mt-6 bg-dark hover:bg-slate-800 text-white rounded-full border-2 border-white px-6 py-3">
        Open dApp
      </button>
    </section>
  );
};

export default Hero;
