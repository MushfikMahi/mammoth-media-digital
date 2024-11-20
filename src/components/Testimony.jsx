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
    image: "https://i.ibb.co.com/31YvMzg/2ad3ce0f-6633-426c-8f04-e6380b765021-20241120-230914-0000.png",
    name: "Mahfuzur Rahman",
    title: "CEO, T-shirt Karkhana",
    comment:
      "The turnover rate is very quick and the support has been amazing. Really looking forward to our next project.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/Dw4TVJq/Shahriar-Shanto.png",
    name: "Shahriar Shanto",
    title: "CEO, SpangledBD",
    comment:
      "Mammoth Media is a team of professional people. They helped us throughout the project and continued even after it ended.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/kKQ76fw/c7f75f27-5c74-477a-b333-0994b4a38578-20241120-231141-0000.png",
    name: "Francesco Haze",
    title: "Senior Marketing Analyst, GROW by SAVVY",
    comment:
      "Mammoth Media helped us increase our online visibility, attract new clients, and grow our business.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/PTVrhnR/c796ca8d-6c86-4fc9-bb52-1b8b518b74ed-20241120-231434-0000.png",
    name: "Rowshonur Rahman",
    title: "COO, Ayojon Event Management",
    comment:
      "Mammoth Media impressed me with their expertise and results-oriented approach.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/YQ6Dfrk/829b2a05-808e-40c7-a524-a66cbdee8345-20241120-231018-0000.png",
    name: "Edowardo",
    title: "Senior Marketing Analyst, GROW by SAVVY",
    comment:
      "Working with Mammoth Media on our music album design and promotion was a fantastic experience.",
    video: "",
  },
  {
    image: "/artist-white.png",
    name: "Stephen Collins",
    title: "Senior Marketing, NXTWAY & ANIMAGIC",
    comment:
      "Really looking forward to our next project. Our last one was a blast.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/h90Fwsz/b0c8000c-3bda-46a4-8c72-a569e7e6b1e0-20241120-231558-0000.png",
    name: "Tanbir Taz",
    title: "CEO, NXTWAY & ANIMAGIC",
    comment:
      "Mammoth Media captured the essence of our brand and created a visually stunning logo and brand guidelines.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/RcVq9H0/f2761655-822e-4465-90e5-e42ba8164daf-20241120-231331-0000.png",
    name: "Irfan Sadique Sium",
    title: "Founder, PLEXUS FOR YOUTH",
    comment:
      "Mammoth Media helped us create a brand that resonates with our target audience and effectively communicates our mission.",
    video: "",
  },
  {
    image: "https://i.ibb.co.com/HhDN7DY/bab98985-519c-4ac7-96d1-2885075d3555-20241120-231233-0000.png",
    name: "Anika Tabassum",
    title: "Digital Creator",
    comment:
      "Mammoth Media was instrumental in helping me establish my personal brand. I'm really grateful for their support.",
    video: "",
  },
];
export default Testimony;
