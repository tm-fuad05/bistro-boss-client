import React from "react";

const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="w-fit mx-auto space-y-3">
      <p className="text-yellow-500 italic capitalize text-center">
        {subtitle}
      </p>
      <h2 className="uppercase text-2xl lg:text-3xl text-center font-bold py-2  border-t-[3px] border-b-[3px]">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
