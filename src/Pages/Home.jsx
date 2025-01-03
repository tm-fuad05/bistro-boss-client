import React from "react";
import Banner from "../Components/Shared/Home/Banner";
import Category from "../Components/Shared/Home/Category";
import BistroBoss from "../Components/Shared/Home/BistroBoss";
import FromOurMenu from "../Components/Shared/Home/FromOurMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <FromOurMenu></FromOurMenu>
    </div>
  );
};

export default Home;
