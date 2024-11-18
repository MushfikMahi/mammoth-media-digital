import React from "react";

const Faq = () => {
  return (
    <div className="flex my-20">
      <div className="w-1/3">
        <h2 className="text-6xl font-bold">Have Questions?</h2>
        <p className="text-xl pt-10 pb-5"> Do you have more questions?</p>
        <Link href={"https://www.mammothmedia.digital/#getQuote"}>
        <button className="px-4 py-2 mt-2 text-lg rounded text-secondary bg-primary hover:bg-secondary hover:text-primary">
          Contact Us
        </button>            
          </Link>
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
    </div>
  );
};

const data = [
  {
    title: "How do you determine the pricing for your services?",
    ans: "We allocate budgets based on the specific services required and the complexity of your project after detailed discussion. Our pricing model is transparent and tailored to meet your individual needs.",
  },
  {
    title: "How long does it take to improve my website's ranking in Google?",
    ans: "SEO is a long-term process. While we cannot guarantee a specific timeline, we guarantee that we will improve your search visibility over time through strategic optimization techniques.",
  },
  {
    title: "How can you help me gain followers on my social media platforms?",
    ans: "We focus on building genuine and engaged followers who are interested in your brand or company. Our social media marketing strategies involve creating high-quality content, running targeted campaigns, and leveraging social media analytics to optimize your reach.",
  },
  {
    title: "When can you start working on my project?",
    ans: "Our on-boarding process typically takes 2-3 days, during which we gather essential information about your business and establish clear expectations. Once we agree on the scope of work and budget, we can begin implementing your digital marketing strategy.",
  },
  {
    title: "Do you offer any discounts or promotions?",
    ans: "Usually, we don’t offer discounts. But if you commit to a 3-6 month contract, you can receive a discount of up to 10-15%.",
  },
  {
    title:
      "How do you measure the success of your digital marketing campaigns?",
    ans: "We use a variety of metrics to track the performance of your campaigns, including website traffic, conversions, social media engagement, and return on investment (ROI).",
  },
  {
    title: "Can you help me create a social media presence from scratch?",
    ans: "Absolutely! We can help you establish a strong social media presence on platforms that align with your target audience.",
  },
  {
    title: "What is your approach to content marketing?",
    ans: "Our content marketing strategy focuses on creating high-quality, informative, and engaging content that resonates with your target audience. We tailor our content to meet your specific goals and optimize it for search engines.",
  },
  {
    title: "How much followers do you guarantee?",
    ans: "While we cannot guarantee a specific number of followers, we prioritize quality over quantity. Our focus is on attracting genuine and engaged followers who are interested in your brand or company. By implementing effective social media strategies, we aim to increase your following over time and convert these followers into qualified leads.",
  },
];

export default Faq;
