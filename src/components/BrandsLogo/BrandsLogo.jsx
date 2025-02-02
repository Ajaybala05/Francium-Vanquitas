import React, { useState } from "react";
import falcon from "../../assets/brands/bird-of-prey.svg";
import falci from "../../assets/brands/falci.svg";
import mammal from "../../assets/brands/mammal.svg";
import { Link } from "react-router-dom";

const BrandsLogo = () => {
  // State to manage which card is expanded
  const [expandedCard, setExpandedCard] = useState(null);

  // Data for strategies
  const strategies = [
    {
      id: 1,
      name: "Falcon",
      tagline: "The Top Eye",
      image: falcon,
      description: "The Falcon symbolizes keen vision and vigilance, focusing on gathering and analyzing high-level geopolitical data and breaking news. Key functionalities include real-time monitoring of global events, pattern recognition in market trends, and risk alerts for potential opportunities."
    },
    
    {
      id: 2,
      name: "Shark",
      tagline: "The Deep Diver",
      image: falci,
      description: "The Shark represents thoroughness and sharp analysis, diving deep into macro and microeconomic factors influencing currency dynamics. Key functionalities include macro analysis of interest rates and GDP growth, micro analysis of industry data, and benchmark rates analysis to deliver actionable intelligence."
    },
    {
      id: 3,
      name: "Honeybadger",
      tagline: "The Relentless Executer",
      image: mammal,
      description: "The Honeybadger embodies precision and resilience, executing trades with surgical accuracy based on insights from the Falcon and Shark. Key functionalities include strategic entry and exit points for optimal trading moments, risk management through stop-loss orders, and automated execution using advanced algorithms to capitalize on identified opportunities."
    }
    ,
  ];

  // Function to toggle card expansion
  const toggleCard = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null); // Collapse if already expanded
    } else {
      setExpandedCard(id); // Expand the clicked card
    }
  };

  return (
    <>
      <div id="strategies" className="container mb-16 mt-12 sm:mt-8">
        <h1 className="text-center text-3xl lg:text-4xl font-bold bold text-violet-950 dark:text-white mt-8 mb-12">
          Our Strategies
        </h1>
        <div className="py-8 md:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {strategies.map((strategy) => (
            <div
              key={strategy.id}
              className="flex items-center justify-center flex-col text-center space-y-4 cursor-pointer"
              onClick={() => toggleCard(strategy.id)}
            >
              {/* Strategy Image */}
              <img
                src={strategy.image}
                alt={`${strategy.name} Image`}
                className="w-28 sm:w-32 lg:w-36 h-auto"
              />

              {/* Strategy Name and Tagline */}
              <svg
                width="250"
                height="100"
                viewBox="0 0 250 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="50%"
                  y="40"
                  textAnchor="middle"
                  fill="#D4A76A"
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                  fontFamily="Arial, sans-serif"
                >
                  {strategy.name}
                </text>
                <text
                  x="50%"
                  y="80"
                  textAnchor="middle"
                  fill="#D4A76A"
                  className="text-md sm:text-lg lg:text-xl font-normal"
                  fontFamily="Arial, sans-serif"
                >
                  {strategy.tagline}
                </text>
              </svg>

              {/* Long Description (Collapsible) */}
              {expandedCard === strategy.id && (
                <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left">
                  <p className="text-gray-700 dark:text-gray-300">
                    {strategy.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Discover More Button */}
        <div className="flex items-center justify-center mt-6">
          <button className="relative overflow-hidden bg-[#6153CD] text-[#FFF8E5] font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#5147B8] focus:outline-none">
            <span className="z-10 relative">
              <Link to="/riskAnalyze#risk-analyzer">Discover More</Link>
            </span>
            <span className="absolute inset-0 bg-[#FFF8E5] opacity-0 rounded-full transition duration-500 ease-out hover:opacity-10"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BrandsLogo;