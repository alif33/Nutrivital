"use client";
import React, { useRef, useState } from "react";
import Container from "../../ui/container";
import Card from "./Card";
import { FaArrowLeftLong, FaArrowRightLong } from "@/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

// import Carousel from "../Carousel";

const Testimonial = () => {
  const [swiper, setSwiper] = useState(null);
  const next = useRef(null);
  const prev = useRef(null);

  const breakPoints = {
    100: {
      slidesPerView: 1,
    },
    710: {
      slidesPerView: 2,
    },
    1015: {
      slidesPerView: 3,
    },
    1310: {
      slidesPerView: 3,
    },
  };

  const handleChange = swiper =>{
    setSwiper(swiper);
  }

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
          <div className="flex justify-center">
          <Swiper
            slidesPerView={1}
            breakpoints={breakPoints}
            spaceBetween={20}
            modules={[Navigation, Pagination, A11y]}
            navigation={{
              prevEl: prev.current,
              nextEl: next.current,
            }}
            pagination={{
              el: ".pagination-container",
            }}
            onInit={handleChange}
          >
            <SwiperSlide>
              <Card
                active={true}
                review={
                  "Salient has enhanced our user experience and allowed us to move faster than ever and our company is now positioned to scale. We've seen a rediculous growth of 80% in just a few months! "
                }
                name={"Jonathon Rees!"}
                designation={"CEO at Coffee"}
              />
            </SwiperSlide>
           <SwiperSlide>
            <Card
                review={
                  "Salient has enhanced our user experience and allowed us to move faster than ever and our company is now positioned to scale. We've seen a rediculous growth of 80% in just a few months! "
                }
                name={"Jonathon Rees!"}
                designation={"CEO at Coffee"}
              />
           </SwiperSlide>
            <SwiperSlide>
              <Card
                review={
                  "Salient has enhanced our user experience and allowed us to move faster than ever and our company is now positioned to scale. We've seen a rediculous growth of 80% in just a few months! "
                }
                name={"Jonathon Rees!"}
                designation={"CEO at Coffee"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                review={
                  "Salient has enhanced our user experience and allowed us to move faster than ever and our company is now positioned to scale. We've seen a rediculous growth of 80% in just a few months! "
                }
                name={"Jonathon Rees!"}
                designation={"CEO at Coffee"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                review={
                  "Salient has enhanced our user experience and allowed us to move faster than ever and our company is now positioned to scale. We've seen a rediculous growth of 80% in just a few months! "
                }
                name={"Jonathon Rees!"}
                designation={"CEO at Coffee"}
              />
            </SwiperSlide>
            </Swiper>
          </div>

          <div className="my-5">
            <div className="text-grey-500 font-urbanist font-normal">
              <span className="text-3xl  text-secondary-1 font-medium leading-8">
                {swiper ? swiper.realIndex + 1 : 1}
              </span>
              / {swiper ? swiper.slides.length : 1}
            </div>
            <div className="flex flex-row justify-end items-center gap-4">
              <button ref={prev} className="text-2xl text-grey-600 hover:text-brand-1">
                <FaArrowLeftLong />
              </button>
              <button ref={next} className="">
                <FaArrowRightLong className="text-2xl text-grey-600 hover:text-brand-1" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
