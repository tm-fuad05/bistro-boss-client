import React from "react";

const Button = ({ name, bgColor, textColor }) => {
  return (
    <button
      className={`relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md group uppercase `}
    >
      <span
        className={`absolute inset-0 w-full h-full mt-1 transition-all duration-300 ease-in-out bg-${bgColor} rounded-md group-hover:mt-0 `}
      ></span>
      <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-yellow-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
      <span
        className={`relative text-${textColor} transition-colors duration-200 ease-in-out delay-100 group-hover:text-white `}
      >
        {name}
      </span>
    </button>
  );
};

export default Button;
