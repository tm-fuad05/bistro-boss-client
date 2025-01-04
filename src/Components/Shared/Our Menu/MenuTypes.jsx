import React from "react";
import MenuSectionShared from "../MenuSectionShared";
import Button from "../Button";
import { Link } from "react-router-dom";

const MenuTypes = ({ items, category }) => {
  return (
    <>
      <section className="my-20 grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((menu, idx) => (
          <MenuSectionShared
            key={idx}
            title={menu.name}
            des={menu.recipe}
            price={menu.price}
            img={menu.image}
          ></MenuSectionShared>
        ))}
      </section>
      <Link to={`/our-shop/${category}`}>
        <div className="w-fit mx-auto">
          <Button
            name={"order your favourite food"}
            bgColor={"black"}
            textColor={"black"}
          ></Button>
        </div>
      </Link>
    </>
  );
};

export default MenuTypes;
