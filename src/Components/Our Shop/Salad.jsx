import React from "react";
import useMenu from "../../hooks/useMenu";
import MenuCards from "../Shared/Our Shop/MenuCards";

const Salad = () => {
  const { menu, loading } = useMenu();
  const items = menu.filter((item) => item.category === "salad");

  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      <MenuCards items={items}></MenuCards>
    </div>
  );
};

export default Salad;
