"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./testimony.css";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
const Testimony = () => {
  return (
    <div className="container relative">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testimony.map((testi, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex">
              <div className="flex-1 p-10">
                <div className="flex items-center">
                  <div>
                    <Image
                      className="rounded-full"
                      alt={testi.name}
                      src={testi.image}
                      height={70}
                      width={70}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl">{testi.name}</h3>
                    <p className="bg-primary px-2 py-1 rounded-xl">
                      {testi.title}
                    </p>
                  </div>
                </div>
                <h2 className="text-3xl p-6">{testi.comment}</h2>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <Image
                  alt={testi.name}
                  src={testi.image}
                  height={350}
                  width={350}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
const testimony = [
  {
    image: "/artist-white.png",
    name: "Hadiya Morris",
    title: "CEO, NXTWAY & ANIMAGIC",
    comment:
      "The turnover rate is very quick and the support has been amazing.Really looking forward to our next project.",
  },
  {
    image: "/artist-white.png",
    name: "Kate De Wet",
    title: "Senior Marketing Analyst, GROW by SAVVY",
    comment:
      "The turnover rate is very quick and the support has been amazing.Really looking forward to our next project.",
  },
  {
    image: "/artist-white.png",
    name: "Francesco Haze",
    title: "Senior Marketing, NXTWAY & ANIMAGIC",
    comment:
      "The turnover rate is very quick and the support has been amazing.Really looking forward to our next project.",
  },
  {
    image: "/artist-white.png",
    name: "Tanbir Taz",
    title: "CEO, NXTWAY & ANIMAGIC",
    comment:
      "The turnover rate is very quick and the support has been amazing.Really looking forward to our next project.",
  },
  {
    image: "/artist-white.png",
    name: "Irfan Sadique Sium",
    title: "Founder, PLEXUS FOR YOUTH",
    comment:
      "The turnover rate is very quick and the support has been amazing.Really looking forward to our next project.",
  },
  {
    image: "/artist-white.png",
    name: "Anika Tabassum",
    title: "CEO, NXTWAY & ANIMAGIC",
    comment:
      "The turnover rate is very quick and the support has been amazing.Really looking forward to our next project.",
  },
];
export default Testimony;
