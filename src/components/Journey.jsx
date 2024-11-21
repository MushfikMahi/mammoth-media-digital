import Image from "next/image";
import React from "react";

const Journey = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:my-20 relative">
      <div className=" text-center">
        <h3 className="text-2xl md:text-4xl italic"> START YOUR </h3>
        <h1 className="text-primary md:text-6xl text-2xl font-bold italic">
          DIGITAL <br /> JOURNEY
        </h1>
        <h3 className="text-2xl md:text-4xl italic">WITH US</h3>
      </div>
      <Image
        className="md:absolute pt-5 md:pt-0 w-96 md:w-0 md:left-[25%]"
        alt="journey"
        src="/journey.png"
        height={200}
        width={600}
      />
      <div className="text-center md:flex md:items-end">
        <div>
          <h3 className="text-2xl md:text-4xl">WE HANDLE YOUR </h3>
          <h1 className="text-2xl md:text-5xl font-bold">
            BUSINESS FROM <span className="text-primary">ZERO</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Journey;
