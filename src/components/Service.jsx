import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div>
      <h1 className="text-center text-6xl font-bold text-primary my-10">
        {" "}
        OUR SERVICES
      </h1>
      <p className="pt-0 text-center text-xl">
        {" "}
        From starting your business to generate sales, we offer everything you
        need to stand out from the crowd. Whether you are just starting out or
        running a business already, we have a plan that fits your needs,
        Including custom quotes that fits your needs. Our Services can be
        broadly categorised into these:{" "}
      </p>
      <div className="flex my-10 justify-between">
        <div className="flex items-center gap-2">
          <Image alt="logo" src="/marketing.png" height={70} width={70} />
          <h4 className="text-2xl">
            DIGITAL <br />
            MARKETING
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <Image alt="logo" src="/website.png" height={70} width={70} />
          <h4 className="text-2xl">
            WEBSITE <br />
            DEVELOPMENT
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <Image alt="logo" src="/identity.png" height={70} width={70} />
          <h4 className="text-2xl">
            {" "}
            BRAND <br />
            IDENTITY
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <Image alt="logo" src="/video.png" height={70} width={70} />
          <h4 className="text-2xl">
            VIDEO <br />
            POST <br />
            PRODUCTION
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Service;
