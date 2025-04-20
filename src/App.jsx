import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "./components/Loading.jsx";
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
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutUs />
              <BrandsLogo />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <ServicePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/riskAnalyze"
          element={
            <>
              <RiskAnalyze />
              <Footer />
            </>
          }
        />
        <Route
          path="/Contact"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />
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
              <Investment />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);