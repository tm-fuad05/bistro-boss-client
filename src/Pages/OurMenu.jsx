import React from "react";

import SectionTitle from "../Components/Shared/SectionTitle";
import SharedBanner from "../Components/Shared/SharedBanner";
import banner from "../assets/menu/banner3.jpg";
import MenuSectionShared from "../Components/Shared/MenuSectionShared";
import useMenu from "../hooks/useMenu";
import Button from "../Components/Shared/Button";
import Cover from "../Components/Shared/Our Menu/Cover";
import MenuTypes from "../Components/Shared/Our Menu/MenuTypes";

const OurMenu = () => {
  const { loading, menu } = useMenu();
  const offerMenu = menu.filter((offer) => offer.category === "offered");
  const dessertMenu = menu.filter((dessert) => dessert.category === "dessert");
  const pizzaMenu = menu.filter((pizza) => pizza.category === "pizza");
  const saladMenu = menu.filter((salad) => salad.category === "salad");
  const soupMenu = menu.filter((soup) => soup.category === "soup");

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="space-y-20">
      <SharedBanner
        title={"our menu"}
        subtitle={"would you like to try a dish?"}
        banner={banner}
      ></SharedBanner>

      {/* offer section */}
      <section className="w-11/12 mx-auto">
        <SectionTitle
          subtitle={"--Don't miss"}
          title={"today's offer"}
        ></SectionTitle>
        <MenuTypes items={offerMenu}></MenuTypes>
      </section>

      {/* dessert section */}
      <Cover title={"Desserts"}></Cover>
      <section className="w-11/12 mx-auto">
        <MenuTypes items={dessertMenu}></MenuTypes>
      </section>
      {/* Pizza section */}
      <Cover title={"Pizzas"}></Cover>
      <section className="w-11/12 mx-auto">
        <MenuTypes items={pizzaMenu}></MenuTypes>
      </section>
      {/* Salad section */}
      <Cover title={"Salads"}></Cover>
      <section className="w-11/12 mx-auto">
        <MenuTypes items={saladMenu}></MenuTypes>
      </section>
      {/* Soup section */}
      <Cover title={"soups"}></Cover>
      <section className="w-11/12 mx-auto">
        <MenuTypes items={soupMenu}></MenuTypes>
      </section>
    </div>
  );
};

export default OurMenu;
