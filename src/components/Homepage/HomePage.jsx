import React from "react";
import Hero from "@/components/Hero";
import YouTube from "../YouTube";
import Totb from "../Totb";
import Testimony from "../Testimony";
import Service from "../Service";
import Fectors from "../Fectors";
import Faq from "../Faq";
import Quote from "../Quote";
import Journey from "../Journey";
import Gallery from "../Gallery";
const Home = () => {
  return (
    <div>
      <Hero />
      <YouTube />
      <Totb />
      <Gallery />
      <Service />
      <Testimony />
      <Fectors />
      <Faq />
      <Journey />
      <Quote />
    </div>
  );
};

export default Home;
