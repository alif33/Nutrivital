import React from "react";
import Image from "next/image";
import "./menu.css";
import Container from "@/components/ui/container";
import List from "./List";
import { FaLocationCrosshairs } from "@/icons";

const Menu = () => {
  return (
    <div className="font-urbanist mt-20 lg:mt-40 bg-[#2A9D8F14] pt-20 pb-28">
      <Container>
        <div className="flex flex-col lg:flex-row gap-7 lg:gap-28">
          {/* left */}
          <div className="lg:w-6/12 lg:text-left text-center">
            <h2 className="text-[#110904] text-4xl lg:text-[52px] font-semibold">
              Try Our Healthy Menu
            </h2>
            <p className="text-base text-[#969696] leading-6 font-normal mt-4">
              We always to provide the best value for you and your health, join
              us to maximize the benefits
            </p>
            <div className="flex flex-col gap-5 mt-14">
              <List cssStyle={"activeList"} name={"Breakfast Recipes"}>
                <FaLocationCrosshairs />
              </List>
              <List name={"Breakfast Recipes"}>
                <FaLocationCrosshairs />
              </List>
              <List name={"Holiday recipes"}>
                <FaLocationCrosshairs />
              </List>
            </div>
          </div>
          {/* right */}
          <div className="lg:w-6/12">
            <Image 
                width={505}
                height={611}
                src="/images/banners/menu.png" 
                alt="Menu Image" 
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menu;