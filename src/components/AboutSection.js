import React from "react";

const features = [
  {
    title: "Stay Ahead",
    description: "No more guesswork—get clear, trustable insights.",
    icon: "📊", 
  },
  {
    title: "Know Your Assets",
    description: "Always stay on top of how your investments are performing.",
    icon: "💼",
  },
  {
    title: "Simple, Not Overwhelming",
    description: "Our tools are designed to make complex market analysis easy to understand and act on.",
    icon: "🔧",
  },
  {
    title: "Future-Proof",
    description:
      "We’re constantly improving, adding new features to help you make the most informed decisions possible.",
    icon: "🚀",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="w-full max-w-full px-4 py-16 text-white text-center">
      {/* Container */}
      <div className="max-w-6xl mx-auto">
        {/* Title and Description */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">About EthAi</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            At EthAi, we're all about making crypto trading easier and more intuitive. We provide tools that help traders
            keep up with all new market trends, track top traders' movements.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-12">
          <button className="bg-gradient-to-r from-blue-500 to-teal-400 px-6 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform">
            Read more
          </button>
        </div>

        {/* Features Grid */}
        <div className="bg-[#103841] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg text-left flex flex-col items-start space-y-4"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
