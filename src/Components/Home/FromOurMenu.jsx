import React, { useEffect, useState } from "react";

import MenuSectionShared from "../Shared/MenuSectionShared";
import SectionTitle from "../Shared/SectionTitle";
import Button from "../Shared/Button";
import useMenu from "../../hooks/useMenu";
import { Link } from "react-router-dom";

const FromOurMenu = () => {
  const { loading, menu } = useMenu();

  const popularMenu = menu.filter((popular) => popular.category === "popular");
  console.log(popularMenu);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="w-11/12 mx-auto my-10">
      <SectionTitle
        subtitle={"---check it out---"}
        title={"from our menu"}
      ></SectionTitle>
      <section className="my-20 grid grid-cols-1 md:grid-cols-2 gap-5">
        {popularMenu.map((menu, idx) => (
          <MenuSectionShared
            key={idx}
            title={menu.name}
            des={menu.recipe}
            price={menu.price}
            img={menu.image}
          ></MenuSectionShared>
        ))}
      </section>
      <Link to="/our-menu">
        <div className="w-fit mx-auto">
          <Button
            name={"view full menu"}
            bgColor={"black"}
            textColor={"black"}
          ></Button>
        </div>
      </Link>
    </div>
  );
};

export default FromOurMenu;
