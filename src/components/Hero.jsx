import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="">
      <div className=" mx-auto flex flex-col items-center px-4 md:py-20 py-10 text-center md:px-10 lg:px-32">
        <h3 className="text-3xl sm:text-xl pb-5 text-secondary">
          {" "}
          ELEVATE | SCALE | DOMINATE
        </h3>
        <h1 className="md:text-4xl font-bold leading-none text-2xl">
          Your business, “<span className="text-primary">Amplified</span>”{" "}
          <br />
          From
          <span className="text-primary"> Tiny </span>to{" "}
          <span className="text-primary">Titanic</span>
        </h1>
        <p className="md:px-8 px-4 md:mt-8 mt-4 md:mb-12 mb-4 md:text-xl">
          Create Awareness of your Brand and Generate Sales <br /> Beyond your
          Wildest Dreams with our Expert Team.
        </p>
        <div className="flex gap-3 justify-center">
          <Link className="pr-btn" href={"https://www.mammothmedia.digital/#service"}>
            Our Services
          </Link>
          <Link className="pr-btn" href={"https://www.mammothmedia.digital/#getQuote"}>
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
