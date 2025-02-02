import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/Logo2.png";
import DarkMode from "./DarkMode";

export const MenuLinks = [
  {
    id: 1,
    name: "About",
    link: "/#about",
  },
  {
    id: 2,
    name: "Services",
    link: "/services",
  },
  {
    id: 3,
    name: "RiskAnalyze",
    link: "/riskAnalyze",
  },
 
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <Link to="/#about" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Logo"

              className="relative top-[8px] w-[100px] h-[100px]"
            />
            <span
              className="text-2xl sm:text-3xl font-semibold"
              style={{ fontFamily: '"Libre Baskerville", serif' }}
            >
              Francium Vanquitas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center lg:gap-9 sm:gap-5">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <Link to="/contact">
                  <button className="primary-btn">Get in Touch</button>
              </Link>
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
