import React from "react";
import Hero from "../Components/Hero";
import ProudToWork from "../Components/ProudToWork";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Hero_Main from "../Components/Hero_Main";
import Divider from "../Components/Divider";
import NewHero from "../Components/NewHero";
import ExplandableCards from "../Components/ExplandableCards";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <NewHero />
      {/* <Hero_Main /> */}
      {/* <Divider /> */}
      <Hero />
      <ExplandableCards />
      <ProudToWork />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
};

export default Home;
