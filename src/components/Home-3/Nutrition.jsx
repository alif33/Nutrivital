"use server";
import React from "react";
import Container from "../Container/Container";
import NutritionCard from "./NutritionCard";
import { LuApple } from "react-icons/lu";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { RiMentalHealthFill } from "react-icons/ri";

const Nutrition = () => {
  return (
    <div className="font-urbanist mt-16 lg:mt-32 ">
      <Container>
        <div className="">
          {/* top */}
          <div className="">
            <div className="flex flex-col  lg:flex-row gap-5 lg:gap-40 items-center">
              <h1 className="text-[#141414] w-full lg:w-6/12 text-[32px] lg:text-5xl text-center lg:text-left font-semibold leading-[54px] ">
                An innovative approach to your{" "}
                <span className="text-[#2A9D8F]">nutrition</span>
              </h1>
              <p className="w-full text-base text-center lg:w-5/12 font-normal leading-6">
                We provide a variety of services and resources dedicated to
                helping you achieve balance and peace in your life.
              </p>
            </div>
          </div>
          {/* bottom */}
          <div className="mt-14 lg:flex-row flex-col flex gap-5 justify-between">
            <NutritionCard
              title={"Learn to eat healthy food"}
              details={
                "Lorem ipsum dolor sit amet ecteturolmer adipiscing elit sed do eiusmod."
              }
            >
              <LuApple />
            </NutritionCard>
            <NutritionCard
              cssStyle={"activeCard"}
              title={"Learn to eat healthy food"}
              details={
                "Lorem ipsum dolor sit amet ecteturolmer adipiscing elit sed do eiusmod."
              }
            >
              <FaHandHoldingMedical />
            </NutritionCard>
            <NutritionCard
              title={"Learn to eat healthy food"}
              details={
                "Lorem ipsum dolor sit amet ecteturolmer adipiscing elit sed do eiusmod."
              }
            >
              <RiMentalHealthFill />
            </NutritionCard>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nutrition;
