import React from "react";
import MenuCards from "../Shared/Our Shop/MenuCards";
import useMenu from "../../hooks/useMenu";

const Drinks = () => {
  const { menu, loading } = useMenu();
  const items = menu.filter((item) => item.category === "drinks");

  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      <MenuCards items={items}></MenuCards>
    </div>
  );
};

export default Drinks;
