import React from "react";
import img from "../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div
      className={`bg-cover bg-center h-full w-9/12 mx-auto p-16 mb-20`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-white p-16 text-center space-y-3">
        <h2 className="font-cinzel uppercase text-2xl lg:text-3xl ">
          bistro boss
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

export default BistroBoss;
