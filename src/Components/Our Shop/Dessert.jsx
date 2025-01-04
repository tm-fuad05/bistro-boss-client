import React from "react";
import useMenu from "../../hooks/useMenu";
import MenuCards from "../Shared/Our Shop/MenuCards";

const Dessert = () => {
  const { menu, loading } = useMenu();
  const items = menu.filter((item) => item.category === "dessert");

  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      <MenuCards items={items}></MenuCards>
    </div>
  );
};

export default Dessert;
