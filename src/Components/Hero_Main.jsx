import React from "react";
import "./Hero_Main.css";

const Hero_Main = () => {
  return (
    <div className="bg-black  w-full md:h-screen h-max p-8 md:flex md:justify-center md:items-center md:gap-16">
      <div className="mt-24 md:mt-10  relative ">
        {/* Profile Card */}
        <div
          className=" bg-project-purple rounded-2xl p-6 md:px-10 md:py-20 flex
        flex-col items-end gap-4 relative "
        >
          <div className="hero-image w-fit rounded-full overflow-hidden bg-pink-600 absolute">
            <img
              src="./Assets/Avatar.jpg"
              alt=""
              className="w-56 h-56 md:h-60 md:w-60"
            />
          </div>

          <div className="hero-heading text-white mt-44 w-full tracking-widest">
            <h1 className="text-6xl">
              <span className="font-thin">Im,</span>
              <br />
              Siddharth
              <br />
              Pratap
              <br />
              Singh
            </h1>
          </div>

          {/* <div className="w-full h-10 bg-red-400"></div> */}

          {/* Disc  */}

          <div className="w-fit h-fit absolute right-0 bottom-[-60px]  md:right-10 md:bottom-10">
            <img src="./Assets/Disc.png" alt="" className="w-28 h-28" />
          </div>
        </div>

        <div className="flex justify-between my-20 flex-col gap-8 md:hidden ">
          <p className="w-full font-medium text-2xl ">About Me</p>
          <p className="w-full font-light tracking-widest text-lg md:w-10/12 ">
            I started working as a designer when I was in high school. I was
            fully optimistic about drawing.
            <br />
            <br />I can do anything any time and not wait for the right moment.
          </p>
        </div>
      </div>

      {/* Portfolio */}

      <div className="mt-10 mb-20 md:mt-24  relative  md:w-3/6 md:flex md:flex-col md:justify-center ">
        <div className="my-5 px-5 py-10 max-w-md bg-gray-100 rounded-2xl shadow-lg md:hidden">
          <h1 className="text-6xl font-semibold tracking-widest text-black mb-8 md:text-9xl md:font-extralight">
            Portfolio
          </h1>
          {/* Flamingo Image Section */}
          <div className="mb-5">
            <img
              src="./Assets/Asset_1.jpg"
              alt="Flamingo"
              className="w-full rounded-xl object-cover"
            />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 grid-rows-1 gap-4">
            {/* Clients Card */}
            <div className="flex items-center justify-center p-4 bg-gray-800 rounded-xl">
              <div className="text-center">
                {/* Apple logo as an SVG/icon */}
                <i className="text-white text-4xl mb-2">🍏</i>
                <p className="text-white">Clients</p>
              </div>
            </div>

            {/* Projects and Awards */}
            {/* px-4 py-16 */}
            <div className="h-64 bg-red-400 rounded-xl flex flex-col items-center justify-center overflow-hidden">
              <div className=" bg-teal-200 w-full h-full text-gray-700 flex justify-center items-center">
                <div className="text-center ">
                  <h2 className="text-2xl font-bold">251</h2>
                  <p className="">Projects</p>
                </div>
              </div>
              <div className="bg-purple-400 w-full text-white h-full flex justify-center items-center">
                <div className="text-center mt-4">
                  <h2 className="text-2xl font-bold">156</h2>
                  <p className="">Awards</p>
                </div>
              </div>
            </div>
          </div>
          {/* Global Design Awards */}

          <div className="mt-5 flex text-gray-700">
            <div className="w-2/4 flex overflow-hidden rounded-l-xl">
              <img src="./Assets/Asset_7.png" alt="" className="" />
            </div>

            <div className="p-4 bg-yellow-400 rounded-r-xl flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold">172</h2>
                <p className="text-black">Global Design Awards</p>
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 grid-rows-2 gap-4 bg-zinc-500"></div> */}
        </div>

        {/* This the grid box that will be shown on laptop and above screens */}

        {/* Portfolio Grid box */}
        <div className="md:flex md:flex-col md:gap-16">
          <h1 className="text-base font-semibold tracking-widest text-black  md:text-8xl md:font-light md:text-white">
            Portfolio
          </h1>

          <div class="parent hidden md:grid w-4/4">
            <div class="div1">
              <img
                src="./Assets/Asset_1.jpg"
                alt="Flamingo"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div class="div2">
              {" "}
              <div className=" bg-teal-200 w-full h-full text-gray-700 flex justify-center items-center">
                <div className="text-center ">
                  <h2 className="text-2xl font-bold">251</h2>
                  <p className="">Projects</p>
                </div>
              </div>
            </div>
            <div class="div3">
              <div className="bg-purple-400 w-full text-white h-full flex justify-center items-center">
                <div className="text-center">
                  <h2 className="text-2xl font-bold">156</h2>
                  <p className="">Awards</p>
                </div>
              </div>
            </div>
            <div class="div4 flex items-center justify-center p-4 bg-gray-800 ">
              <div className="text-center">
                {/* Apple logo as an SVG/icon */}
                <i className="text-white text-4xl ">🍏</i>
                <p className="text-white">Clients</p>
              </div>
            </div>
            <div class="div5 flex overflow-hidden">
              <img src="./Assets/Asset_7.png" alt="" className="" />
            </div>
            <div class="div6 p-4 bg-yellow-400  flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold">172</h2>
                <p className="text-black">Global Design Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_Main;
