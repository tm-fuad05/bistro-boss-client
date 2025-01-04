import React from "react";
import useMenu from "../../hooks/useMenu";
import MenuCard from "../Shared/Our Shop/MenuCard";
import MenuCards from "../Shared/Our Shop/MenuCards";

const Soups = () => {
  const { menu, loading } = useMenu();
  const items = menu.filter((item) => item.category === "soup");

  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      <MenuCards items={items}></MenuCards>
    </div>
  );
};

export default Soups;
