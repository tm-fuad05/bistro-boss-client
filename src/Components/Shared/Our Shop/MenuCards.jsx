import React from "react";
import MenuCard from "./MenuCard";

const MenuCards = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item) => (
        <MenuCard item={item}></MenuCard>
      ))}
    </div>
  );
};

export default MenuCards;
