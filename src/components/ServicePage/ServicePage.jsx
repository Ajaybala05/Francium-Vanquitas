import React from "react";
import img1 from "../../assets/ServicePage/trade1.jpg";
import img2 from "../../assets/ServicePage/imageNew.jpg";
import img3 from "../../assets/ServicePage/imageNew1.jpg";
import img4 from "../../assets/ServicePage/imageNew2.jpg";
import img5 from "../../assets/ServicePage/service1.jpg";
// import Investimage1 from "../../assets/ServicePage/Investimage1.jpg";
// import Investimage2 from "../../assets/ServicePage/Investimage2.jpg";
// import Investimage3 from "../../assets/ServicePage/Investimage3.jpg";
// import Investimage4 from "../../assets/ServicePage/Investimage4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faShieldAlt,
  faCogs,
  faCoins,
  faChartLine,
  faExchangeAlt,
  faBank,
  faGlobe,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import "./ServicePage.css";

const sections = [
  {
    title: "Premium Hedge Fund Services For High Networth Individuals",
    description: [
      "At Francium Vanquitas, we specialize in providing tailored wealth management solutions for High-Net-Worth Individuals (HNWIs) and Very-High-Net-Worth Individuals (VHNWIs) through our premier hedge fund management services. Our approach ensures flexibility, strategic asset allocation, and a commitment to maximizing wealth growth.",
      "Our approach is designed to offer maximum flexibility, ensuring that your capital is managed with precision and strategic foresight. Unlike traditional models, we do not impose management fees on invested capital. Instead, our compensation is aligned with your success, operating on a performance-based profit-sharing model.",
    ],
    image: img2,
    reverse: true,
    aosDelay: "150",
    icon: faHandshake,
    bulletIcons: [faGlobe, faChartLine, faMoneyBillWave],
  },
  {
    title: "Professional Trading Solutions for Retail Investors",
    description: [
      "We extend our specialized investment services to retail investors seeking a trusted and professional firm to generate consistent monthly returns on their capital.",
      "At Francium Vanquitas, we recognize the value of your hard-earned money and the responsibility that comes with managing it. Our mission is to help you achieve your financial goals by navigating volatile markets with expertise and precision. Generating consistent profits in the financial market isn’t just our job—it’s our commitment.",
    ],
    image: img3,
    reverse: false,
    aosDelay: "200",
    icon: faShieldAlt,
    bulletIcons: [faShieldAlt, faBank, faExchangeAlt],
  },
  {
    title: "USDT Crypto Exchange Business",
    description: [
      "The rapid adoption of cryptocurrency payments has accelerated significantly in recent years, with projections suggesting that digital assets could surpass traditional fiat currency payment systems within the next two decades.",
      "In response to this paradigm shift, we have strategically positioned our business to capitalize on the growing crypto market, leveraging it as a vehicle for wealth generation and long-term opportunities. Our core operations focus on the buying and selling of stablecoins, particularly USDT (Tether), via Binance’s P2P gateways, ensuring seamless, secure, and efficient transactions.",
      "Given the decentralized nature of cryptocurrency payment systems, the industry is inherently more susceptible to financial crimes.To mitigate risks and uphold the highest standards of security and reliability, we  established robust and trustworthy partnerships, reinforcing integrity of all USDT transactions.",
    ],
    image: img4,
    reverse: true,
    aosDelay: "300",
    icon: faCogs,
    bulletIcons: [faCoins, faChartLine, faMoneyBillWave],
  },
  {
    title: "Our Focused Trading Segments",
    description: [
      "Clients of Francium Vanquitas gain seamless access to a diversified portfolio of trading opportunities, spanning Forex, CFDs, commodities, energy markets, and traditional cryptocurrency investments—all within a single, integrated fund management platform.",
      "Our dedicated financial management team, composed of seasoned professionals, delivers exceptional service through strategic oversight, proactive investment optimization, and unparalleled responsiveness. By continuously monitoring market dynamics and capitalizing on emerging opportunities, we ensure the maximization of investment growth and long-term capital appreciation.",
    ],
    image: img1,
    reverse: false,
    aosDelay: "100",
    icon: faChartLine,
    bulletIcons: [faCoins, faChartLine, faExchangeAlt],
  },
];

const ServicePage = () => {
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
            Explore Our Services
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            Unlock your business potential.
          </p>
          <a
            href="#services"
            className="bg-[#6153CD] hover:bg-[#5147B8] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Service Sections */}
      <div
        id="services"
        className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-10 px-5 md:px-20"
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-4xl font-bold text-center mt-12 relative text-primary dark:text-white"
        >
          Our Services
          <div className="underline-star"></div>
        </h1>
        {sections.map(
          (
            { title, description, image, reverse, aosDelay, icon, bulletIcons },
            index
          ) => (
            <div
              key={index}
              data-aos-delay={aosDelay}
              className={`flex flex-col md:flex-row ${
                reverse ? "md:flex-row-reverse" : ""
              } items-center gap-8 mt-12 py-4 md:mb-16 relative`}
            >
              {/* Full-Page Vertical Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-[2px] h-full bg-gray-400"></div>

              {/* Circular Indicator at Title Position */}
              <div className="absolute left-1 md:left-1/2 transform md:-translate-x-1/2  -translate-y-1/2 top-11 w-6 h-6 flex items-center justify-center bg-gray-300 dark:bg-gray-600 rounded-full">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>

              {/* Image + Title Section */}
              <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col items-center relative">
                {/* Title and Icon Above Image */}
                <div className="flex items-center justify-start gap-3 mb-4 relative">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full text-xl font-bold">
                    <FontAwesomeIcon icon={icon} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gradient text-primary">
                    {title}
                  </h2>
                </div>

                {/* Image */}
                <img
                  data-aos={reverse ? "fade-up-left" : "fade-down-right"}
                  src={image}
                  alt="Trading Image"
                  className="w-[18rem] h-[18rem] md:w-[30rem] md:h-[26rem] lg:w-[32rem] lg:h-[28rem] xl:w-[29rem] xl:h-[25rem] rounded-xl shadow-lg object-cover"
                />
              </div>

              {/* Text Section */}
              <div
                data-aos="zoom-out"
                className="w-full md:w-1/2 flex flex-col items-center md:items-start text-left"
              >
                <ul className="list-none text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {description.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex flex-col items-start gap-3 mb-3 ml-8 md:ml-0 md:max-w-screen-md"
                    >
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon
                          icon={bulletIcons[idx]}
                          className="text-blue-500 mt-1 flex-shrink-0"
                        />
                        <span className="text-left">{point}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ServicePage;