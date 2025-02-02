import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "../../assets/blog/blog1.jpg";
import img2 from "../../assets/blog/blog2.jpg";
import img3 from "../../assets/blog/blog3.jpg";
import blog1 from "../../assets/blog/blog123.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const blogs = [
  {
    id: 1,
    title: "Mastering Market Trends",
    description:
      "Stay ahead in trading with our in-depth analysis of market trends and forecasts.",
    detailedText:
      "Market trends are an essential part of trading. By understanding market dynamics, you can predict future movements and make more informed decisions. Our experts provide real-time insights into global financial markets, giving you a competitive edge.",
    image: img1,
  },
  {
    id: 2,
    title: "Risk Management Strategies",
    description:
      "Learn how to minimize losses and maximize gains through smart risk management.",
    detailedText:
      "Effective risk management strategies are key to long-term success in trading. We cover various techniques, from diversification to setting stop-loss orders, to help you reduce potential losses while optimizing your portfolio’s performance.",
    image: img2,
  },
  {
    id: 3,
    title: "Building a Strong Portfolio",
    description:
      "Understand diversification techniques to build a strong and resilient portfolio.",
    detailedText:
      "Building a strong portfolio is not just about picking high-performing assets. It’s about balancing risk and reward. Our experts explain diversification techniques that allow you to minimize risk while maximizing returns in your investment strategy.",
    image: img3,
  },
];

const BlogPage = () => {
  const [oldMessages, setOldMessages] = useState([]);
  const [expandedMessage, setExpandedMessage] = useState(null); // Track expanded message
  const [expandedCarousel, setExpandedCarousel] = useState(null); // Track expanded carousel item
  
  useEffect(() => {
    const interval = setInterval(() => {
      setOldMessages((prev) => {
        if (prev.length === blogs.length) return prev;
        return [blogs[prev.length], ...prev];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleExpandedMessage = (blogId) => {
    setExpandedMessage(expandedMessage === blogId ? null : blogId);
  };

  const toggleExpandedCarousel = (blogId) => {
    setExpandedCarousel(expandedCarousel === blogId ? null : blogId);
  };

  return (
    <div>
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src={blog1}
          alt="Services Header"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center p-5">
          <h1 className="text-6xl font-bold text-gray-400">Explore Our Blogs</h1>
          <p className="text-xl text-gray-200 mt-4 mb-6">Get key insights from our pages blog.</p>
          <a
            href="#services"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Blog Section */}
      <div>
        <h1 className="text-3xl font-bold flex justify-center items-center mt-12">
          <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-full text-xl font-bold mr-2">
            <FontAwesomeIcon icon={faMessage} className="text-white" />
          </div>
          Daily Inputs
        </h1>
      </div>
      <h1 className="ml-12 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold mt-8">
        Key Insights
      </h1>
      <div className="flex flex-col md:flex-row gap-8 p-10">
        {/* Active Blog Carousel (2/3 space) */}
        <div className="w-full md:w-2/3">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="w-full h-[480px]"
          >
            {blogs.map(({ id, title, description, image, detailedText }) => (
              <SwiperSlide key={id}>
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
                    <h2
                      className="text-2xl font-bold cursor-pointer"
                      onClick={() => toggleExpandedCarousel(id)}
                    >
                      {title}
                    </h2>
                    <p className="mt-2 text-lg">{description}</p>
                    {expandedCarousel === id && (
                      <p className="mt-4 text-lg text-white">{detailedText}</p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Old Messages (1/3 space) */}
        <div className="w-full h-full md:w-1/3 bg-gray-100 dark:bg-gray-900 p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Old Messages</h2>
          <div className="space-y-4">
            {oldMessages.map((blog, index) => (
              <div
                key={index}
                className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow"
              >
                <h3
                  className="font-semibold cursor-pointer"
                  onClick={() => toggleExpandedMessage(blog.id)}
                >
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {blog.description}
                </p>
                {expandedMessage === blog.id && (
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    {blog.detailedText}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
