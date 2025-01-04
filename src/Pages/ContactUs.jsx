import React from "react";

import banner from "../assets/contact/banner.jpg";
import SharedBanner from "../Components/Shared/SharedBanner";

const ContactUs = () => {
  return (
    <div>
      <SharedBanner
        title={"our menu"}
        subtitle={"would you like to try a dish?"}
        banner={banner}
      ></SharedBanner>
    </div>
  );
};

export default ContactUs;
