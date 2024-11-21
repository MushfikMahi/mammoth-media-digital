"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        // background: "red",
        top: "-20%",
        right: "1%",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      
    </div>
  );
}
//Arrow Buttons
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        // background: "green",
        top: "-20%",
        left: "88%",
        zIndex: 1,
      }}
      onClick={onClick}
    >
          </div>
  );
}
const Fectors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="md:my-10 my-5">
      <h1 className="text-2xl md:text-6xl font-bold">
        See the factors that drive your <br />
        <span className="text-primary"> growth</span>
      </h1>
      <div className="container">
        <div className="md:mt-12 mt-4">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="rounded-xl bg-[#1e2118] border-4 border-primary"
              >
                <div className="md:px-5 px-1 md:py-10 py-5 text-center md:space-y-3 space-y-1">
                  <h3 className="md:text-2xl text-sm uppercase">{d.name}</h3>
                  <hr className="border-primary" />
                  <h2 className="md:text-4xl font-bold md:pt-8 pt-4">{d.number}</h2>
                  <p className="uppercase md:text-xl text-sm">{d.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
const data = [
  {
    name: ` VIRAL EDITS`,
    number: `200%`,
    description: ` VIEWS INCREASE`,
  },
  {
    name: `ONLINE MARKET`,
    number: `$6.51`,
    description: `TRILLION`,
  },
  {
    name: `seo`,
    number: `30%`,
    description: `more reach`,
  },
  {
    name: `THUMBNAILS`,
    number: `15%`,
    description: `CTR INCREASE`,
  },
  {
    name: `VIDEO CONTENT`,
    number: `87%`,
    description: `MORE LEADS`,
  },
  {
    name: `ENGAGING TITLE`,
    number: `10%`,
    description: `CTR INCREASE`,
  },
  {
    name: `VIDEO ADS`,
    number: `82%`,
    description: `MORE ENGAGEMENT`,
  },
];
export default Fectors;
