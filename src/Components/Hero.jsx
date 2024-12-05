import React from "react";
import Header from "./Header";
import SlidingNav from "./SlidingNav";

const Hero = () => {
  return (
    <div className="bg-black  w-full h-max p-8 md:p-12" id="home">
      <div className="my-10 md:my-20">
        <div className="flex justify-center items-center flex-col gap-2">
          <h2 className="text-2xl font-semibold md:text-5xl">OUR EXPERTISE</h2>
        </div>

        {/* Services Card */}
        <div className="mt-16 md:mt-28 flex gap-12 md:gap-20 lg:gap-32 flex-col">
          {/* Card 1 */}
          <div className="flex flex-col-reverse md:flex-row md:gap-16 gap-4 ">
            <div className="Hero-text md:w-2/4 flex justify-center flex-col ">
              <h1 className="expertiseHeading">Schematic Design</h1>

              <h3 className=" expertisePoints">
                <ul className=" flex flex-col gap-2 ">
                  <li className="leading-tight">
                    Preliminary layouts and architectural drawings.
                  </li>
                  <li className="leading-loose">
                    Client feedback integration.
                  </li>
                  <li className="leading-tight">
                    Building orientation and sustainability considerations.
                  </li>
                </ul>
              </h3>
            </div>

            <div className="img-container w-full md:p-4 md:w-2/4 rounded-xl overflow-hidden ">
              <img
                src="./expertise/SchematicDesign.webp"
                alt=""
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Card 2 */}

          <div className="flex flex-col-reverse justify-center items-center md:flex-row-reverse md:gap-16 gap-4 ">
            <div className="Hero-text md:w-2/4 flex justify-center flex-col text-left md:text-left lg:text-left ">
              <h1 className="expertiseHeading">Architectural Design</h1>

              <h3 className=" expertisePoints">
                <ul className="flex flex-col gap-2 ">
                  <li className="leading-tight">
                    Residential Design: Custom homes, renovations, villas &
                    farmhouses
                  </li>
                  <li className="leading-tight">
                    Commercial Design: Office buildings, retail spaces, and
                    mixed-use developments.
                  </li>
                </ul>
              </h3>
            </div>

            <div className="img-container w-full md:p-4 md:w-2/4 rounded-xl overflow-hidden ">
              <img
                src="./expertise/ArchDesign.webp"
                alt=""
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Card 3 */}

          <div className="flex flex-col-reverse md:flex-row md:gap-16 gap-4 ">
            <div className="Hero-text md:w-2/4 flex justify-center flex-col ">
              <h1 className="expertiseHeading">Construction Administration</h1>

              <h3 className=" expertisePoints">
                <ul className="leading-tigth flex flex-col gap-2">
                  <li>Site visits and progress monitoring.</li>
                  <li>Ensuring adherence to plans and specifications.</li>
                </ul>
              </h3>
            </div>

            <div className="img-container w-full md:p-4 md:w-2/4 rounded-xl overflow-hidden ">
              <img
                src="./expertise/ConstrucAdmin.webp"
                alt=""
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
