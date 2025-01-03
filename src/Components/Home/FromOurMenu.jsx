import React, { useEffect, useState } from "react";

import MenuSectionShared from "../Shared/MenuSectionShared";
import SectionTitle from "../Shared/SectionTitle";
import Button from "../Shared/Button";

const FromOurMenu = () => {
  const [fromOurMenu, setFromOurMenu] = useState([]);

  useEffect(() => {
    fetch("../fromourmenu.json")
      .then((res) => res.json())
      .then((data) => setFromOurMenu(data));
  }, []);
  console.log(fromOurMenu);

  return (
    <div className="w-11/12 mx-auto my-10">
      <SectionTitle
        subtitle={"---check it out---"}
        title={"from our menu"}
      ></SectionTitle>
      <section className="my-20 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3">
        {fromOurMenu.map((menu, idx) => (
          <MenuSectionShared
            key={idx}
            title={menu.name}
            des={menu.description}
            price={menu.price}
          ></MenuSectionShared>
        ))}
      </section>
      <div className="w-fit mx-auto">
        <Button
          name={"view full menu"}
          bgColor={"gray-800"}
          textColor={"black"}
        ></Button>
      </div>
    </div>
  );
};

export default FromOurMenu;
