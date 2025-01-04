import React from "react";

import SectionTitle from "../Components/Shared/SectionTitle";
import SharedBanner from "../Components/Shared/SharedBanner";
import banner from "../assets/menu/banner3.jpg";
import MenuSectionShared from "../Components/Shared/MenuSectionShared";
import useMenu from "../hooks/useMenu";
import Button from "../Components/Shared/Button";
import Cover from "../Components/Shared/Cover";

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
        <section className="my-20 grid grid-cols-1 md:grid-cols-2 gap-5">
          {offerMenu.map((menu, idx) => (
            <MenuSectionShared
              key={idx}
              title={menu.name}
              des={menu.recipe}
              price={menu.price}
              img={menu.image}
            ></MenuSectionShared>
          ))}
        </section>
        <div className="w-fit mx-auto">
          <Button
            name={"order your favourite food"}
            bgColor={"black"}
            textColor={"black"}
          ></Button>
        </div>
      </section>

      {/* dessert section */}
      <Cover title={"Desserts"}></Cover>
      <section className="w-11/12 mx-auto">
        <section className="my-20 grid grid-cols-1 md:grid-cols-2 gap-5">
          {dessertMenu.map((menu, idx) => (
            <MenuSectionShared
              key={idx}
              title={menu.name}
              des={menu.recipe}
              price={menu.price}
              img={menu.image}
            ></MenuSectionShared>
          ))}
        </section>
        <div className="w-fit mx-auto">
          <Button
            name={"order your favourite food"}
            bgColor={"black"}
            textColor={"black"}
          ></Button>
        </div>
      </section>
      {/* Pizza section */}
      <Cover title={"Pizzas"}></Cover>
      <section className="w-11/12 mx-auto">
        <section className="my-20 grid grid-cols-1 md:grid-cols-2 gap-5">
          {pizzaMenu.map((menu, idx) => (
            <MenuSectionShared
              key={idx}
              title={menu.name}
              des={menu.recipe}
              price={menu.price}
              img={menu.image}
            ></MenuSectionShared>
          ))}
        </section>
        <div className="w-fit mx-auto">
          <Button
            name={"order your favourite food"}
            bgColor={"black"}
            textColor={"black"}
          ></Button>
        </div>
      </section>
      {/* Salad section */}
      <Cover title={"Salads"}></Cover>
      <section className="w-11/12 mx-auto">
        <section className="my-20 grid grid-cols-1 md:grid-cols-2 gap-5">
          {saladMenu.map((menu, idx) => (
            <MenuSectionShared
              key={idx}
              title={menu.name}
              des={menu.recipe}
              price={menu.price}
              img={menu.image}
            ></MenuSectionShared>
          ))}
        </section>
        <div className="w-fit mx-auto">
          <Button
            name={"order your favourite food"}
            bgColor={"black"}
            textColor={"black"}
          ></Button>
        </div>
      </section>
      {/* Soup section */}
      <Cover title={"soups"}></Cover>
      <section className="w-11/12 mx-auto">
        <section className="my-20 grid grid-cols-1 md:grid-cols-2 gap-5">
          {soupMenu.map((menu, idx) => (
            <MenuSectionShared
              key={idx}
              title={menu.name}
              des={menu.recipe}
              price={menu.price}
              img={menu.image}
            ></MenuSectionShared>
          ))}
        </section>
        <div className="w-fit mx-auto">
          <Button
            name={"order your favourite food"}
            bgColor={"black"}
            textColor={"black"}
          ></Button>
        </div>
      </section>
    </div>
  );
};

export default OurMenu;
