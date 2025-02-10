import React from "react";
import img1 from "../../assets/ServicePage/trade1.jpg";
import img2 from "../../assets/ServicePage/team2.jpg";
import img3 from "../../assets/ServicePage/team4.jpg";
import img4 from "../../assets/ServicePage/trade4.jpg";
import img5 from "../../assets/ServicePage/service1.jpg";
import Investimage1 from "../../assets/ServicePage/Investimage1.jpg";
import Investimage2 from "../../assets/ServicePage/Investimage2.jpg";
import Investimage3 from "../../assets/ServicePage/Investimage3.jpg";
import Investimage4 from "../../assets/ServicePage/Investimage4.jpg";

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
    title: "Premium Hedge Fund Services for High Networth Individuals",
    description: [
      "At Francium Vanquitas, we provide wealth management services with flexibility to High Networth Individuals (HNIs) & Very-High Networth Individuals (VHNIs) through Hedge fund management services.",
      "We do not charge any management fees for the capital invested in Francium Vanquitas; instead, we operate on a profit-sharing model.",
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
      "We also offer our extended services to Retail investors who are seeking a reliable and professional investment firm to provide average monthly returns for their invested capital.",
      "At Francium Vanquitas, we understand the value of investors' hard-earned money and our responsibility to fulfill their dreams of making good returns in volatile markets. It is our primary job to make consistent profits in this financial market.",
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
      "In the financial market, the usage of Cryptocurrency payments is increasing rapidly over the past few years, and it is expected that Cryptocurrency payment systems might overtake traditional Fiat currency payment systems within the next two decades.",
      "Hence, we are prioritizing Crypto markets to create wealth and long-term business opportunities. We are in the business of buying and selling stable coins like USDT (Tether) on the Binance platform using P2P gateways to ensure safe transactions.",
      "Since crypto payment systems are decentralized by nature, the crime ratio is also very high in this segment. Hence, we have developed very strong and reliable partners for buying and selling USDT.",
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
      "Francium Vanquitas clients can enjoy access to a wide range of trading avenues, like Forex/CFD Market, Commodities, Energy Sectors, and traditional crypto markets through a single window of our systematic fund management portfolios.",
      "On top of it, we create 'WOW' moments for our clients with the help of our dedicated financial management team, which delivers unparalleled response & flexibility. We have built our team with well-experienced professionals who actively work and monitor the growth of investors' capital amounts.",
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