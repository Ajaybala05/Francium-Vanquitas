import React from "react";
import { MenuLinks } from "./Navbar";
import Logo from "../../assets/website/logo.png";// Import your company logo

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);

  // Flatten MenuLinks to include dropdown items separately
  const responsiveMenuLinks = MenuLinks.flatMap(({ name, link, dropdown }) =>
    dropdown ? [{ name, link }, ...dropdown] : [{ name, link }]
  );

  // Remove duplicates
  const uniqueMenuLinks = Array.from(
    new Map(responsiveMenuLinks.map((item) => [item.link, item])).values()
  );

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[50%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        {/* Replace FaUserCircle and "Hello User" with your logo and company name */}
        <div className="flex items-center justify-start gap-3">
          <img
            src={Logo} // Use your company logo here
            alt="Francium Vanquitas Logo"
            className="w-12 h-12 rounded-full" // Adjust size and styling as needed
          />
          <div>
            <h1 className="text-xl font-bold">Francium Vanquitas</h1>
            <h1 className="text-sm text-slate-500">Premium institution</h1>
          </div>
        </div>

        {/* Menu Links */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {uniqueMenuLinks.map(({ name, link }) => (
              <li
                key={name}
                className="hover:text-primary transition-colors duration-500"
              >
                <a href={link} className="mb-5 inline-block">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="footer">
        <h1 className="text-sm text-slate-500">
          © {new Date().getFullYear()} Francium Vanquitas. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;