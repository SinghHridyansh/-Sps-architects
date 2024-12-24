import React from "react";
import Contact from "../Components/Contact";
import ProudToWork from "../Components/ProudToWork";
import Testimonials from "../Components/Testimonials";

const values = [
  {
    id: 1,
    title: "PASSION",
    textContent:
      "We're obsessed with creating exceptional social media experiences.",
  },
  {
    id: 2,
    title: "INNOVATION",
    textContent:
      "We embrace new trends and technologies to stay ahead of the curve.",
  },
  {
    id: 3,
    title: "COLLABORATION",
    textContent: "We believe in the power of teamwork and partnership.",
  },
  {
    id: 4,
    title: "RESULTS",
    textContent: "Our clients' success is our ultimate measure of success.",
  },
  {
    id: 5,
    title: "AUTHENTICITY",
    textContent: "We value genuine connections and honest communication.",
  },
  {
    id: 6,
    title: "EMPATHY",
    textContent: "We understand your world.",
  },
];

const team = [
  {
    id: 1,
    name: "Riley Carter",
    position: "CONTENT CRAFTER",
    quote: "Weaving words into wonders",
    imageUrl: "./Assets/avatar_1.webp",
  },
  {
    id: 2,
    name: "Maya Ramirez",
    position: "ANALYTICS ACE",
    quote: "Decoding the data jungle",
    imageUrl: "./Assets/avatar_2.webp",
  },
  {
    id: 3,
    name: "Ali Torel",
    position: "SOCIAL SUPERSTAR",
    quote: "Ruling the social realm",
    imageUrl: "./Assets/avatar_3.webp",
  },
];

const ValueCard = ({ title, textContent }) => {
  return (
    <div className="py-3 px-10 min-h-28 md:w-72 md:h-32 lg:w-96 ">
      <h3 className="text-project-yellow text-sm mb-2 md:mb-3 lg:mb-3">
        {title}
      </h3>
      <span className="text-sm font-extralight tracking-wider">
        {textContent}
      </span>
    </div>
  );
};

const TeamCard = ({ name, position, quote, imageUrl }) => {
  return (
    <div className="text-center max-w-xs mx-auto md:max-w-md ">
      <div className="flex flex-col overflow-hidden rounded-xl">
        <img src={imageUrl} alt="" className="max-w-xs md:max-w-md" />
        <div className="bg-project-yellow p-4 text-center w-full">
          <p className="font-base text-sm tracking-wider">{quote}</p>
        </div>
      </div>
      <h2 className="mt-2 text-2xl tracking-wide">{name}</h2>
      <span className="mt-2 text-sm font-medium">{position}</span>
    </div>
  );
};

const Studio = () => {
  return (
    <div className="w-full h-max">
      {/* Studio Main Section Text*/}
      <div className="bg-black p-8 md:p-10">
        <div className="mt-24  flex justify-center items-center text-center">
          <div className="heading flex justify-center items-center flex-col gap-4 md:gap-8">
            <p className="md:font-semibold">OUR STORY</p>
            <h1 className="text-2xl font-medium md:text-3xl lg:text-5xl">
              Our studio is the heart of creativity and innovation.
            </h1>
            <span className="text-center font-normal text-sm leading-6 tracking-widest md:w-5/6 lg:w-3/6 md:text-base">
              Rooted in a passion for design, our team of architects, designers,
              and planners collaborate to shape spaces that inspire and endure.
              With a seamless blend of functionality, aesthetics, and
              sustainability, we craft environments that reflect the unique
              aspirations of our clients.
            </span>
          </div>
        </div>

        <div className="mt-12 lg:mt-24">
          <img
            src="./Assets/Asset_1.jpg"
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Values Section */}

        <div className="flex justify-center flex-col text-center py-10 md:py-24">
          <h1 className="text-2xl font-semibold md:text-5xl">OUR VALUES</h1>

          <div className="flex justify-center items-center gap-3 md:gap-3 lg:gap-3 flex-col mt-8 md:mt-12 md:justify-evenly md:flex-row md:flex-wrap">
            {values.map((value) => (
              <ValueCard
                key={value.id}
                textContent={value.textContent}
                title={value.title}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Studio Team Section */}
      <div className="bg-project-gray text-black">
        <div className="p-6 md:py-24">
          <div className="heading flex justify-center items-center flex-col gap-4">
            <h1 className="text-2xl font-semibold md:text-5xl">OUR TEAM</h1>
            <span className="text-center font-light text-sm leading-6 tracking-widest md:w-5/6 lg:w-3/6 md:text-base">
              Our strength lies in our people. Our team is a diverse group of
              visionary architects, creative designers, and skilled planners,
              all driven by a shared commitment to excellence. Together, we
              bring a wealth of experience and fresh perspectives to every
              project, ensuring designs that are both innovative and enduring.
            </span>
          </div>

          {/* <div className="images py-8 flex flex-col justify-center items-center gap-10 mt-8 md:mt-12 md:justify-evenly md:flex-row md:flex-wrap">
            {team.map((member) => (
              <TeamCard
                name={member.name}
                position={member.position}
                quote={member.quote}
                imageUrl={member.imageUrl}
              />
            ))}
          </div> */}
        </div>
      </div>

      {/* Awards */}

      {/* <div className="bg-white text-black w-full h-max px-8 py-10  md:py-24 flex justify-center flex-col gap-8 md:gap-20">
        <div className="flex justify-center items-center flex-col gap-3">
          <h2 className="text-2xl font-semibold md:text-5xl">AWARDS</h2>
          <span className="text-center font-normal text-sm leading-6 tracking-widest md:w-3/6 md:text-base mt-8 ">
            UmpaUmpa has been recognized for our exceptional work in the social
            media industry. We are proud to have received numerous awards and
            accolades for our innovative campaigns and outstanding results.
          </span>
        </div>
        <div className="mb-10 w-full h-max  flex justify-center align-center flex-wrap gap-10 md:gap-28">
          <img src="./BrandLogos/Chanel.png" alt="" className="ProudImage" />
          <img src="./BrandLogos/Infiniti.png" alt="" className="ProudImage" />
          <img
            src="./BrandLogos/Quiksilver.png"
            alt=""
            className="ProudImage"
          />
          <img src="./BrandLogos/Ola.png" alt="" className="ProudImage" />
          <img src="./BrandLogos/nike.png" alt="" className="ProudImage" />
        </div>
      </div> */}

      <ProudToWork />
      {/* <Testimonials /> */}

      <Contact />
    </div>
  );
};

export default Studio;
