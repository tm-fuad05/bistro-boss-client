import React from "react";
import { NavLink } from "react-router-dom";
import ourShop from "../../assets/icon/ourshop.png";

// Icons
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className=" bg-black bg-opacity-50 fixed z-20 w-full">
      <nav className="py-3 flex items-center justify-between w-11/12 mx-auto  text-white">
        <div className="font-cinzel leading-4">
          <h3 className=" font-extrabold text-2xl tracking-wide ">
            BISTRO BOSS
          </h3>
          <p className="font-semibold tracking-[7px]"> RESTAURANT</p>
        </div>
        {/* Navmenu */}
        <div className="flex gap-4 items-center">
          <div className="hidden uppercase lg:flex gap-3">
            <NavLink to="/">home</NavLink>
            <NavLink to="/">contact us </NavLink>
            <NavLink to="/">dashboard</NavLink>
            <NavLink to="/">our menu</NavLink>
            <NavLink className={"flex items-center "} to="/">
              our shop
              <img className="w-[25px]" src={ourShop} alt="" />
            </NavLink>
          </div>
          <div className="flex items-center gap-2">
            <button>SIGN OUT</button>
            <FaCircleUser className="text-3xl"></FaCircleUser>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
