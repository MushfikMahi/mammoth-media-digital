import Image from "next/image";
import React from "react";

const Journey = () => {
  return (
    <div className="flex justify-between my-20 relative">
      <div className=" text-center">
        <h3 className="text-4xl italic"> START YOUR </h3>
        <h1 className="text-primary text-6xl font-bold italic">
          DIGITAL <br /> JOURNEY
        </h1>
        <h3 className="text-4xl italic">WITH US</h3>
      </div>
      <Image
        className="absolute left-[25%]"
        alt="journey"
        src="/journey.png"
        height={200}
        width={600}
      />
      <div className="text-center flex items-end">
        <div>
          <h3 className="text-4xl">WE HANDLE YOUR </h3>
          <h1 className="text-5xl font-bold">
            BUSINESS FROM <span className="text-primary">ZERO</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Journey;
