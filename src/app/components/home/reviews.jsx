"use client";

import React, { useState } from "react";
import Container from "../ui/Container";
import ReviewCard from "./ReviewCard";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import Carousel from "./Carousel";

const Reviews = () => {
  return (
    <div className="py-28">
      <Container>
        <h3 className="text-brand-2 mb-16 text-center leading-tight font-semibold font-poppins lg:text-h3 text-[32px]">
          Trusted by <br /> over 4,000 clients worldwide
        </h3>
        {/* carosule container */}
        <div className="">
          <div className="flex flex-col lg:flex-row">
            <ReviewCard
              active={true}
              review={
                "Salient has enhanced our user experience and allowed us to move faster than ever and our company is now positioned to scale. We've seen a rediculous growth of 80% in just a few months! "
              }
              name={"Jonathon Rees!"}
              designation={"CEO at Coffee"}
            />
            <ReviewCard
              review={
                "Salient has enhanced our user experience and allowed us to move faster than ever and our company is now positioned to scale. We've seen a rediculous growth of 80% in just a few months! "
              }
              name={"Jonathon Rees!"}
              designation={"CEO at Coffee"}
            />
            <ReviewCard
              review={
                "Salient has enhanced our user experience and allowed us to move faster than ever and our company is now positioned to scale. We've seen a rediculous growth of 80% in just a few months! "
              }
              name={"Jonathon Rees!"}
              designation={"CEO at Coffee"}
            />
          </div>

          <div className="my-5">
            <div className="text-grey-500 font-urbanist font-normal">
              <span className="text-3xl  text-secondary-1 font-medium leading-8">
                3
              </span>
              / 15
            </div>
            <div className="flex flex-row justify-end items-center gap-4">
              <button className="text-2xl text-grey-600">
                <IoMdArrowRoundBack />
              </button>
              <button className="">
                <FaArrowRightLong className="text-2xl text-brand-1" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
