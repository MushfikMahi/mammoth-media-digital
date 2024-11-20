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
    image: "https://i.ibb.co.com/sJMyk6C/Mahfuzur-Rahman.png",
    name: "Mahfuzur Rahman",
    title: "CEO, T-shirt Karkhana",
    comment:
      "The turnover rate is very quick and the support has been amazing. Really looking forward to our next project.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/Lk7sWpK/Shahriar-Shanto.png",
    name: "Shahriar Shanto",
    title: "CEO, SpangledBD",
    comment:
      "Mammoth Media is a team of professional people. They helped us throughout the project and continued even after it ended.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/fGmCM24/Francesco-Haze.png",
    name: "Francesco Haze",
    title: "Senior Marketing Analyst, GROW by SAVVY",
    comment:
      "Mammoth Media helped us increase our online visibility, attract new clients, and grow our business.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/dWjzSpv/Rowshon-Rahman.png",
    name: "Rowshonur Rahman",
    title: "COO, Ayojon Event Management",
    comment:
      "Mammoth Media impressed me with their expertise and results-oriented approach.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/0ZfFpyW/Edwardo.png",
    name: "Edowardo",
    title: "CTO, Drago IT",
    comment:
      "Working with Mammoth Media on our music album design and promotion was a fantastic experience.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/H4xcf5x/Stephen-Collins.png",
    name: "Stephen Collins",
    title: "Senior Marketing, NXTWAY",
    comment:
      "Really looking forward to our next project. Our last one was a blast.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/7yBXT7h/Tanbir-Taz.png",
    name: "Tanbir Taz",
    title: "COO, ANIMAGIC",
    comment:
      "Mammoth Media captured the essence of our brand and created a visually stunning logo and brand guidelines.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/WG0nMGx/Irfan-Sadique.png",
    name: "Irfan Sadique Sium",
    title: "Founder, PLEXUS FOR YOUTH",
    comment:
      "Mammoth Media helped us create a brand that resonates with our target audience and effectively communicates our mission.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/SvdfRzw/Anika-Tabassum.png",
    name: "Anika Tabassum",
    title: "Digital Creator",
    comment:
      "Mammoth Media was instrumental in helping me establish my personal brand. I'm really grateful for their support.",
    video: "",
  },
];
export default Testimony;
