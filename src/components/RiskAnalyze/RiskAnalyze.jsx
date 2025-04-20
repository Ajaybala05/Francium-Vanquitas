import React, { useState, useEffect } from 'react';
import img4 from "../../assets/RiskAnalyzer/risk.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RiskAnalyze = () => {
  const [progressValues, setProgressValues] = useState([0, 0, 0, 0]); // Initial progress values

  const points = [
    {
      title: "Expertise in Currency Trading",
      description:
        "Our team blends macroeconomic analysis with tactical trading skills for high conviction trades.",
    },
    {
      title: "Unmatch Liquidity",
      description:
        "We operate in the largest global market executing trades quickly and favorably.",
    },
    {
      title: "Proven Risk-Management Performance",
      description:
        "With years of experience, we have a history of delivering consistent results.",
    },
    {
      title: "Responsive to Market Shift",
      description:
        "Our flexible strategy adapts to rapid changes in global economic conditions ensuring agility.",
    },
  ];

  const jobs = [
    {
      title: "Real Time Market Monitoring Dynamic Trade Oversight",
      type: "Dynamic Trade Oversight",
      description:
        "Our technical team consistently monitors market dynamics to swiftly adapt and respond to changes, ensuring that you stay competitive and capitalize on emerging opportunities.",
      link: "#",
      progress: 100, // Target progress value
    },
    {
      title: "Risk Reduction Techniques",
      type: "Minimize Potential Losses",
      description:
        "Our team utilizes sophisticated strategies aimed at effectively mitigating potential downside risks with optimal efficiency and precision.",
      link: "#",
      progress: 75, // Target progress value
    },
    {
      title: "Diversification of Currency Pairs",
      type: "Enhance Trading Opportunities",
      description:
        "Strategically diversify exposure across multiple currency pairs to effectively mitigate risks associated with fluctuations in any single currency.",
      link: "#",
      progress: 50, // Target progress value
    },
    {
      title: "Volatility-Based Position Sizing",
      type: "Safeguarding Against Market Volatility",
      description:
        "We strategically adjust our position sizes in alignment with current market volatility, aiming to optimize risk exposure and enhance overall portfolio management.",
      link: "#",
      progress: 25, // Target progress value
    },
  ];

  // Simulate loading animation for progress bars
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValues((prevValues) =>
        prevValues.map((value, index) => {
          const targetProgress = jobs[index].progress;
          if (value < targetProgress) {
            return value + 1; // Increment progress
          }
          return value;
        })
      );
    }, 30); // Adjust speed of animation

    return () => clearInterval(interval);
  }, []);

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
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white animate-fadeIn">
              Risk Management
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-4 mb-6 animate-fadeIn">
              Unlock your Trading potential with our expert solutions.
            </p>
            <a
              href="#structure"
              className=" bg-[#6153CD] hover:bg-[#5147B8] text-white font-bold py-3 px-6 rounded-lg transition duration-300 animate-bounce"
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
  className="p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300 overflow-hidden"
>
  <p className="text-sm sm:text-base md:text-lg lg:text-xl italic overflow-hidden text-ellipsis">
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
      <div id="structure" className="bg-gray-100 w-full dark:bg-gray-900 text-black dark:text-white py-10 px-5 md:px-20">
        <div className="text-3xl font-bold text-center mt-10 mb-4">
          Effective Real-Time <span className="text-violet-500">Risk Management</span>
        </div>
        <div className="text-base sm:text-lg font-bold text-gray-400 mb-8 text-center">
        
Our specialized strategies are designed to strengthen <br/>trading security and proactively mitigate risks in real time

        </div>

       {/* Job Listings with Progress Indicators */}
       <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-transform duration-300 hover:shadow-lg hover:scale-105 ${
                  index % 2 === 1 ? "bg-gray-200 dark:bg-gray-800" : "bg-white dark:bg-gray-700"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {/* Job Info */}
                  <div className="w-full md:w-3/12">
                    <h4 className="text-xl font-semibold dark:text-white">{job.title}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{job.type}</span>
                  </div>

                  {/* Job Description */}
                  <div className="w-full md:w-6/12">
                    <p className="text-gray-600 dark:text-white">{job.description}</p>
                  </div>

                  {/* Circular Progress Bar */}
                  <div className="w-full md:w-3/12 flex justify-end">
                    <div style={{ width: 80, height: 80 }}>
                      <CircularProgressbar
                        value={progressValues[index]}
                        text={`${progressValues[index]}%`}
                        styles={buildStyles({
                          textSize: '20px',
                          pathColor: `rgba(59, 130, 246, ${progressValues[index] / 100})`,
                          textColor: '#3B82F6',
                          trailColor: '#E5E7EB',
                          pathTransitionDuration: 0.5, // Smooth transition
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  

      {/* Why Choose Us Section */}
      <div>
        <h1
          data-aos="fade-in"
          data-aos-delay="200"
          className="text-3xl mt-12 font-bold flex justify-center items-center"
        >
          Why Choose Francium Vanquitas ?
        </h1>
        {/* Point Section */}
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
                <h3 className="text-lg sm:text-base md:text-lg lg:text-xl font-semibold dark:text-white">
                  {point.title}
                </h3>
                <div className="mt-2 flex items-center space-x-4">
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
  );
};

export default RiskAnalyze;