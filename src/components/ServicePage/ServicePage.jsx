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
  faHandshake, faShieldAlt, faCogs, faCoins,
  faChartLine, faExchangeAlt, faBank,
  faGlobe, faMoneyBillWave
} from "@fortawesome/free-solid-svg-icons";
import "./ServicePage.css";

const sections = [
  {
    title: "Specialized Currency Focus",
    intro: "Understanding niche currencies for strategic investment.",
    description: [
      "Specialized currencies hold significance in specific markets, requiring in-depth analysis.",
      "Safe-haven currencies like CHF, SGD remain stable during uncertainty.",
      "Macroeconomic and geopolitical events impact these currency values."
    ],
    image: img1,
    reverse: false,
    aosDelay: "100",
    icon: faChartLine,
    bulletIcons: [faCoins, faChartLine, faExchangeAlt],
  },
  {
    title: "Macroeconomic Analysis",
    intro: "Examining economic trends for currency insights.",
    description: [
      "GDP, inflation, and employment shape financial markets.",
      "Interest rates, CPI, and global policies influence currency movements.",
      "Economic shifts and global events impact currency valuations."
    ],
    image: img2,
    reverse: true,
    aosDelay: "150",
    icon: faHandshake,
    bulletIcons: [faGlobe, faChartLine, faMoneyBillWave],
  },
  {
    title: "Liquidity Assessments",
    intro: "Measuring market liquidity for effective trading.",
    description: [
      "Liquidity determines trade ease and market stability.",
      "Major currencies like USD, EUR exhibit high liquidity.",
      "Low liquidity can lead to high volatility in uncertain markets."
    ],
    image: img3,
    reverse: false,
    aosDelay: "200",
    icon: faShieldAlt,
    bulletIcons: [faShieldAlt, faBank, faExchangeAlt],
  },
  {
    title: "Central Bank Policies",
    intro: "Understanding monetary policies and their influence.",
    description: [
      "Interest rate changes affect currency strength and investor behavior.",
      "Market participants track central bank strategies to predict trends.",
      "Monetary policies help regulate inflation and economic growth."
    ],
    image: img4,
    reverse: true,
    aosDelay: "300",
    icon: faCogs,
    bulletIcons: [faCoins, faChartLine, faMoneyBillWave],
  },
];
const keyInvestment=[
  {
    title:"Traget Fundraise",
    description:"Our target fundraising range is set between $1 million and $50 million, We aim to engage a diverse group of donors to achieve these ambitious goals.,",
    image:Investimage1,
    aosDelay:100,

  },
  {
    title:"MoM Returns",
    description:"Your investment will generate a consistent return of 4% on a month-to-month basis, This steady return allows you to plan and achieve your financial goals with confidence.",
    image:Investimage2,
    aosDelay:200,

  },
  {
    title:"Value yield",
    description:"An investment of $1,000,000 yields a profit share of $40,000,  This opportunity allows you to benefit from substantial earnings while contributing to our growth.",
    image:Investimage3,
    aosDelay:300,


  },
  {
    title:"No Management fee",
    description:"We maintain a transparent approach by not charging any management fees, This commitment to transparency builds trust and aligns our interests with yours.",
    image:Investimage4,
    aosDelay:400,


  },

]

const ServicePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        <img src={img5} alt="Services Header" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center p-5">
          <h1 className="text-6xl font-bold text-white mb-2">Explore Our Services</h1>
          <p className="text-xl text-gray-400 mb-6">Unlock your business potential.</p>
          <a href="#services" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">View Services</a>
        </div>
      </div>

      {/* Service Sections */}
      <div id="services" className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-10 px-5 md:px-20">
        <h1 data-aos="fade-up" data-aos-duration="500" className="text-4xl font-bold text-center mt-12 relative">
          Our Services
          <div className="underline-star"></div>
        </h1>
        {sections.map(({ title, intro, description, image, reverse, aosDelay, icon, bulletIcons }, index) => (
          <div key={index} data-aos-delay={aosDelay} className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-8 mt-12 py-4 md:mb-16`}>
            {/* Image Section */}
            <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center">
              <img  data-aos={reverse ? "fade-up-left" : "fade-down-right"} src={image} alt={title} className="w-[32rem] h-[22rem] md:w-[30rem] md:h-[26rem] lg:w-[32rem] lg:h-[28rem] xl:w-[34rem] xl:h-[30rem] rounded-xl shadow-lg object-cover" />
            </div>
            {/* Text Section */}
            <div data-aos="zoom-out" className="w-full md:w-1/2 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500  rounded-full text-xl font-bold">
                  <FontAwesomeIcon icon={icon} className="text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-gradient">{title}</h2>
              </div>
              <h3 className="text-xl font-medium text-blue-500 mb-2">{intro}</h3>
              <ul className="list-none text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {description.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 mb-3">
                    <FontAwesomeIcon icon={bulletIcons[idx]} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-left">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div>
      <h1
        data-aos="zoom-in"
        data-aos-duration="500"
        className="text-4xl font-bold text-center mt-12 relative"
      >
        Key Investment Terms
        <div className="underline-star"></div>
      </h1>
      <div>
      <div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-4 relative">
  {keyInvestment.map(({ id, image, aosDelay, title, description }, index) => (
    <a
      key={id}
      href="#"
      className={`flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 
        xl:h-[450px] md:h-[400px] sm:h-[350px] h-auto ${index % 2 !== 0 ? "xl:mt-24" : ""}`}
    >
      <img
        className="object-cover w-full rounded-t-lg h-40 md:h-48 lg:h-56 xl:h-60"
        src={image}
        alt="Service"
      />
      <div className="flex flex-col p-4 flex-grow">
        <h5 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          {title}
        </h5>
        <p className="text-sm lg:text-base md:text-base font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </a>
  ))}
</div>

</div>

    </div>
      </div>
    </div>
    </div>
  );
};
export default ServicePage;