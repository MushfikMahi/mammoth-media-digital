import Image from "next/image";
import React from "react";

const Totb = () => {
  return (
    <div className="mt-80 mb-20">
      <div className="flex gap-5">
        <div className="flex-1 flex items-center justify-center">
          <p className="pl-10 text-xl">
            {" "}
            At Mammoth Media Ltd, we&apos;re not like any other conventional
            digital marketing agency. We&apos;re your partner in achieving
            unparalleled success. With a relentless pursuit of perfection, we
            specialize in crafting compelling brand identities and effective
            digital strategies that bring in customers and generate sales. From
            branding to social media marketing, we&apos;re dedicated to helping
            you grow your business from Tiny to Titanic. You only have to sit
            tight and let our in house experts do all the heavylifting for you
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          <Image
            className="absolute -top-60 right-52"
            alt="box"
            src="/Think Outside.svg"
            height={400}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Totb;
