import React from "react";
import Logo from "../assets/website/logo.png"; // Adjust the path as needed

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src={Logo}
        alt="Loading..."
        className="h-[120px] w-[120px] animate-pulse" // Adjust size if needed
      />
    </div>
  );
};

export default Loading;
