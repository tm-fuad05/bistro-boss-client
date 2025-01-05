import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ourShop from "../../../assets/icon/ourshop.png";

// css
import "./navbar.css";

// Icons
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
            {" "}
            <NavLink className={"py-2"} to="/">
              home
            </NavLink>
            <NavLink className={"py-2"} to="/contact-us">
              contact us{" "}
            </NavLink>
            <NavLink className={"py-2"} to="/dashboard">
              dashboard
            </NavLink>
            <NavLink className={"py-2"} to="/our-menu">
              our menu
            </NavLink>
            <NavLink className={"flex items-center "} to="/our-shop/salad">
              our shop
              <img className="w-[25px]" src={ourShop} alt="" />
            </NavLink>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/login">
              <button>SIGN IN</button>
            </Link>
            <FaCircleUser className="text-3xl"></FaCircleUser>
          </div>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl lg:hidden transition-all cursor-pointer"
          >
            {menuOpen ? <MdOutlineRestaurantMenu /> : <MdOutlineMenu />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
