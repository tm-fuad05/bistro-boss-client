import React from "react";
import SharedBanner from "../Components/Shared/SharedBanner";
import banner from "../assets/shop/banner2.jpg";

const OurShop = () => {
  return (
    <div>
      <SharedBanner
        title={"our shop"}
        subtitle={"would you like to try a dish?"}
        banner={banner}
      ></SharedBanner>
    </div>
  );
};

export default OurShop;
