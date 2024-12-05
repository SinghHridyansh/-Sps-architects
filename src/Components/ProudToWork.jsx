import React from "react";

const ProudToWork = () => {
  return (
    <div className="bg-white text-black w-full h-max px-8 py-10 flex justify-center flex-col gap-7 md:gap-20">
      <div className="flex justify-center items-center flex-col gap-2 ">
        {/* <p className="font-medium text-sm md:text-lg">AMONG OUR CLIENTS</p> */}
        <h2 className="text-2xl font-semibold md:text-5xl">OUR SERVICES</h2>
      </div>
      <div className="mb-10 w-full h-max  flex flex-col justify-center align-center md:flex-row lg:flex-row  gap-8 md:gap-2 lg:gap-20 ">
        <div className="md:w-32 lg:w-40 flex flex-col justify-center items-center gap-6 ">
          <img
            src="./Assets/services/floor_planning.webp"
            alt=""
            className="ProudImage"
          />
          <span className="md:text-center">Floor Planning</span>
        </div>

        <div className="md:w-32 lg:w-40 flex flex-col justify-center items-center gap-6 ">
          <img
            src="./Assets/services/interior_designing.webp"
            alt=""
            className="ProudImage"
          />
          <span className="md:text-center">Interior designing</span>
        </div>

        <div className="md:w-32 lg:w-40 flex flex-col justify-center items-center gap-6 ">
          <img
            src="./Assets/services/landscape_desing.webp"
            alt=""
            className="ProudImage"
          />
          <span className="md:text-center">Landscape designing</span>
        </div>

        <div className="md:w-32 lg:w-40 flex flex-col justify-center items-center gap-6 ">
          <img
            src="./Assets/services/project_management.webp"
            alt=""
            className="ProudImage"
          />
          <span className="md:text-center">Project Management</span>
        </div>

        <div className="md:w-32 lg:w-40 flex flex-col justify-center items-center gap-6 ">
          <img
            src="./Assets/services/DigitalViz.webp"
            alt=""
            className="ProudImage"
          />
          <span className="grid text-center ">
            Digital Visualization <br />
            Services
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProudToWork;
