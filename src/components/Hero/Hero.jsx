import React from "react";
import yellowCar from "../../assets/website/HeoStock.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div id="about" className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[640px] sm:h-[400px] md:max-w-[868px] md:h-[400px] object-cover lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1300px] rounded-3xl"/>
              <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm "><FontAwesomeIcon icon={faArrowTrendUp} /> Projects</p>
              <h1 className="font-bold">
                50+ <span className="font-normal">Success</span>
              </h1>
            </div>
          </div>
          

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Unlocking Your Trading Potential,{" "}
              <span className="text-primary">One Startegey at a time</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" >
            “In the midst of chaos, there is also opportunity.” – Sun Tzu, The Art of War
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              Learn More
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
