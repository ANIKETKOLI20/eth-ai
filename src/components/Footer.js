import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaDiscord,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full max-w-full px-4 bg-black text-white py-8">
      <div className="flex items-center ml-16">
        <img src="/ai-eth-logo.png" alt="logo" className="h-8 w-8" />
        <h1 className="text-lg font-bold">EthAi</h1>
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left: Social Media Links */}
        <div className="flex space-x-6 mb-4 lg:mb-0">
          <a
            href="#"
            aria-label="Telegram"
            className="text-white hover:text-gray-400"
          >
            <FaTelegramPlane size={24} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            aria-label="Discord"
            className="text-white hover:text-gray-400"
          >
            <FaDiscord size={24} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-gray-400"
          >
            <FaFacebookF size={24} />
          </a>
        </div>

        {/* Right: Call to Action */}
        <div className="text-right">
          <p className="text-xl font-semibold mb-2">
            "Designed for traders of today, just like you."
          </p>
          <div className="inline-block">
            <input
              type="email"
              placeholder="What's your work email?"
              className="bg-[#001F2B] text-white py-2 px-4 rounded-l-md focus:outline-none"
            />
            <button className="bg-[#00C9C9] text-black py-2 px-4 rounded-r-md font-bold hover:bg-[#00b3b3]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
