import React from "react";
import SharedBanner from "../Components/Shared/SharedBanner";
import banner from "../assets/shop/banner2.jpg";
import { NavLink, Outlet } from "react-router-dom";
import "../Components/Our Shop/ourshop.css";

const OurShop = () => {
  return (
    <>
      <div>
        <SharedBanner title={"our shop"} banner={banner}></SharedBanner>
      </div>
      <div
        id="menu-types"
        className="uppercase grid grid-cols-3 md:grid-cols-5 gap-3 w-11/12 md:w-7/12 mx-auto text-center my-16 font-medium"
      >
        <NavLink to="/our-shop/salad" className="pb-2">
          salad
        </NavLink>
        <NavLink to="/our-shop/pizza" className="pb-2">
          pizza
        </NavLink>
        <NavLink to="/our-shop/soup" className="pb-2">
          soups
        </NavLink>
        <NavLink to="/our-shop/dessert" className="pb-2">
          desserts
        </NavLink>
        <NavLink to="/our-shop/drinks" className="pb-2">
          drinks
        </NavLink>
      </div>
      <div className="w-11/12 mx-auto mb-20">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default OurShop;
