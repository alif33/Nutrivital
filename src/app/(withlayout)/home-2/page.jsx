import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Shedule from "@/components/Home/Shedule";
import Team from "@/components/Home/Team";
import Work from "@/components/Home/Work";

import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Shedule />
      <Work />
      <Team />
    </div>
  );
};

export default HomePage;
