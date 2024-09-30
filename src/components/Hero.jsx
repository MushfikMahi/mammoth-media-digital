import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="">
        <div className=" mx-auto flex flex-col items-center px-4 py-20 text-center md:px-10 lg:px-32">
          <h3 className="text-3xl pb-5 text-secondary">
            {" "}
            ELEVATE | SCALE | DOMINATE
          </h3>
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Your business, “<span className="text-primary">Amplified</span>”{" "}
            <br />
            From
            <span className="text-primary"> Tiny </span>to{" "}
            <span className="text-primary">Titanic</span>
          </h1>
          <p className="px-8 mt-8 mb-12 text-xl">
            Create Awareness of your Brand and Generate Sales <br /> Beyond your
            Wildest Dreams with our Expert Team.
          </p>
          <div className="flex gap-3 justify-center">
            <button className="pr-btn">Our Services</button>
            <button className="pr-btn">Get started</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
