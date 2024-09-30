import React from "react";

const Faq = () => {
  return (
    <section className="flex my-20" id="#faq">
      <div className="w-1/3">
        <h2 className="text-6xl font-bold">Have Questions?</h2>
        <p className="text-xl pt-10 pb-5"> Do you have more questions?</p>
        <button className="px-4 py-2 mt-2 text-lg rounded text-secondary bg-primary hover:bg-secondary hover:text-primary">
          Contact Us
        </button>
      </div>
      <div className="w-full space-y-4 mx-5">
        {data.map((d) => (
          <div
            key={d}
            className="collapse collapse-arrow border-4 border-primary rounded-2xl"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-secondary">
              {d.title}
            </div>
            <div className="collapse-content">
              <p>{d.ans}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const data = [
  {
    title: "What Are Your Services?",
    ans: "deskuhflikdshflh",
  },
  {
    title: " Do You Offer Revisions?",
    ans: "",
  },
  {
    title: "Why Wouldn’t I Hire A Freelancer?",
    ans: "",
  },
  {
    title: " When Can I get My Project Delivered?",
    ans: "",
  },
  {
    title: "When Will I Experience Growth?",
    ans: "",
  },
  {
    title: "Do You Offer Trials?",
    ans: "",
  },
  {
    title: "Do You Offer Any Guarantees?",
    ans: "",
  },
];

export default Faq;
