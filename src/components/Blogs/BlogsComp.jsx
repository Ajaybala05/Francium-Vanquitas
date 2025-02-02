import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/trade1.jpg";
import Img2 from "../../assets/blog/trade2.jpg";
import Img3 from "../../assets/blog/trade3.jpg";
import { Link } from "react-router-dom";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Mastering Market Trends",
    description:
      "Stay ahead in trading with our in-depth analysis of market trends and forecasts.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    title: "Risk Management Strategies",
    description: "Learn how to minimize losses and maximize gains through smart risk management.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: Img3,
    title: "Building a Strong Portfolio",
    description: "Understand diversification techniques to build a strong and resilient portfolio.",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div id="blog" className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
          <Link to="/Blogpage">
            <button className="primary-btn">View All Posts</button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
