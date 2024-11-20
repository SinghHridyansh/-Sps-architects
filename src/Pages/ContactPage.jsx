import React from "react";
import MapComponent from "../Components/MapComponent";
import Contact from "../Components/Contact";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screenh-screen  flex  items-center flex-col ">
      {/* Contact Main section */}
      <section className="w-full h-screen p-8 md:p-10  flex  items-center justify-center flex-col gap-6 md:gap-10 bg-zinc-800 ">
        <div className="flex justify-center items-center flex-col gap-2">
          <h1 className=" text-project-yellow text-5xl md:text-7xl lg:text-9xl text-center font-extrabold">
            SPS ARCHITECTS
          </h1>
          <span className="text-project-yellow font-semibold text-sm md:text-xl lg:text-xl">
            WE BUILD WHAT YOU DREAM
          </span>
        </div>
        <button className="bg-transparent border-white hover:scale-110 ease-in-out duration-300 px-24 py-4 md:text-2xl lg:text-lg border-2 rounded-xl">
          <Link to="/work">PROJECTS</Link>
        </button>
        <button className="bg-white border-white hover:bg-project-yellow hover:border-project-yellow hover:scale-110 ease-in-out duration-300 text-black px-24 py-4 md:text-2xl lg:text-lg border-2 rounded-xl">
          <a href="#contact">BOOK US</a>
        </button>
      </section>

      {/* Address Section */}
      <section className="w-full h-max py-16 px-8 md:p-10 lg:py-24 bg-black  flex  items-center justify-center flex-col lg:flex-row gap-8 ">
        <div className="lg:w-2/3">
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-semibold">
            D-34 VIBHUTI KHAND, LUCKNOW
          </h1>
        </div>
        <div className="lg:w-1/3 w-full text-project-yellow flex justify-between items-center lg:flex-col lg:gap-8">
          <span className="text-lg md:text-xl">
            Hours <br /> Monday-Friday <br /> 10am-6pm
          </span>
          <span className="text-lg md:text-xl text-right lg:text-left">
            Phone
            <br />
            (555)555-555
          </span>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-max bg-project-gray flex  items-center justify-center flex-col gap-6">
        <MapComponent />
      </section>
      <Contact />
    </div>
  );
};

export default ContactPage;

// mt-24 md:mt-16
// w-full h-screen p-8 md:p-10  flex  items-center justify-center flex-col
// 6xl
// xl
// px-28 py-4

{
  /* <section className="w-full h-max p-8 md:p-10 bg-black flex  items-center justify-center gap-6">
<div className=" w-2/3">
  <h1 className="text-8xl font-semibold">
    D-34 VIBHUTI KHAND, LUCKNOW
  </h1>
</div>
<div className="w-1/3 flex justify-center items-center flex-col gap-12">
  <span className="text-xl">
    Hours <br /> Monday-Friday <br /> 10am-6pm
  </span>
  <span className="text-xl">
    Phone
    <br />
    (555)555-555
  </span>
</div>
</section> */
}

{
  /* <section className="w-full h-max py-16 px-8 md:p-20 lg:py-24 bg-project-gray flex  items-center justify-center flex-col gap-6">
        <MapComponent />
      </section> */
}
