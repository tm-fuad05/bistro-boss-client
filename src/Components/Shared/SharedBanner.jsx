import React from "react";

const SharedBanner = ({ title, subtitle, banner }) => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="font-cinzel text-white text-center space-y-4 bg-black lg:px-72 lg:py-36 md:p-24 p-16 bg-opacity-60">
        <h1 className="text-4xl lg:text-6xl uppercase">{title}</h1>
        <p className="uppercase">{subtitle}</p>
      </div>
    </div>
  );
};

export default SharedBanner;
