"use client";
import Image from "next/image";
import React, { useState } from "react";
const categories = [
  {
    name: "Hoodie",
    images: ["/Hoodie1.jpg", "/Hoodie2.jpg", "/Hoodie3.jpg"],
  },
  {
    name: "Poster",
    images: ["/poster1.jpg", "/poster2.jpg", "/poster3.png"],
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
    <div className="my-20">
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
        <div className="modal-box bg-black w-11/12 max-w-5xl">
          {selectedCategory && (
            <>
              <h3 className="font-bold text-lg">{selectedCategory.name}</h3>
              <div className="py-4 grid grid-cols-3 gap-4">
                {selectedCategory.images.map((image, idx) => (
                  <Image
                    key={idx}
                    src={image}
                    width={200}
                    height={200}
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
