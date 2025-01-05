import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer";

const Root = () => {
  const location = useLocation();

  const noHeaderFooter = location.pathname.includes("login");

  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;
