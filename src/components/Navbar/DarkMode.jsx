import React, { useEffect, useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; // Default to light mode
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]); // Run only when theme changes

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun onClick={() => setTheme("light")} className="text-2xl cursor-pointer" />
      ) : (
        <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl cursor-pointer" />
      )}
    </>
  );
};

export default DarkMode;
