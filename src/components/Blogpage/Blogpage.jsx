import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faChartLine, faCoins, faUser, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import blog1 from "../../assets/blog/blog123.jpg";

// Separate data for left content (featured articles)
const articlesData = [
  {
    id: 1,
    title: "Advanced Trading Techniques",
    category: "Market Analysis",
    author: "Financial Experts Team",
    content: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      "Our latest research reveals three key indicators that consistently predict market movements. These include volume analysis, price action patterns, and macroeconomic factors that influence market trends.",
      "Learn how to combine fundamental and technical analysis for better trade decisions. We explore case studies showing successful integration of both approaches in volatile markets."
    ],
    stats: {
      readers: "15K+",
      duration: "8 min read"
    }
  },
  {
    id: 2,
    title: "Cryptocurrency Fundamentals",
    category: "Digital Assets",
    author: "Blockchain Specialist",
    content: [
      "Demystifying blockchain technology and its impact on modern finance. Understand the underlying technology powering cryptocurrencies and its potential applications beyond digital currencies.",
      "How to evaluate cryptocurrency projects: A practical guide for investors. Learn to assess whitepapers, team credentials, and market potential of new crypto projects.",
      "Managing risk in high-volatility digital asset markets. Strategies for position sizing, portfolio diversification, and exit planning in crypto investments."
    ],
    stats: {
      readers: "28K+",
      duration: "10 min read"
    }
  }
];

// Separate data for right content (market updates)
const updatesData = [
  {
    id: 1,
    title: "Market Opens Bullish",
    category: "Market Update",
    content: [
      "Dow Jones gains 150 points in early trading",
      "Tech stocks lead market rally",
      "Energy sector shows volatility"
    ],
    timestamp: "09:45 AM"
  },
  {
    id: 2,
    title: "Crypto Market Update",
    category: "Digital Assets",
    content: [
      "Bitcoin holds steady at $29,000",
      "Ethereum network upgrades completed",
      "NFT market shows increased activity"
    ],
    timestamp: "10:15 AM"
  },
  {
    id: 3,
    title: "Commodities Report",
    category: "Commodities",
    content: [
      "Gold prices rise on safe-haven demand",
      "Oil prices fluctuate amid supply concerns",
      "Agricultural commodities show mixed results"
    ],
    timestamp: "11:00 AM"
  }
];

const BlogPage = () => {
  const [oldMessages, setOldMessages] = useState([]);
  const [expandedMessage, setExpandedMessage] = useState(null);
  const [activePost] = useState(articlesData[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOldMessages((prev) => {
        if (prev.length === updatesData.length) return prev;
        return [updatesData[prev.length], ...prev];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleExpandedMessage = (postId) => {
    setExpandedMessage(expandedMessage === postId ? null : postId);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src={blog1}
          alt="Blog Header"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center p-5">
          <h1 className="text-6xl font-bold text-white">Trading Insights Hub</h1>
          <p className="text-xl text-gray-200 mt-4 mb-6">
            Expert analysis and market intelligence
          </p>
          <a
            href="#blog"
            className="bg-[#6153CD] hover:bg-[#5147B8] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Explore Insights
          </a>
        </div>
      </div>

      {/* Blog Section */}
      <div className="container mx-auto">
        <h1 id="blog" className="text-3xl font-bold flex justify-center items-center mt-12">
          <div className="w-10 h-10 flex items-center justify-center bg-[#6153CD] rounded-full mr-2">
            <FontAwesomeIcon icon={faMessage} className="text-white text-lg" />
          </div>
          Market Intelligence Feed
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
          {/* Left Section - Featured Articles */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl hover:transform hover:scale-[1.005] transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#6153CD] to-[#8579E6] rounded-lg flex items-center justify-center mr-4">
                  <FontAwesomeIcon 
                    icon={faBookOpen} 
                    className="text-white text-xl" 
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Featured Analysis
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    In-depth market breakdown
                  </p>
                </div>
              </div>
              
              <article className="prose dark:prose-invert max-w-none">
                <h3 className="text-2xl font-semibold mb-6 text-[#6153CD]">
                  {activePost.title}
                </h3>
                <div className="border-l-4 border-[#6153CD] pl-6 ml-4 space-y-6">
                  {activePost.content.map((paragraph, index) => (
                    <p 
                      key={index}
                      className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>

              <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-500">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    <span>{activePost.author}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <FontAwesomeIcon icon={faCoins} className="mr-2" />
                    <span>{activePost.stats.readers} readers</span>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                  <span className="text-gray-600 dark:text-gray-300">
                    📖 {activePost.stats.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Market Updates */}
          <div className="md:col-span-1 self-start sticky top-6">
            <div className="w-full bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                <FontAwesomeIcon 
                  icon={faChartLine} 
                  className="mr-2 text-[#6153CD]" 
                />
                Live Market Updates
              </h2>
              <div className="space-y-4 max-h-[80vh] overflow-y-auto">
                {oldMessages.map((post, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#6153CD] rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3
                          className="font-semibold cursor-pointer text-gray-800 dark:text-white"
                          onClick={() => toggleExpandedMessage(post.id)}
                        >
                          {post.title}
                          <span className="block text-xs text-[#6153CD] mt-1">
                            {post.timestamp} • {post.category}
                          </span>
                        </h3>
                        {expandedMessage === post.id && (
                          <div className="mt-4 space-y-2">
                            {post.content.map((item, idx) => (
                              <p 
                                key={idx}
                                className="text-sm text-gray-600 dark:text-gray-400"
                              >
                                ➤ {item}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;