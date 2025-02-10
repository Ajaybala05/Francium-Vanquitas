import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faChartLine, faCoins, faShieldAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import blog1 from "../../assets/blog/blog123.jpg";

const blogs = [
  {
    id: 1,
    title: "Mastering Market Trends",
    description:
      "Stay ahead in trading with our in-depth analysis of market trends and forecasts.",
    detailedText:
      "Market trends are an essential part of trading. By understanding market dynamics, you can predict future movements and make more informed decisions. Our experts provide real-time insights into global financial markets, giving you a competitive edge.",
    image: "img1",
  },
  {
    id: 2,
    title: "Risk Management Strategies",
    description:
      "Learn how to minimize losses and maximize gains through smart risk management.",
    detailedText:
      "Effective risk management strategies are key to long-term success in trading. We cover various techniques, from diversification to setting stop-loss orders, to help you reduce potential losses while optimizing your portfolio’s performance.",
    image: "img2",
  },
  {
    id: 3,
    title: "Building a Strong Portfolio",
    description:
      "Understand diversification techniques to build a strong and resilient portfolio.",
    detailedText:
      "Building a strong portfolio is not just about picking high-performing assets. It’s about balancing risk and reward. Our experts explain diversification techniques that allow you to minimize risk while maximizing returns in your investment strategy.",
    image: "img3",
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
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src={blog1}
          alt="Services Header"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center p-5">
          <h1 className="text-6xl font-bold text-white">Explore Our Blogs</h1>
          <p className="text-xl text-gray-200 mt-4 mb-6">
            Get key insights from our pages blog.
          </p>
          <a
            href="#blog"
            className="bg-[#6153CD] hover:bg-[#5147B8] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            View Post
          </a>
        </div>
      </div>

      {/* Blog Section */}
      <div>
        <h1
          id="blog"
          className="text-3xl font-bold flex justify-center items-center mt-12"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-green-900 rounded-full text-xl font-bold mr-2">
            <FontAwesomeIcon icon={faMessage} className="text-white" />
          </div>
          Daily Inputs
        </h1>
      </div>
      <h1 className="ml-12 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold mt-8">
        Key Insights
      </h1>
      <div className="flex flex-col md:flex-row gap-8 p-10">
        {/* Trade Card Design (2/3 space) */}
        <div className="w-full md:w-2/3  dark:text-white">
          <div
            className="relative w-full h-[480px] rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800"
           
          >
            {/* Trade Card Content */}
            <div className="flex flex-col items-start justify-start p-8 space-y-6">
              {/* Performance Metrics */}
              <div className="text-center w-full">
                <h3 className="text-3xl font-bold">Trade Profit Post</h3>
                <p className="text-6xl font-bold text-teal-600 mt-4">$100,000</p>
                <p className="text-sm text-gray-600 dark:text-white mt-2">
                  Starting Payout
                </p>
              </div>

              {/* Trader Information */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faUser} className="text-gray-600" />
                  <p className="text-xl font-semibold">Ajay</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Funded Since: January 2020
                </p>
              </div>

              {/* Trading Strategies */}
              <div className="w-full">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faChartLine} className="text-gray-600" />
                  <p className="text-xl font-semibold">Trading Strategy: AAA</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Instruments: Forex, Crypto
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  profit: Best
                </p>
              </div>

              {/* Risk Management */}
              <div className="w-full">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-gray-600" />
                  <p className="text-xl font-semibold">Risk Management</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Max Drawdown: 5%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Risk-Reward Ratio: 1:2
                </p>
              </div>

              {/* Additional Insights */}
              <div className="w-full">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCoins} className="text-gray-600" />
                  <p className="text-xl font-semibold">Key Achievements</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  - Achieved 30% annual returns for 3 consecutive years.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  - Successfully managed a $1M portfolio with minimal drawdowns.
                </p>
              </div>
            </div>
          </div>
        </div>

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
