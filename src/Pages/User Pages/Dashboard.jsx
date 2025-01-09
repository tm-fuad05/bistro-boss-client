import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";

// Icons
import { FaHome } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdPayment } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { VscCodeReview } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
  const { cart } = useCart();

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 min-h-screen bg-[#d1a054] pl-5">
        <div className="font-cinzel leading-4 mt-5">
          <h3 className=" font-extrabold text-2xl tracking-wide ">
            BISTRO BOSS
          </h3>
          <p className="font-semibold tracking-[7px]"> RESTAURANT</p>
        </div>
        {/* Nav */}
        <nav
          id="dashboard-nav"
          className="mt-10 uppercase font-semibold flex flex-col gap-3 font-cinzel"
        >
          <NavLink className={"flex gap-2 items-center "} to="/">
            <FaHome className="text-xl" />
            user home
          </NavLink>
          <NavLink className={"flex gap-2 items-center"} to="/">
            {" "}
            <SlCalender className="text-xl" />
            reservation
          </NavLink>
          <NavLink className={"flex gap-2 items-center"} to="/">
            {" "}
            <MdPayment className="text-xl" />
            payment history
          </NavLink>
          <NavLink className={"flex gap-2 items-center"} to="/dashboard/cart">
            {" "}
            <FaCartShopping className="text-xl" />
            my cart ({cart.length})
          </NavLink>
          <NavLink className={"flex gap-2 items-center"} to="/">
            <VscCodeReview className="text-xl" />
            add review
          </NavLink>
          <NavLink className={"flex gap-2 items-center"} to="/">
            {" "}
            <CiBookmark className="text-xl" />
            my booking
          </NavLink>
          <hr className="mx-2 my-5" />
          <NavLink className={"flex gap-2 items-center "} to="/">
            <FaHome className="text-xl" />
            home
          </NavLink>
          <NavLink className={"flex gap-2 items-center "} to="/">
            <IoIosMenu className="text-xl" />
            menu
          </NavLink>
          <NavLink className={"flex gap-2 items-center "} to="/">
            <FaShoppingBag className="text-xl" />
            shop
          </NavLink>
          <NavLink className={"flex gap-2 items-center "} to="/">
            <MdPermContactCalendar className="text-xl" />
            contact
          </NavLink>
        </nav>
      </div>
      <div className="col-span-10 bg-[#f6f6f6]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
