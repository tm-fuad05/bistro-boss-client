import React from "react";

const MenuSectionShared = ({ title, des, price, img }) => {
  return (
    <div className="flex gap-3 ">
      <figure className="w-20 h-16 flex-grow">
        <img
          className="w-full h-full rounded-full rounded-tl-none border-2 object-cover border-yellow-600 p-[2px]"
          src={img}
          alt=""
        />
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
