import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";

const FromOurMenu = () => {
  const [fromOurMenu, setFromOurMenu] = useState([]);

  useEffect(() => {
    fetch("../fromourmenu.json")
      .then((res) => res.json())
      .then((data) => setFromOurMenu(data));
  }, []);
  console.log(fromOurMenu);

  return (
    <div className="w-11/12 mx-auto my-10">
      <SectionTitle
        subtitle={"---check it out---"}
        title={"from our menu"}
      ></SectionTitle>
      <section className="my-20 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3">
        {fromOurMenu.map((menu, idx) => (
          <div key={idx} className="flex gap-3 items-center">
            <figure className="w-16 h-16 bg-gray-300 rounded-full rounded-tl-none"></figure>
            <div className="space-y-1">
              <div className="flex justify-between">
                <h4 className="font-cinzel font-medium uppercasel text-lg lg:text-xl">
                  {menu.name}
                </h4>
                <span className="text-yellow-600">{menu.price}</span>
              </div>
              <p className="text-gray-600 pr-5">{menu.description}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="w-fit mx-auto">
        <button className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium  text-white bg-gray-800 rounded-md group ">
          <span className="absolute inset-0 w-full h-full mt-1 transition-all duration-300 ease-in-out bg-gray-500 rounded-md group-hover:mt-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-yellow-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
          <span className="relative text-black transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
            ZenUI Library
          </span>
        </button>
      </div>
    </div>
  );
};

export default FromOurMenu;
