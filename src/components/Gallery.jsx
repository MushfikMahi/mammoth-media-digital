"use client";
import Image from "next/image";
import React, { useState } from "react";
const categories = [
    {
    name: "Mammoth Media Portfolio",
    images: [
      "https://ibb.co.com/Hqs3JbY",
      "https://ibb.co.com/0hgCkTv",
      "https://ibb.co.com/LPSntDh",
      "https://ibb.co.com/3vbyxd0",
      "https://ibb.co.com/DC277cY",
      "https://ibb.co.com/8gxw2pB",
      "https://ibb.co.com/nDg390P",
      "https://ibb.co.com/vwqh9RK",
      "https://ibb.co.com/YLw09B9",
      "https://ibb.co.com/vHmYRBp"
    ]
  },
  {
    name: "Warrior's Wardrobe Hoodie Posts",
    images: [
      "https://ibb.co.com/W5rySxV",
      "https://ibb.co.com/cxFvWxJ",
      "https://ibb.co.com/gwYps3T"
  },
    {
    name: "T-shirt Karkhana Website",
    images: [
      "https://ibb.co.com/dKdDnmr"
  },
  {
    name: "Warrior's Wardrobe Hoodie Coming Soon Posts",
    images: [
      "https://ibb.co.com/W0qvHmN",
      "https://ibb.co.com/LYxbXZB",
      "https://ibb.co.com/5WcKCK6",
      "https://ibb.co.com/p1DmZxD],"
 },
  {
    name: "Warrior's Wardrobe Hoodie Simple Posts",
    images: [
      "https://ibb.co.com/BfbJpjX",
      "https://ibb.co.com/gdFK4x8",
      "https://ibb.co.com/XbRTtJS",
      "https://ibb.co.com/4KDx2Lp",
      "https://ibb.co.com/J52tPgb",
      "https://ibb.co.com/G0xHQ2j",
      "https://ibb.co.com/3T6Zk4g",
      "https://ibb.co.com/pxtLkFj",
      "https://ibb.co.com/YbVcF8w",
      "https://ibb.co.com/XCYK19V",
      "https://ibb.co.com/c12SxmY",
      "https://ibb.co.com/yyLTH8M"
  },
  {
    name: "Mammoth Media Simple Posts",
    images: [
      "https://ibb.co.com/Qrv99BL",
      "https://ibb.co.com/2k7dDWN",
      "https://ibb.co.com/GH8t3sn",
      "https://ibb.co.com/X4wdN2z",
      "https://ibb.co.com/mCVmb4Z",
      "https://ibb.co.com/7bYsP5K",
      "https://ibb.co.com/dBK3ZwY",
      "https://ibb.co.com/KmSxn5x"
    ]
  },
    name: "Mammoth Media Packages",
    images: [
      "https://ibb.co.com/Rp1QSsQ",
      "https://ibb.co.com/b2rzwcy",
      "https://ibb.co.com/BCfH5d0",
      "https://ibb.co.com/1LjYRy5",
      "https://ibb.co.com/TwZLM2B",
      "https://ibb.co.com/chNWsY4",
      "https://ibb.co.com/bK3NHw1",
      "https://ibb.co.com/1q84T9z"
    ]
  },
];
const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (category) => {
    setSelectedCategory(category);
    document.getElementById("my_modal_4").showModal();
  };

  const closeModal = () => {
    setSelectedCategory(null);
    document.getElementById("my_modal_4").close();
  };
  return (
    <div className="my-30">
      <h1 className="text-center text-6xl font-bold text-primary my-10">
        OUR MASTERPIECES
      </h1>
      {/* Grid of category images */}
      <div className="grid grid-cols-4 gap-4 items-center justify-center">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer"
            onClick={() => openModal(category)}
          >
            <Image
              src={category.images[0]} // Display the first image of the category
              width={400}
              height={400}
              alt={category.name}
              className="object-cover"
            />
            {/* Category name overlay */}
            <div className="absolute hover:underline inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold">
              {category.name}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying more images */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box bg-black max-w-full">
          {selectedCategory && (
            <>
              <h3 className="font-bold text-lg">{selectedCategory.name}</h3>
              <div className="py-4 grid grid-cols-3 gap-4">
                {selectedCategory.images.map((image, idx) => (
                  <Image
                    key={idx}
                    src={image}
                    width={1080}
                    height={1080}
                    alt={`${selectedCategory.name} image ${idx + 1}`}
                    className="object-cover"
                  />
                ))}
              </div>
              <div className="modal-action">
                <button
                  className="px-4 py-2 mt-2 text-lg rounded text-secondary bg-primary hover:bg-secondary hover:text-primary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default Gallery;
