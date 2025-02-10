import React from 'react';
import img5 from "../../assets/video/key.jpg";

const Investment = () => {
  const cards = [
    {
      title: 'For High Networth Individuals Investors',
      description: (
        <>
          <p>We understand the importance of wealth growth for High Networth Individuals, who contribute significantly to the economy through business and employment generation.</p>
          <p>Our tailored investment solutions ensure financial growth with flexible strategies suited to individual investor needs.</p>
          <hr className="my-2" />
          <h4 className="text-[#6153CD] font-bold">Premium Hedge Fund Service:</h4>
          <p><strong>Capital Requirement</strong> - USD 1 million to USD 50 million</p>
          <p><strong>Profit Withdrawal Period</strong> - Quarterly, Half Yearly & Annually</p>
          <p><strong>Management and Performance Fees</strong> - Flexible fee structure, finalized during personal meetings or agreement sign-off.</p>
          
        </>
      ),
    },
    {
      title: 'For Retail Investors',
      description: (
        <>
          <p>We recognize that individuals work hard to earn money and seek financial freedom to achieve their dreams.</p>
          <p>Our investment solutions offer systematic monthly or quarterly returns, enabling retail investors to maximize their financial potential.</p>
          <hr className="my-2" />
          <h4 className="text-[#6153CD] font-bold">Professional Trading Solution:</h4>
          <p><strong>Capital Requirement</strong> - USD 30,000 and above</p>
          <p><strong>Profit Sharing Period</strong> - Monthly (OR) Quarterly basis</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Smart risk management strategies</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src={img5}
          alt="Services Header"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center p-5">
          <h1 className="text-6xl font-bold text-white mb-2">
            Know About Investment Terms
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            Empower your financial journey.
          </p>
          <a
            href="#Investment"
            className="bg-[#6153CD] hover:bg-[#5147B8] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Main Content Section */}
      <div id="Investment" className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-10 px-5 md:px-20">
        <div className="text-3xl font-bold text-center mt-10 mb-4">
          Key Investment <span className="text-violet-500">Terms Overview</span>
        </div>
        <div className="text-lg font-bold text-gray-600 dark:text-gray-400 mb-8 text-center">
          Make Investment Strong And Effective
        </div>
        
        {/* Image and Text Section */}
<div className="flex flex-col md:flex-row items-center gap-8">
  {/* Left Side Image */}
  <div className="w-full md:w-[45%]">
    <img
      src={img5}
      alt="Investment Terms"
      className="w-full h-[350px] rounded-lg shadow-lg object-cover"
    />
  </div>

  {/* Right Side Content */}
  <div className="w-full md:w-[55%]">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
      Want To Know About Our Investment Terms?
    </h2>
    <h5 className="text-sm uppercase text-gray-600 dark:text-gray-400 mb-4">
      Understanding Key Financial Concepts
    </h5>
    <p className="text-gray-700 dark:text-gray-300 mb-6">
      At Francium Vanquitas, we prioritize transparency and clarity in our investment offerings. 
      Our terms are designed to align with your financial goals while ensuring flexibility and security.
      We provide detailed information on minimum investment amounts, fee structures, and expected returns. 
      Our team is committed to guiding you through every step of the investment process.
    </p>
    <div className="w-16 h-1 bg-gray-500 rounded-md"></div>
  </div>
</div>


        {/* Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden text-left flex flex-col"
            >
              <div className="bg-[#6153CD] text-white text-lg font-bold py-3 px-6">
                {card.title}
              </div>
              <div className="p-6 flex-1">
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investment;