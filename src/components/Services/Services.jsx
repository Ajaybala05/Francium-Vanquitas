import React from "react";
import { FaChartLine } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaCoins} from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';

const skillsData = [
  {
    name: "Specialized Currency Focus",
    icon: < FaRegMoneyBillAlt className="text-4xl text-primary" />,
    link: "#",
    description:
      " Francium Vanquitas concetrates exclusively on currency markets to maximize investment oppurtunities.",
    aosDelay: "200",
  },
  {
    name: "In-depth Macroeconomic Analysis",
    icon: < FaChartLine className="text-4xl text-primary" />,
    link: "#",
    description:
      "We leverage comprehensive global macroeconomic analysis to inform our trading strategies.",
    aosDelay: "300",
  },
  {
    name: "Liquidity Assessments",
    icon: <FaCoins className="text-4xl text-primary" />,
    link: "#",
    description:
      "Sophisticated liquidity assessments help in identifying and seizing the market oppurtunities.",
    aosDelay: "500",
  },
  {
    name: "Consistent Superior Returns",
    icon: <FaUndo className="text-4xl text-primary" />,
    link: "#",
    description:
      " Our unique strategy is deseigned in such a way to deliver strong returns in varying market conditions. ",
    aosDelay: "600",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-8 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              data-aos-duration="500"
              className="text-center text-3xl lg:text-4xl font-bold text-violet-950 dark:text-white"
            >
              Our Strengths
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              Collaborate seamlessly and share insights to refine your trading approach
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn"><a href="services">Learn More</a></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
