import React from "react";

const NewHero = () => {
  return (
    <div className="bg-black w-full md:h-screen h-max ">
      <div className="flex flex-col justify-center items-center w-full h-screen gap-4">
        <div className="logo h-2/6 flex justify-center items-center ">
          <img src="./Assets/SPS-logo.png" alt="" className="h-[100%]" />
        </div>
        <div className="flex justify-center flex-col items-center gap-4 md:gap-8">
          <h2 className="text-2xl md:text-5xl lg:text-4xl font-semibold">
            FROM IDEA TO REALITY
          </h2>
          <button className="bg-project-yellow text-black px-10 py-3 md:px-18 md:py-4 lg:px-10 lg:py-3 md:text-2xl lg:text-lg font-normal lg:font-normal rounded-lg hover:scale-110 ease-in-out duration-300">
            <a href="#contact" className="">
              Contact Us
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
