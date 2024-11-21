import React from "react";
// import './youtube.css'
const YouTube = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="responsive-iframe-container">
      <iframe
        width="560" // These are default values, but the container controls the size
        height="315"
        src="https://www.youtube.com/embed/N-uH6X9A3sA"
          title="Mammoth Media Digital Services promo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
      ></iframe>
    </div>
      {/* <div className="">
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/N-uH6X9A3sA"
          title="Mammoth Media Digital Services promo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div> */}
    </div>
  );
};

export default YouTube;
