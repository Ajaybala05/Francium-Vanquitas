import React, { useEffect, useRef } from "react";
import img1 from "../../assets/testimonal/img3.jpg";
import img2 from "../../assets/testimonal/img4.jpg";

const Testimonial = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      console.log("Text height:", textRef.current.clientHeight);
    }
  }, []);

  return (
    <div id="AboutUs" className="bg-gray-100 dark:bg-black dark:text-white py-12">
      <div className="container mx-auto px-6 py-10 md:px-0 lg:px-8 xl:px-[85px]">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-3xl lg:text-4xl font-bold text-violet-950 dark:text-white"
          >
            About us
          </h1>
          <p
            data-aos="fade-up"
            className="text-gray-600 dark:text-gray-400 text-sm mt-2"
          >
            We are committed to helping investors achieve their financial goals.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left Side: Images */}
          <div className="relative w-full md:w-1/2 flex justify-start order-1 mb-12 sm:mb-0">
            {/* First Image (Full Cover) */}
            <div className="relative w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] md:h-[400px] md:w-[300px] lg:h-[450px] lg:w-[400px] lg:top-[80px] xl:h-[450px] xl:w-[500px] xl:top-0 rounded-lg overflow-hidden shadow-lg">
              <img
                src={img1}
                alt="About Us"
                className="w-full h-full object-cover rounded-lg"
                data-aos="zoom-out"
              />
            </div>

            {/* Second Image (Overlapping) */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[60%] top-[200px] sm:h-[65%] sm:w-[55%] sm:top-[300px] md:w-[58%] md:h-[70%] md:top-[300px] lg:w-[65%] lg:h-[60%] lg:top-[350px] xl:w-[62%] xl:h-[65%] xl:top-[250px] border-4 border-white dark:border-gray-900 shadow-xl rounded-lg">
              <img
                src={img2}
                alt="About Us"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div
            data-aos="zoom-in"
            ref={textRef}
            className="w-full md:w-1/2 py-12 sm:py-[120px] md:py-0 flex flex-col gap-6 text-left order-2"
            style={{ lineHeight: 1.2 }}
          >
            <h2 className="text-lg text-gray-600 dark:text-white">About</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-white">
              Francium Vanquitas
            </h1>
            <div className="text-gray-600 dark:text-gray-400" style={{ lineHeight: 1.5 }}>
              <p>
                We are on a clear mission to position ourselves as a “Highly wanted” Hedge Fund company in this global financial industry.  
                <br /><br />
                With more than a decade of experience and a deep understanding of the financial industry, especially in the Forex market, we offer a unique range of services to investors to improve their wealth consistently.
                <br /><br />
                Our strong technical team specializes in FX market analysis, generating consistent profits by exploiting currency fluctuations in the world’s largest liquid market.
                <br /><br />
                Over the years, we have developed strong strategies in both technical and fundamental analysis, rigorously back-tested for success. Additionally, we have expertise in risk management, leverage usage, and hedging.
                <br /><br />
                “We are relentlessly working to establish ourselves as one of the greatest hedge fund companies in the financial industry.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;