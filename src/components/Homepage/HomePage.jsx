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
      <section>
        <Hero />
      </section>

      <section>
        <YouTube />
      </section>

      <section>
        <Totb />
      </section>

      <section id="projects">
        <Gallery />
      </section>

      <section id="service">
        <Service />
      </section>

      <section>
        <Testimony />
      </section>

      <section>
        <Fectors />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section>
        <Journey />
      </section>

      <section id="getQuote">
        <Quote />
      </section>
    </div>
  );
};

export default Home;
