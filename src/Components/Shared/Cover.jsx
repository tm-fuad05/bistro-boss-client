import React from "react";
import img from "../../assets/home/chef-service.jpg";

const Cover = ({ title }) => {
  return (
    <div
      className={`bg-cover bg-center h-full min-h-[500px] px-32 text-white flex justify-center items-center`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={`bg-black bg-opacity-60 p-20 text-center space-y-3 `}>
        <h2 className="font-cinzel font-semibold uppercase text-2xl lg:text-3xl ">
          {title}
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          voluptate animi eligendi dolorem nam rem! Iure repellat voluptatum
          obcaecati distinctio ipsum, nesciunt culpa magnam consequuntur
          expedita itaque neque magni minus, fugit optio deserunt voluptas
          suscipit?
        </p>
      </div>
    </div>
  );
};

export default Cover;
