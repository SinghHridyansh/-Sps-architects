import React from "react";
import Header from "./Header";
import SlidingNav from "./SlidingNav";

const Hero = () => {
  return (
    <div className="bg-black  w-full h-max p-12" id="home">
      <div className="my-10 md:my-20">
        <div className="flex justify-center items-center flex-col gap-2">
          <p className="font-medium text-sm md:text-lg">SERVICES</p>
          <h2 className="text-2xl font-semibold md:text-5xl">
            FROM IDEA TO REALITY
          </h2>
        </div>
        {/* <div className="flex justify-between  flex-col gap-8 md:flex-row">
          <p className="w-full font-medium text-2xl ">Latest projects</p>
          <p className="w-full font-extralight tracking-wide text-base md:w-10/12">
            This is a space to welcome visitors to the site. As the first text
            readers encounter, this copy should clearly convey what the site is
            about. Grab their attention with captivating and inviting text, and
            add an image or video for extra engagement.
          </p>
        </div> */}

        {/* Services Card */}
        <div className="mt-16 md:mt-28 flex gap-20 md:gap-20 lg:gap-40 flex-col">
          {/* Card 1 */}
          <div className="flex flex-col-reverse md:flex-row md:gap-16 gap-4">
            <div className="Hero-text md:w-2/4 flex justify-center flex-col ">
              <h1 className="text-4xl md:text-4xl lg:text-6xl leading-tight  md:leading-tight ">
                Building & <br /> Floor planning
              </h1>
              <br />
              <h3 className="text-lg md:text-xl font-light lg:text-3xl">
                Sustainability, Consciousness and Innovation
              </h3>
            </div>

            <div className="img-container w-full md:p-4 md:w-2/4 rounded-xl overflow-hidden ">
              <img src="./Assets/Asset_4.jpg" alt="" className="rounded-xl" />
            </div>
          </div>

          {/* Card 2 */}

          <div className="flex flex-col-reverse md:flex-row-reverse md:gap-16 gap-4">
            <div className="Hero-text md:w-2/4 flex justify-center flex-col text-right ">
              <h1 className="text-4xl md:text-4xl lg:text-6xl leading-tight  md:leading-tight ">
                Interior Design <br />& Decor
              </h1>
              <br />
              <h3 className="text-lg md:text-xl font-light lg:text-3xl">
                Sustainability, Consciousness and Innovation
              </h3>
            </div>

            <div className="img-container w-full md:p-4 md:w-2/4 rounded-xl overflow-hidden ">
              <img src="./Assets/Asset_2.jpg" alt="" className="rounded-xl" />
            </div>
          </div>

          {/* Card 3 */}

          <div className="flex flex-col-reverse md:flex-row md:gap-16 gap-4">
            <div className="Hero-text md:w-2/4 flex justify-center flex-col ">
              <h1 className="text-4xl md:text-4xl lg:text-6xl leading-tight  md:leading-tight ">
                Building & <br /> Floor planning
              </h1>
              <br />
              <h3 className="text-lg md:text-xl font-light lg:text-3xl">
                Sustainability, Consciousness and Innovation
              </h3>
            </div>

            <div className="img-container w-full md:p-4 md:w-2/4 rounded-xl overflow-hidden ">
              <img src="./Assets/Asset_4.jpg" alt="" className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
