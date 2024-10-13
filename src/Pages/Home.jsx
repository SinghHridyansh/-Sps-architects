import React from "react";
import Hero from "../Components/Hero";
import ProudToWork from "../Components/ProudToWork";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Hero_Main from "../Components/Hero_Main";
import Divider from "../Components/divider";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <Hero_Main />
      <Divider />
      <Hero />
      <ProudToWork />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
