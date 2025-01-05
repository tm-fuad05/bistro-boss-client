import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer";

const Root = () => {
  const location = useLocation();

  const noHeaderFooter = ["login", "sign-up"].some((path) =>
    location.pathname.includes(path)
  );

  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;
