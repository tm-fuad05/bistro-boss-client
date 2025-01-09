import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ourShop from "../../../assets/icon/ourshop.png";

// css
import "./navbar.css";

// Icons
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { IoMdCart } from "react-icons/io";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const { cart } = useCart();
  console.log(cart);

  const handleSignOut = () => {
    signOutUser()
      .then(() => toast.success("Signned out"))
      .catch((error) => alert(error));
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className=" bg-black bg-opacity-50 fixed z-20 w-full">
      <nav
        id="main-nav"
        className="py-3 flex items-center justify-between w-11/12 mx-auto  text-white"
      >
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
          <div className="relative rounded-full p-2 hover:bg-gray-500">
            <IoMdCart className="text-2xl" />
            <div className="absolute -top-[0px] -right-[0px] badge border-[#dbb884] bg-[#dbb884] border badge-xs">
              {cart.length}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              {user && user?.email ? (
                <button onClick={handleSignOut}>SIGN OUT</button>
              ) : (
                <Link to="/login">
                  <button>SIGN IN</button>
                </Link>
              )}
            </div>
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
      {/* <aside
        className={` ${
          menuOpen ? "left-0 opacity-100 z-20" : "-left-[500px]"
        } lg:hidden bg-[#dbb884] p-4  absolute top-0 left-0 md:w-5/12 w-7/12  transition-all duration-500 min-h-screen`}
      >
        <div className="font-cinzel leading-4 mb-5 pb-3 border-b border-black flex justify-between items-start">
          <div>
            <h3 className=" font-extrabold text-2xl tracking-wide ">
              BISTRO BOSS
            </h3>
            <p className="font-semibold tracking-[7px]"> RESTAURANT</p>
          </div>
          <button onClick={handleMenuClose}>
            <MdOutlineRestaurantMenu className="text-3xl border border-black p-1" />
          </button>
        </div>

        <ul className="items-center  text-[1rem] text-black flex flex-col capitalize text-center">
          <NavLink
            className={"py-2 hover:bg-gray-300 rounded-md w-full"}
            to="/"
          >
            home
          </NavLink>
          <NavLink
            className={"py-2 hover:bg-gray-100 rounded-md w-full"}
            to="/contact-us"
          >
            contact us{" "}
          </NavLink>
          <NavLink
            className={"py-2 hover:bg-gray-100 rounded-md w-full"}
            to="/dashboard"
          >
            dashboard
          </NavLink>
          <NavLink
            className={"py-2 hover:bg-gray-100 rounded-md w-full"}
            to="/our-menu"
          >
            our menu
          </NavLink>
          <NavLink
            className={
              "flex justify-center items-center py-2 hover:bg-gray-100 rounded-md w-full"
            }
            to="/our-shop/salad"
          >
            our shop
            <img className="w-[25px]" src={ourShop} alt="" />
          </NavLink>
        </ul>
      </aside> */}
    </div>
  );
};

export default Navbar;
