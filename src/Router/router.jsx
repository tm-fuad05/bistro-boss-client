import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";
import ContactUs from "../Pages/ContactUs";
import Salad from "../Components/Our Shop/Salad";
import Pizza from "../Components/Our Shop/Pizza";
import Soups from "../Components/Our Shop/Soups";
import Dessert from "../Components/Our Shop/Dessert";
import Drinks from "../Components/Our Shop/Drinks";
import Login from "../Pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/our-shop",
        element: <OurShop></OurShop>,
        children: [
          {
            path: "/our-shop/salad",
            element: <Salad></Salad>,
          },
          {
            path: "/our-shop/pizza",
            element: <Pizza></Pizza>,
          },
          {
            path: "/our-shop/soup",
            element: <Soups></Soups>,
          },
          {
            path: "/our-shop/dessert",
            element: <Dessert></Dessert>,
          },
          {
            path: "/our-shop/drinks",
            element: <Drinks></Drinks>,
          },
        ],
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
