"use client";
import Image from "next/image";
import React, { useState } from "react";
const categories = [
  {
    name: "Mammoth Media Portfolio",
    images: [
      "https://i.ibb.co.com/f4dMMRf/monthly-pack.jpg",
      "https://i.ibb.co.com/Gv4XnRY/portfolio-2.jpg",
      "https://i.ibb.co.com/JsRHfmQ/Restaurant-portfolio.jpg",
      "https://i.ibb.co.com/TtSdC7R/Agency.jpg",
      "https://i.ibb.co.com/72wnHPL/burger.jpg",
      "https://i.ibb.co.com/phMRrWb/Portfolio-website.jpg",
      "https://i.ibb.co.com/hC73bjV/Product.jpg",
      "https://i.ibb.co.com/6YspQ7C/Restaurant.jpg",
      "https://i.ibb.co.com/qC8MHjR/3D.jpg"
    ]
  },
  {
    name: "Warrior's Wardrobe Hoodie Posts",
    images: [
      "https://i.ibb.co.com/t4mLps5/cadet.png",
      "https://i.ibb.co.com/dG6Myx3/Ex-cadetgg.png",
      "https://i.ibb.co.com/wdGmYB5/HOODIE-POST-navy.png"]
  },
  {
    name: "T-shirt Karkhana Website",
    images: [
      "https://i.ibb.co.com/kcRXYmx/Tshirt-Karkhana-Website-Post.png"]
  },
  {
    name: "Social Media Posts For Ayojon Event Management",
    images: [
      "https://i.ibb.co.com/x3dqZ2q/0b4040fa-e5aa-458a-ade0-0fee6bdf9300.jpg"]
  },
  {
    name: "Warrior's Wardrobe Hoodie Coming Soon Posts",
    images: [
      "https://i.ibb.co.com/Gn1j9DR/1.png",
      "https://i.ibb.co.com/cwXnYj9/2.png",
      "https://i.ibb.co.com/WHZXhFb/3.png",
      "https://i.ibb.co.com/kxCFXcQ/4.png"]
  },
  {
    name: "Warrior's Wardrobe Hoodie Simple Posts",
    images: [
      "https://i.ibb.co.com/CvLZxz7/1-Ash.jpg",
      "https://i.ibb.co.com/vhg4c0C/2-Fawn.jpg",
      "https://i.ibb.co.com/djP1w5X/3-Burgundy.jpg",
      "https://i.ibb.co.com/vxzXfXH/4-Aegean.jpg",
      "https://i.ibb.co.com/BfD1jtD/5-Violet.jpg",
      "https://i.ibb.co.com/Vt7qk4Y/6-Midnight.jpg",
      "https://i.ibb.co.com/6NqH7bL/Desert.jpg",
      "https://i.ibb.co.com/G0C4FhH/ex-cadet.jpg",
      "https://i.ibb.co.com/LZNcmMv/ex-s.jpg",
      "https://i.ibb.co.com/7W7csGT/Forest.jpg",
      "https://i.ibb.co.com/3dxNtrR/Ocean.jpg",
      "https://i.ibb.co.com/g6T706y/Sky.jpg"]
  },
  {
    name: "Mammoth Media Simple Posts",
    images: [
      "https://i.ibb.co.com/8BM65n4/Artboard-1.png",
      "https://i.ibb.co.com/wWmKKG7/Artboard-2.png",
      "https://i.ibb.co.com/pjKTZ8P/Artboard-3.png",
      "https://i.ibb.co.com/brWHT3b/Artboard-4.png",
      "https://i.ibb.co.com/w0g7tjx/Artboard-5.png",
      "https://i.ibb.co.com/2kHZ232/Artboard-6.png",
      "https://i.ibb.co.com/Czv2Dtg/Artboard-7.png",
      "https://i.ibb.co.com/LPGqbkC/Mammoth-Boost-post.jpg"
    ]
  },
  {
    name: "Mammoth Media Facebook Marketing Packages",
    images: [
      "https://i.ibb.co.com/YytpnHK/Facebook-Marketing-1.jpg",
      "https://i.ibb.co.com/rGg5tz5/Facebook-Marketing-2.jpg",
      "https://i.ibb.co.com/JscWw0D/Facebook-Marketing-3.jpg",
      "https://i.ibb.co.com/mGgrhZw/Facebook-Marketing-4.jpg"
    ]
  },
  {
    name: "Mammoth Media Website Packages",
    images: [
      "https://i.ibb.co.com/PrRQGjZ/Website-1.jpg",
      "https://i.ibb.co.com/3m0xPRg/Website-2.jpg",
      "https://i.ibb.co.com/tJhYZjB/Website-3.jpg",
      "https://i.ibb.co.com/pzJkd3h/Website-4.jpg"
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
    <div className="md:my-20 my-10">
      <h1 className="text-center md:text-6xl text-2xl font-bold text-primary md:my-20 my-8">
        OUR MASTERPIECES
      </h1>
      {/* Grid of category images */}
      <div className="grid md:grid-cols-4 grid-cols-3 gap-4 items-center justify-center">
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
            <div className="absolute hover:underline text-center inset-0 flex items-center bg-black bg-opacity-50 text-white md:text-xl font-bold">
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
