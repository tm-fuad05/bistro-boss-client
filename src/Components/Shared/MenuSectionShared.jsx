import React from "react";

const MenuSectionShared = ({ title, des, price, img }) => {
  return (
    <div className="flex gap-3 items-center">
      <figure className="w-20 h-16 bg-gray-300 rounded-full rounded-tl-none">
        <img src={img} alt="" />
      </figure>
      <div className="space-y-1">
        <div className="flex justify-between">
          <h4 className="font-cinzel font-medium uppercasel text-lg lg:text-xl">
            {title}
          </h4>
          <span className="text-yellow-600">{price}</span>
        </div>
        <p className="text-gray-600 pr-5">{des}</p>
      </div>
    </div>
  );
};

export default MenuSectionShared;
