import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import Itembanner from "./Itembanner.js";
import { getBanners } from "../../../../pages/api/Banner";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";

function Banner({ data, isMobile }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    customPaging: function (i) {
      return (
        <div className="line-svg">
          <svg
            height="4"
            width="200"
            className={`d-none d-md-flex line-dot mr-3`}
          >
            <line
              x1="0"
              y1="0"
              x2="200"
              y2="0"
              stroke="#E0E0E0"
              strokeWidth="10"
              fill="#E0E0E0"
            />
            <line
              x1="0"
              y1="0"
              x2="200"
              y2="0"
              stroke="#E0E0E0"
              strokeWidth="10"
              fill="#E0E0E0"
              className="line-active"
            />
          </svg>
        </div>
      );
    },
  };

  useEffect(() => {
  }, []);

  //const isMobile = useMediaQuery({ maxWidth: 464 });
  const items = data.map((item, index) => (
    <Itembanner key={index} item={item} isMobile={isMobile} />
  ));

  return (
    <>
      <div className="carouselSlickDiv">
        <Slider {...settings}>{items}</Slider>
      </div>
    </>
  );
}

export default Banner;
