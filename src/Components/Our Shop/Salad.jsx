import React from "react";
import useMenu from "../../hooks/useMenu";
import MenuCards from "../Shared/Our Shop/MenuCards";

const Salad = () => {
  const { menu, loading } = useMenu();
  const items = menu.filter((item) => item.category === "salad");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <MenuCards items={items}></MenuCards>
    </div>
  );
};

export default Salad;
