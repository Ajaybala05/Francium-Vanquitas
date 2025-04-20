import React from 'react';
import img5 from "../../assets/video/key.jpg";
import { FaCoins } from "react-icons/fa"; // Import an icon for visual appeal
import img1 from "../../assets/video/key2.jpg";

const Investment = () => {
  const cards = [
    {
      title: 'For High Networth Individuals Investors',
      description: (
        <>
          <p>We acknowledge the pivotal role High Net Worth Individuals play in driving economic growth through strategic leadership and job creation. </p>
          <p>Our bespoke investment solutions are meticulously designed to support financial expansion, offering tailored and flexible strategies that align with each investor’s unique objectives.
          </p>
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
          <p>We recognize that individuals seek financial growth and independence to achieve their aspirations.</p>
          <p>Our investment solutions offer structured and consistent monthly or quarterly returns, enabling retail investors to maximize their wealth potential with confidence.</p>
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
    src={img1}
    alt="Services Header"
    className="absolute inset-0 w-full h-full object-contain"
  />


        <div className="absolute bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center p-5">
          <h1 className="text-6xl font-bold text-white mb-2">
            Know About Investment Terms
          </h1>
          <p className="text-xl text-gray-200 mb-6">
          Invest and trade with assurance, take the next step now.
          </p>
          <a
            href="#Investment"
            className="bg-[#6153CD] hover:bg-[#5147B8] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            View plans
          </a>
        </div>
      </div>

      {/* Main Content Section */}
      <div id="Investment" className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-10 px-5 md:px-20">
        <div className="text-3xl font-bold text-center mt-10 mb-4">
          Key Investment <span className="text-violet-500">plans Overview</span>
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
              Want To Know About Our Investment plans?
            </h2>
            <h5 className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
              Invest smart, invest with us
            </h5>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
            At Francium Vanquitas, we uphold the highest standards of transparency and clarity in our investment offerings. Our structured plans are meticulously designed to align with your financial objectives while ensuring flexibility and security. We provide comprehensive details on minimum investment requirements, fee structures, and projected returns, equipping you with the necessary information to make well-informed decisions. Our dedicated team of professionals is committed to guiding you through every stage of the investment process, delivering a seamless and rewarding experience.

            </p>
            <div className="w-16 h-1 bg-gray-500 rounded-md"></div>
          </div>
        </div>

        {/* Investment Plans Section */}
        <div>
          <h1
            data-aos="fade-in"
            data-aos-delay="200"
            className="text-3xl mt-12 font-bold flex justify-center items-center"
          >
            Investment Plans
          </h1>
        </div>

        {/* Card Layout */}
        <div
          data-aos="fade-in"
          data-aos-delay="200"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
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

        {/* No Management Fee Section */}
        <div
          className="bg-gradient-to-r from-[#6153CD] to-[#5147B8] rounded-lg shadow-lg p-8 mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex justify-center items-center mb-4">
            <FaCoins className="text-white text-5xl" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            No Management Fee
          </h2>
          <p className="text-lg text-gray-200">
            We maintain a transparent approach by not charging any management fees. This commitment to transparency builds trust and aligns our interests with yours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Investment;