import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HashLink } from "react-router-hash-link"; // Import HashLink
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';


const scrollWithOffset = (el) => {
  const yOffset = -80; 
  const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const FooterLinks = [
  {
    title: "About",
    link: "#about", // Use Link for page navigation
  },
  {
    title: "Strategies",
    link: "#strategies", // Use HashLink for section navigation
  },
  {
    title: "Services",
    link: "#services", // Use HashLink for section navigation
  },
  {
    title: "Insights",
    link: "/Blogpage", // Use Link for page navigation
  },
];

const HelpLinks = [
  {
    title: "Contact",
    link: "/contact#contact-form", // Use HashLink to scroll to a specific section on the contact page
  },
  {
    title: "Terms & Conditions",
    link: "#terms", // Use HashLink for section navigation
  },
  {
    title: "Privacy Policy",
    link: "#policy", // Use HashLink for section navigation
  },
];



const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Francium vanquitas
            </h1>
            <p className="text-sm">
            Francium Vanquitas is a dynamic company specializing in innovative solutions within the financial sector,
             particularly focusing on macroeconomic trends and currency markets.{" "}
            </p>
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Company
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                    >
                      {link.link.startsWith("/") ? (
                        <Link to={link.link}>{link.title}</Link> // Use Link for page navigation
                      ) : (
                        <HashLink to={link.link}>{link.title}</HashLink> // Use HashLink for section navigation
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Help
                </h1>
                <ul className="flex flex-col gap-3">
                  {HelpLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                    >
                      {link.link.startsWith("/") ? (
                        <HashLink to={link.link}>{link.title}</HashLink> // Use HashLink for section navigation on another page
                      ) : (
                        <HashLink to={link.link}>{link.title}</HashLink> // Use HashLink for section navigation
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8  h-full">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left mt-8">
                <FontAwesomeIcon icon={faCopyright} /> Francium vanquitas 2025
                </h1>
                <p>info@franciumvanquitas.com<br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;