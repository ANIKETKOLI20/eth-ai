import React, { useState } from "react";

const Navbar = () => {
  // State to manage the visibility of the modal menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/ai-eth-logo.png" alt="logo" className="h-8 w-8" />
        <h1 className="text-lg font-bold">EthAi</h1>
      </div>

      {/* Hamburger Icon for small devices */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-between w-8 h-6 relative focus:outline-none"
        >
          {/* Two lines of the hamburger icon */}
          <div
            className={`w-full h-1 bg-black transition-all duration-300 ${
              menuOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-full h-1 bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-full h-1 bg-black transition-all duration-300 ${
              menuOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Modal Menu (slide-in from the left) */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-dark transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-start p-6 space-y-6">
          <li>
            <a href="#features" className="text-lg hover:text-blue-500">
              Features
            </a>
          </li>
          <li>
            <a href="#why" className="text-lg hover:text-blue-500">
              Why Us
            </a>
          </li>
          <li>
            <a href="#tokenomics" className="text-lg hover:text-blue-500">
              Tokenomics
            </a>
          </li>
          <li>
            <a href="#roadmap" className="text-lg hover:text-blue-500">
              Roadmap
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Normal navigation for medium and larger screens */}
      <ul className="hidden md:flex justify-center items-center md:w-[653px] md:h-[64px] rounded-2xl bg-dull">
        <li className="mr-9">
          <a href="#features" className="hover:text-blue-500">
            Features
          </a>
        </li>
        <li className="mr-9">
          <a href="#about" className="hover:text-blue-500">
            Why Us
          </a>
        </li>
        <li className="mr-9">
          <a href="#tokenomics" className="hover:text-blue-500">
            Tokenomics
          </a>
        </li>
        <li className="mr-9">
          <a href="#roadmap" className="hover:text-blue-500">
            Roadmap
          </a>
        </li>
      </ul>

      {/* Buttons for login and whitepaper */}
      <div className="hidden md:block">
        <button className="bg-dark text-white px-4 py-2 rounded-md hover:bg-slate-600">
          Login
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-slate-200">
          Whitepaper
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
