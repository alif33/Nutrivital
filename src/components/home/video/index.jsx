"use client";
import React, { useState, useRef } from "react";
import Container from "@/components/ui/container";
import Card from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "@/icons";
import { A11y, Navigation, Pagination } from "swiper/modules";

const Video = () => {
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
    <div className="bg-white py-14 font-urbanist">
      <Container>
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-8 text-center lg:text-left lg:gap-28">
          <h2 className="lg:w-7/12 text-[32px] lg:text-5xl text-[#141414] font-semibold leading-[50px] ">
            Watch Healthy food videos for{" "}
            <span className="text-brand-1">healthy body</span>
          </h2>
          <p className="lg:w-5/12 text-base font-normal leading-6">
            {
              "In these videos, we'll share insights, techniques, and practices that can help you manage stress, increase happiness, and achieve optimal Nutrition Plan"
            }
          </p>
        </div>
        {/* bottm  */}
        <div className="mt-14">
          <div className="flex flex-row justify-end gap-3 my-3">
            <button
              ref={prev}
              className="text-lg flex items-center justify-center shadow-sm bg-grey-200 px-1 lg:px-3 py-1 lg:py-3 rounded-full"
            >
              <IoIosArrowBack alignmentBaseline="central" />
            </button>
            <button
              ref={next}
              className="text-lg flex items-center justify-center shadow-md shadow-grey-300 px-1 lg:px-3 py-1 lg:py-3 rounded-full"
            >
              <IoIosArrowForward />
            </button>
          </div>
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
                title={"Three-pronged intermediate movement"}
                image={"/images/videos/video-poster-1.svg"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title={"Basic style of flexibility"}
                image={"/images/videos/video-poster-2.svg"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title={"Three-pronged intermediate movement"}
                image={"/images/videos/video-poster-1.svg"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title={"Basic style of flexibility"}
                image={"/images/videos/video-poster-2.svg"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title={"Three-pronged intermediate movement"}
                image={"/images/videos/video-poster-1.svg"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title={"Basic style of flexibility"}
                image={"/images/videos/video-poster-2.svg"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Video;