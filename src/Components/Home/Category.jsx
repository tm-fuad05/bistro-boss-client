import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

// pictures
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../Shared/SectionTitle";
import "./home.css";

const Category = () => {
  return (
    <div className="my-10 mb-20">
      <SectionTitle
        subtitle={"---From 11:00am to 10:00pm--"}
        title={"order online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper font-cinzel w-11/12 mx-auto my-10 "
      >
        <SwiperSlide>
          <figure className="relative">
            <img src={slide1} alt="" />
            <h3 className="uppercase text-xl lg:text-2xl text-white absolute bottom-2 left-1/2 -translate-x-1/2 font-medium text-shadow-2xl">
              salads
            </h3>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src={slide2} alt="" />
            <h3 className="uppercase text-xl lg:text-2xl text-white absolute bottom-2 left-1/2 -translate-x-1/2 font-medium">
              pizzas
            </h3>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src={slide3} alt="" />
            <h3 className="uppercase text-xl lg:text-2xl text-white absolute bottom-2 left-1/2 -translate-x-1/2 font-medium">
              soups
            </h3>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src={slide4} alt="" />
            <h3 className="uppercase text-xl lg:text-2xl text-white absolute bottom-2 left-1/2 -translate-x-1/2 font-medium">
              desserts
            </h3>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src={slide5} alt="" />
            <h3 className="uppercase text-xl lg:text-2xl text-white absolute bottom-2 left-1/2 -translate-x-1/2 font-medium">
              salads
            </h3>
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
