import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/logo.png";
import DarkMode from "./DarkMode";

export const MenuLinks = [
  { id: 1, name: "About", link: "/" },
  { id: 2, name: "Services", link: "/services" },
  {
    id: 3,
    name: "Risk Management",
    link: "/riskAnalyze",
    dropdown: [
      { id: 31, name: "Investment", link: "/investment" },
      { id: 32, name: "Insights", link: "/Blogpage" },
    ],
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <Link to="/#about" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Logo"
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" // Adjusted logo size for responsiveness
            />
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold" style={{ fontFamily: "sans-serif" }}>
              Francium Vanquitas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-4 lg:gap-6">
            <ul className="flex items-center gap-2 md:gap-4 lg:gap-6">
              {MenuLinks.map(({ id, name, link, dropdown }) => (
                <li key={id} className="relative group py-2 md:py-3">
                  <div className="flex items-center cursor-pointer">
                    <Link
                      to={link}
                      className="text-sm md:text-base lg:text-lg font-medium hover:text-primary transition-colors duration-500"
                    >
                      {name}
                    </Link>
                    {dropdown && (
                      <FaAngleDown
                        className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                        onClick={() => setOpenDropdown(!openDropdown)}
                      />
                    )}
                  </div>

                  {/* Dropdown Menu (Opens on Hover) */}
                  {dropdown && (
                    <ul
                      className={`absolute left-0 top-full w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-300 dark:border-gray-700 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
                    >
                      {dropdown.map(({ id: subId, name, link }) => (
                        <li key={subId}>
                          <Link
                            to={link}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white transition duration-300"
                          >
                            {name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <Link to="/contact">
                <button className="primary-btn text-sm lg:text-base">Get in Touch</button>
              </Link>
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;