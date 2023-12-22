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
        <div className="mb-16">
          <h3 className="text-brand-2 text-center leading-tight font-semibold font-poppins lg:text-h3 text-[32px]">
            Great Feedbacks from <span className="text-[#2A9D8F]">our clients</span> 
          </h3>
          <p className="text-center text-[#1A1A1A] pt-3">{"we'll share insights, techniques, and practices that can help you manage stress, increase happiness"}</p>
        </div>
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
