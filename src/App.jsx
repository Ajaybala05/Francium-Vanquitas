import React, { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Loading from "./components/Loading.jsx";
 // Import the Loading component


// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandsLogo from "./components/BrandsLogo/BrandsLogo.jsx";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import BlogsComp from "./components/Blogs/BlogsComp.jsx";
import Footer from "./components/Footer/Footer";
import ServicePage from "./components/ServicePage/ServicePage";
import RiskAnalyze from "./components/RiskAnalyze/RiskAnalyze";
import Contact from "./components/Contact/Contact";
import Blogpage from "./components/Blogpage/Blogpage";
import Investment from "./components/Investment/Investment";



const App = () => {
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // Simulate application loading
    setTimeout(() => {
      setLoading(false); // Set loading to false after all components are loaded
    }, 2000); // Simulate a 2-second delay

    // Initialize AOS (only once when the component mounts)
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []); // Empty dependency array to run only once when the component mounts

  if (loading) {
    return <Loading />; // Show loading spinner while the app is loading
  }
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Router>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutUs />
                <BrandsLogo />
                <Services />
                {/* <BlogsComp /> */}
                <Footer />
              </>
            }
          />

          {/* Services Page */}
          <Route
            path="/services"
            element={
              <>
                <ServicePage />
                <Footer />
              </>
            }
          />

          {/* Risk Analyze Page */}
          <Route
            path="/riskAnalyze"
            element={
              <>
                <RiskAnalyze />
                <Footer />
              </>
            }
          />
    
        {/* Contact Page */}
        <Route
            path="/Contact"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          />
          {/* Blog Page */}
        <Route
            path="/Blogpage"
            element={
              <>
                <Blogpage />
                <Footer />
              </>
            }
          />
          <Route  
            path="/investment"
            element={
              <>
              <Investment/>
              <Footer/>
              </>
            }
          />
          
        </Routes>

      </Router>
    </div>
  );
};

export default App;
