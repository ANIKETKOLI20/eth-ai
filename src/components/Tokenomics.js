import React from "react";

const Tokenomics = () => {
  return (
    <section className="w-full max-w-full px-4 bg-[#00161D] text-white py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">Tokenomics</h2>

        {/* Tokenomics Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
          {/* Left Side: Circular Chart */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              {/* Circular Chart SVG */}
              <svg viewBox="0 0 36 36" className="w-64 h-64">
                <circle
                  className="stroke-current text-[#00C9C9]"
                  strokeDasharray="90, 100"
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  strokeWidth="3"
                />
                <circle
                  className="stroke-current text-[#ffffff]"
                  strokeDasharray="5, 100"
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  strokeWidth="3"
                />
                <circle
                  className="stroke-current text-[#35BAF3]"
                  strokeDasharray="35, 100"
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  strokeWidth="3"
                />
              </svg>

              {/* Labels */}
              <div className="absolute top-6 left-2 text-white">
                <span>Liquidity Pool (90%)</span>
              </div>
              <div className="absolute top-32 left-0 text-white">
                <span>Marketing (5%)</span>
              </div>
              <div className="absolute bottom-8 right-0 text-white">
                <span>Team (35%)</span>
              </div>
            </div>
          </div>

          {/* Right Side: Tokenomics Details */}
          <div className="bg-[#103841] p-6 rounded-lg w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>Name:</p>
                <p>Token Name:</p>
                <p>Token Standard:</p>
                <p>Blockchain:</p>
                <p>Total Supply:</p>
                <p>Tax:</p>
              </div>
              <div className="text-right">
                <p>EthAi</p>
                <p>$EthAi</p>
                <p>ERC20</p>
                <p>Ethereum</p>
                <p>100 Million</p>
                <p>5%/5%</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p>Team:</p>
                <p>Marketing:</p>
                <p>Liquidity Pool:</p>
              </div>
              <div className="text-right">
                <p>35%</p>
                <p>5%</p>
                <p>90%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
