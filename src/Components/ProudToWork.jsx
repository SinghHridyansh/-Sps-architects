import React from "react";

const ProudToWork = () => {
  return (
    <div className="bg-white text-black w-full h-max px-8 py-10 flex justify-center flex-col gap-7 md:gap-20">
      <div className="flex justify-center items-center flex-col gap-2">
        <p className="font-medium text-sm md:text-lg">AMONG OUR CLIENTS</p>
        <h2 className="text-2xl font-semibold md:text-5xl">
          PROUD TO WORK WITH
        </h2>
      </div>
      <div className="mb-10 w-full h-max  flex justify-center align-center flex-wrap gap-8 md:gap-28">
        <img src="./BrandLogos/Chanel.png" alt="" className="ProudImage" />
        <img src="./BrandLogos/Infiniti.png" alt="" className="ProudImage" />
        <img src="./BrandLogos/Quiksilver.png" alt="" className="ProudImage" />
        <img src="./BrandLogos/Ola.png" alt="" className="ProudImage" />
        <img src="./BrandLogos/nike.png" alt="" className="ProudImage" />
      </div>
    </div>
  );
};

export default ProudToWork;
