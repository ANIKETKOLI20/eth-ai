import React from "react";

const features = [
  {
    title: "Trade Optimizer",
    description:
      "Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.",
    icon: "🔧", 
  },
  {
    title: "Market Insight",
    description:
      "Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.",
    icon: "📊",
  },
  {
    title: "Risk Guard",
    description:
      "Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.",
    icon: "🛡️",
  },
  {
    title: "Portfolio Sync",
    description:
      "Easily manage your portfolio. You'll always know what you own, how it's performing, and where it's headed.",
    icon: "🔗",
  },
  {
    title: "Opportunity Scout",
    description:
      "Find exciting new projects, events, and tokens that others might be missing. Identify promising opportunities early so you never miss out.",
    icon: "🚀",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="w-full max-w-full px-4 py-16 bg-gradient-to-b from-[#0f0e17] to-[#0a0a0d] text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#1a1b24] to-[#272b3d] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full text-3xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-center text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
