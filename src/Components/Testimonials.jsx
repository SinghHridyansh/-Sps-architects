import React from "react";
import Carousel from "./Carousel";

const testimonials = [
  {
    id: 1,
    title: "MOIZ RUDENS, CA",
    paragraph:
      "“This is the space to share a review from one of the business's clients or customers.”",
  },
  {
    id: 2,
    title: "JAMES SAHLEW, MN",
    paragraph:
      "“Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.”",
  },
  {
    id: 3,
    title: "HALIT KEIGAD, FL",
    paragraph:
      "“Share something positive a past client has said and encourage potential clients to get onboard...”",
  },
];

const TestimonialCard = ({ title, paragraph }) => {
  return (
    <div className="mb-10 w-full md:px-10 md:w-6/6 h-36 md:h-56 px-6 flex justify-center items-center text-center flex-col gap-2  rounded-2xl">
      <p className="text-xs md:text-base">{paragraph}</p>
      <br />
      <h3 className="text-sm font-medium md:text-base md:font-semibold">
        {title}
      </h3>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-project-gray text-black w-full h-max px-8 py-10 flex justify-center items-center flex-col gap-7 md:gap-6">
      <div className="flex justify-center items-center flex-col gap-4">
        <p className="font-medium text-sm md:text-lg">TESTIMONIALS</p>
        <h2 className="text-2xl font-semibold md:text-5xl">
          STRAIGHT FROM THE FEED
        </h2>
        <div className="flex justify-center items-center max-w-lg mt-3">
          <Carousel>
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                title={t.title}
                paragraph={t.paragraph}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
