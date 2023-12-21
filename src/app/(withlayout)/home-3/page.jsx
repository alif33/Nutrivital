import FoodVideo from "@/components/Home-3/FoodVideo";
import Hero from "@/components/Home-3/Hero";
import Menu from "@/components/Home-3/Menu";
import Nutrition from "@/components/Home-3/Nutrition";

import Sponsor from "@/components/Home-3/Sponsor";
import React from "react";

const HomeThreePage = () => {
  return (
    <div>
      <Hero />
      <Sponsor />
      <Nutrition />
      <Menu />
      <FoodVideo />
    </div>
  );
};

export default HomeThreePage;
