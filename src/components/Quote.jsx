"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    budget: "",
    description: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the API route (POST request)
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Form submitted successfully");
    } else {
      alert("Failed to submit form");
    }
  };
  return (
    <div className="md:mb-20 md:pb-60 md:bg-[url('/girl-with-laptop.png')]  md:bg-[length:1200px_600px] md:bg-[center_bottom] md:bg-no-repeat">
      <h1 className="text-center text-2xl md:text-6xl font-bold text-primary md:my-10 my-3">
        Get A Quote
      </h1>
      <p className="text-center md:text-xl">
        Leave your info here. We will reach out to you with a custom offer
        tailored to you.
      </p>
      <div className="md:flex md:mt-2">
        <div className="md:w-1/3">
          {/* <Image
            alt="quote"
            className="relative "
            src="/quote.png"
            height={200}
            width={350}
          /> */}
        </div>
        <div className="flex-1">
          <section class="max-w-4xl p-6 mx-auto rounded-md shadow-md ">
            <form onSubmit={handleSubmit}>
              <div class="grid grid-cols-1 md:gap-6 gap-2 mt-4">
                <div>
                  <input
                    id="username"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    class="block w-full px-4 py-2 mt-2  bg-[#1e2118] border border-primary rounded-xl   focus:ring-opacity-40 focus:border-[#c4d89c] focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <input
                    id="emailAddress"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email"
                    class="block w-full px-4 py-2 mt-2  bg-[#1e2118] border border-primary rounded-xl  focus:ring-opacity-40 focus:border-[#c4d89c] focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <input
                    id="budget"
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Category of Service Required"
                    class="block w-full px-4 py-2 mt-2  bg-[#1e2118] border border-primary rounded-xl  focus:ring-opacity-40 focus:border-[#c4d89c] focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <input
                    id="budget"
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Budget"
                    class="block w-full px-4 py-2 mt-2  bg-[#1e2118] border border-primary rounded-xl  focus:ring-opacity-40 focus:border-[#c4d89c] focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <textarea
                    id="description"
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Short Description of the project"
                    class="z-20 block w-full h-40 px-4 py-2 mt-2  bg-[#1e2118] border border-primary rounded-xl  focus:ring-opacity-40 focus:border-[#c4d89c] focus:outline-none focus:ring"
                  />
                </div>
              </div>

              <div class="flex justify-center md:justify-end md:mt-6 mt-2">
                <button
                  type="submit"
                  class="md:px-4 w-full md:w-auto justify-center md:py-2 flex items-center gap-2 m-2 text-lg  text-secondary bg-primary hover:bg-secondary hover:text-primary transition-colors duration-300 transform rounded-md "
                >
                  Send <RiSendPlaneFill />
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>

      {/* <div className="relative">
        <Image
          alt="quote"
          className="w-full"
          src="/girl-with-laptop.png"
          height={300}
          width={350}
        />
      </div> */}
    </div>
  );
};

export default Quote;
