import React, { useState } from 'react';
import img1 from "../../assets/RiskAnalyzer/video1.jpg";
import img2 from "../../assets/RiskAnalyzer/video2.jpg";
import img3 from "../../assets/RiskAnalyzer/video3.jpg";
import img4 from "../../assets/RiskAnalyzer/risk.jpg";
import video1 from "../../assets/video/key1.mp4";
import video2 from "../../assets/video/riskReward1.mp4";
import video3 from "../../assets/video/scenario1.mp4";
import pdf1 from "../../assets/RiskAnalyzer/pdf1.pdf"; // Corrected import
import pdf2 from "../../assets/RiskAnalyzer/pdf2.pdf"; // Corrected import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload,faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Added import
import { FaStar } from 'react-icons/fa';


const RiskAnalyze = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const items = [
    {
      id: 1,
      image: img1,
      alt: 'Image 1',
      video: video1,
      title: 'Key Parameters',
      description: `
        <strong>Monthly Risk Limit:</strong> A maximum loss of 10% per month. If this limit is reached, trading will be halted for the remainder of the month.
        <br/><br/>
        <strong>Daily Risk Limit:</strong> A maximum loss of 3% per day. If this limit is hit, trading will pause for that day.
        <br/><br/>
        <strong>Trading Window Suspension:</strong> Reaching the monthly limit results in the closure of the trading window for that month.
        <br/><br/>
        <strong>Resumption of Trading:</strong> Trading will resume in the following month unless the monthly limit has been breached.
      `,
      aosDelay: "100",
    },
    {
      id: 2,
      image: img2,
      alt: 'Image 2',
      video: video2,
      title: 'Risk Reward',
      description: `
        <strong>Risk Per Trade:</strong> Limit risk to 0.5% to 2% of total capital, ensuring no single trade significantly impacts the portfolio.
        <br/><br/>
        <strong>Reward Expectation:</strong> Target a reward of at least 1.5 to 3 times the risk taken. For example, risking 1% should yield a profit of 1.5% to 3%.
        <br/><br/>
        <strong>Risk-Reward Ratio:</strong> Maintain a consistent 1:1.5 or 1:3 risk-reward ratio, allowing for profitability even if not all trades are successful.
      `,
      aosDelay: "300",
    },
    {
      id: 3,
      image: img3,
      alt: 'Image 3',
      video: video3,
      title: 'Realtime Scenario',
      description: `
        <strong>Scenario 1: Single Trade Example</strong>
        <br/>
        <strong>Capital:</strong> $10,000
        <br/>
        <strong>Risk Per Trade:</strong> 1% ($100)
        <br/>
        <strong>Reward Target:</strong> 2% ($200)
        <br/>
        <strong>Risk-Reward Ratio:</strong> 1:2
        <br/><br/>
        <strong>Scenario 2: Daily Risk Limit</strong>
        <br/>
        <strong>Daily Loss Limit:</strong> 3% ($300)
        <br/>
        <strong>Maximum Trades:</strong> 3 unsuccessful trades (1% risk each)
        <br/><br/>
        
      `,
      aosDelay: "500",
    },
  ];
  const points = [
    {
      title: "Expertise in Currency Trading",
      description:
        "Our team blends macroeconomic analysis with tactical trading  skills for high conviction trades",
    },
    {
      title: "Unmatch Liquidity",
      description:
        "We ouperate in the largest global market executing trades quickly and favourably.",
    },
    {
      title: "Proven Risk-Management Performance",
      description:
        "With years of experience, we have a history of delivering consistent results.",
    },
    {
      title: "Responsive to Market Shift",
      description:
        "Our flexible strategy adapts to rapid changes in global economic conditions ensuring agility",
    },
  ];

  const handlePlayVideo = (id) => {
    setActiveVideo(activeVideo === id ? null : id); // Toggle video
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] flex flex-col md:flex-row">
        {/* Main Hero Section */}
        <div className="relative w-full sm:w-full md:w-1/2 h-full flex items-center justify-center">
          <img
            src={img4}
            alt="Services Header"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 w-full h-full flex flex-col items-center justify-center text-center p-5">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white  animate-fadeIn">
              Risk Analyze
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-4 mb-6 animate-fadeIn">
              Unlock your business potential with our expert solutions.
            </p>
            <a
              href="#structure"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 animate-bounce"
            >
              View Structure
            </a>
          </div>
        </div>

        {/* Sidebar for Trading Quotes */}
        <div
          data-aos="slide-right"
          className="w-full md:w-1/2 bg-gray-900 text-white flex flex-col justify-center items-center p-6 md:p-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Trade Inspirations</h2>
          <div className="space-y-4 md:space-y-6 w-full">
            {[
              {
                quote: "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.",
                author: "Sun Tzu, The Art of War",
              },
              {
                quote: "He will win who knows when to fight and when not to fight.",
                author: "Sun Tzu, The Art of War",
              },
              {
                quote: "Know your enemy and know yourself and you can fight a hundred battles without disaster.",
                author: "Sun Tzu, The Art of War",
              },
            ].map((quote, index) => (
              <div
                id="structure"
                key={index}
                className="p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300"
              >
                <p className="text-sm sm:text-base md:text-lg lg:text-xl italic">
                  "{quote.quote}"
                </p>
                <span className="block mt-2 text-xs sm:text-sm md:text-base text-gray-400">
                  – {quote.author}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 w-full dark:bg-gray-900 text-black dark:text-white py-10 px-5 md:px-20">
      <div className="text-3xl font-bold text-primary dark:text-white flex justify-center items-center mt-16 mb-16">
    Risk Reward Structure
</div>

<div className="relative flex items-center justify-center mb-8">
    <div className="absolute w-full border-b border-gray-300 dark:border-white"></div>
    <div className="absolute left-1/2 transform -translate-x-1/2">
        <i className="fas fa-star text-primary dark:text-white"></i> {/* Font Awesome Star Icon */}
        {/* Alternatively, you can use an SVG star icon here */}
    </div>
</div>


        {items.map((item) => (
          <div
            key={item.id}
            data-aos="fade-right"
            data-aos-delay={item.aosDelay}
            className="flex flex-col  md:flex-row items-center justify-between gap-8 mb-12"
          >
            {/* Image Section (Left) */}
            <div className="w-full md:w-1/2 relative group">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg group-hover:opacity-75 transition duration-300"
              />
              <button
                onClick={() => handlePlayVideo(item.id)}
                className="absolute inset-0 flex  items-center justify-center bg-black/50 rounded-lg hover:bg-black/70 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              {activeVideo === item.id && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <video
                    src={item.video}
                    controls
                    className="w-full h-full rounded-lg"
                  ></video>
                </div>
              )}
            </div>

            {/* Text Section (Right) */}
            <div className="w-full md:w-1/2 ">
              <h2 className="text-2xl font-bold mb-4 text-center">{item.title}</h2>
              <div
                className="text-base lg:text-base  text-gray-600 dark:text-gray-400 xl:text-lg"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
        {/*Invest Section*/}
        <div>
          <h1 data-aos="fade-in"
          data-aos-delay='200'
          className='text-3xl  mt-10 font-bold flex justify-start items-center'>Why Choose Francium Vanquitas&nbsp;<strong>?</strong></h1>
          {/*Point Section*/}
      <div className="mt-8 space-y-6 mb-12 pl-4 md:pl-6 lg:pl-8">
        {points.map((point, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={300 + index * 100}
            className="flex space-x-4 items-end"
          >
            
  {/* Responsive Arrow */}
  <div className="text-blue-500 text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
    →
  </div>

  {/* Title and Description */}
  <div>
  {/* Title */}
  <h3 className="text-lg sm:text-base md:text-lg lg:text-xl font-semibold dark:text-white">
    {point.title}
  </h3>

  {/* Arrow and Description with Spacing */}
  <div className="mt-2 flex items-center space-x-4">
    

    {/* Description */}
    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-xs md:text-sm lg:text-base">
      {point.description}
    </p>
  </div>
</div>
          </div>
        ))}
      </div>
        </div>

      </div>
    </div>
  
  );
};

export default RiskAnalyze;