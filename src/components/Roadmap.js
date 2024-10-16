import React from "react";


const Roadmap = () => {
  return (
    <section className="w-full max-w-full px-4 bg-[#00161D] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">Roadmap</h2>

        {/* Phase 1: Image on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text Section */}
          <div>
            <span className="text-sm bg-[#00C9C9] text-black px-2 py-1 rounded-md">
              PHASE 1
            </span>
            <h3 className="text-2xl font-bold mt-4 mb-4">Kicking Off</h3>
            <ul className="space-y-2 text-lg">
              <li>Launch of EthAi: Officially</li>
              <li>Development of Core AI Agents</li>
              <li>User Onboarding Campaign</li>
              <li>Community Engagement Initiatives</li>
            </ul>
          </div>

          {/* Image Section */}
          <div>
            <img
              src='/kick-off.png'
              alt="Phase 1 Illustration"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        {/* Phase 2: Image on the Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div>
            <img
              src='/review.png'
              alt="Phase 2 Illustration"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Text Section */}
          <div>
            <span className="text-sm bg-[#00C9C9] text-black px-2 py-1 rounded-md">
              PHASE 2
            </span>
            <h3 className="text-2xl font-bold mt-4 mb-4">Bigger Insights</h3>
            <ul className="space-y-2 text-lg">
              <li>Introduction of Advanced AI Agents</li>
              <li>Strategic Partnerships</li>
              <li>User Interface Optimization</li>
              <li>Comprehensive Marketing Campaign</li>
            </ul>
          </div>
        </div>

        {/* Phase 3: Image on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text Section */}
          <div>
            <span className="text-sm bg-[#00C9C9] text-black px-2 py-1 rounded-md">
              PHASE 3
            </span>
            <h3 className="text-2xl font-bold mt-4 mb-4">Full Power</h3>
            <ul className="space-y-2 text-lg">
              <li>Introduction of Enhanced Features</li>
              <li>API Integration for Data Access</li>
              <li>Launch of Community-Driven Initiatives</li>
              <li>Continuous Improvement and Updates</li>
            </ul>
          </div>

          {/* Image Section */}
          <div>
            <img
              src='/full-power.png'
              alt="Phase 3 Illustration"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="my-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-[#001F2B] p-4 rounded-md">
              <summary className="font-bold">What is EthAi?</summary>
              <p className="mt-2">EthAi is an AI-powered platform designed to help traders make smarter decisions by tracking smart money flows and market trends.</p>
            </details>
            <details className="bg-[#001F2B] p-4 rounded-md">
              <summary className="font-bold">How can EthAi help me as a trader?</summary>
              <p className="mt-2">EthAi provides real-time insights and AI agents that monitor wallets and market activity to give you an edge in trading decisions.</p>
            </details>
            <details className="bg-[#001F2B] p-4 rounded-md">
              <summary className="font-bold">Who can use EthAi?</summary>
              <p className="mt-2">Both novice and experienced traders can benefit from the insights and tools provided by EthAi.</p>
            </details>
            <details className="bg-[#001F2B] p-4 rounded-md">
              <summary className="font-bold">How does EthAi track smart money flow?</summary>
              <p className="mt-2">The platform leverages AI to track large transactions, monitor key wallets, and provide updates on market trends.</p>
            </details>
            <details className="bg-[#001F2B] p-4 rounded-md">
              <summary className="font-bold">How does EthAi ensure data security?</summary>
              <p className="mt-2">EthAi uses state-of-the-art encryption and security protocols to ensure your data is secure at all times.</p>
            </details>
          </div>
        </div>

        {/* Explore Our dApp Section */}
        <div className="bg-[#001F2B] p-8 rounded-md text-center my-16">
          <h2 className="text-3xl font-bold mb-4">Explore Our dApp</h2>
          <p className="mb-6">
            EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends.
          </p>
          <a
            href="#"
            className="bg-[#00C9C9] text-black py-2 px-6 rounded-full font-bold"
          >
            Open dApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
