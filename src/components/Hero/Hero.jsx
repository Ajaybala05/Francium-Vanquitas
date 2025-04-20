import React from "react";
import yellowCar from "../../assets/website/img1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


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
          </div>
          

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl text-primary sm:text-4xl md:text-5xl lg:text-5xl font-semibold"
              style={{ lineHeight: 1 ,fontFamily: '"Libre Baskerville", serif'}}
            >
              Francium Vanquitas{" "}
            </h1>
            <br></br><span className="text-2xl font-bold">
  A Premium Hedge fund Institution, focused on
  <span className="hidden xl:inline"> <br /> </span> currency market
</span>

            <p data-aos="fade-up" data-aos-delay="200" >
            “In the midst of chaos, there is also opportunity.” – Sun Tzu, The Art of War
            </p>
            <button className="relative overflow-hidden bg-[#6153CD] text-[#FFF8E5] font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#5147B8] focus:outline-none">
            <span className="z-10 relative">
            <Link to="/#AboutUs">Learn more</Link>
            </span>
            <span className="absolute inset-0 bg-[#FFF8E5] opacity-0 rounded-full transition duration-500 ease-out hover:opacity-10"></span>
          </button>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
