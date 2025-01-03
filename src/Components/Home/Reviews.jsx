import React, { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

// Icons
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Rating from "react-rating";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("../reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto my-20">
      <SectionTitle
        subtitle={"---what our clients say---"}
        title={"testimonials"}
      ></SectionTitle>
      <div className="my-10">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="w-fit mx-auto px-16 space-y-3 text-center">
                <div>
                  <Rating
                    initialRating={review.rating}
                    emptySymbol={
                      <FaRegStar className="text-xl lg:text-2xl text-yellow-600"></FaRegStar>
                    }
                    fullSymbol={
                      <FaStar className="text-xl lg:text-2xl text-yellow-600"></FaStar>
                    }
                  />
                </div>
                <figure className="w-fit mx-auto">
                  <FaQuoteLeft className="text-5xl lg:text-7xl" />
                </figure>
                <p className="text-sm lg:text-md">{review.details}</p>
                <h3 className="text-xl lg:text-2xl text-yellow-600 uppercase">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
