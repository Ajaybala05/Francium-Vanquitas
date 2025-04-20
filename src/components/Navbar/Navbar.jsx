import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/logo.png";
import { FaChevronDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

export const MenuLinks = [
  { id: 1, name: "About us", link: "/" },
  { id: 2, name: "Services", link: "/services" },
  { id: 3, name: "Risk Management", link: "/riskAnalyze" },
  { id: 4, name: "Investment", link: "/investment", dropdown: [{ name: "Insights", link: "/Blogpage" }] },
  { id: 5, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <Link to="/#about" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Logo"
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
            <span
              className="text-xl sm:text-2xl lg:text-3xl font-semibold"
              style={{ fontFamily: "sans-serif" }}
            >
              <span className="block md:hidden lg:block xl:block">Francium Vanquitas</span>
                <span className="hidden md:block lg:hidden xl:hidden">
                  Francium
                  <br />
                  Vanquitas
                </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-4 lg:gap-6">
            <ul className="flex items-center gap-2 md:gap-2 lg:gap-6">
              {MenuLinks.map(({ id, name, link, dropdown }) => (
                <li key={id} className="relative py-2 md:py-3">
                  {dropdown ? (
                    <div className="relative cursor-pointer flex items-center gap-1">
                      <Link
                        to={link}
                        className="text-sm md:text-base lg:text-lg font-medium hover:text-primary transition-colors duration-500"
                      >
                        <span className="md:hidden">{name}</span>
                        <span className="hidden md:inline">{name === "About us" ? "About" : name}</span>
                      </Link>
                      <FaChevronDown
                        className={`transition-transform ${showDropdown ? "rotate-180" : "rotate-0"}`}
                        onClick={toggleDropdown}
                      />
                      {showDropdown && (
                        <ul className="absolute top-full left-0 bg-white dark:bg-gray-900 shadow-lg rounded-md mt-2 w-44">
                          {dropdown.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={item.link}
                                className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link}
                      className="text-sm md:text-base lg:text-lg font-medium hover:text-primary transition-colors duration-500"
                    >
                      {name}
                    </Link>
                  )}
                </li>
              ))}
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;