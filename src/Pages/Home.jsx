import React from "react";
import Banner from "../Components/Home/Banner";
import BistroBoss from "../Components/Home/BistroBoss";
import FromOurMenu from "../Components/Home/FromOurMenu";
import Category from "../Components/Home/Category";
import Recommends from "../Components/Home/Recommends";
import Reviews from "../Components/Home/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <FromOurMenu></FromOurMenu>
      {/* <Recommends></Recommends> */}
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
