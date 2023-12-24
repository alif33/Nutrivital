"use client";
import React, { useState, useRef } from "react";
import Container from "@/components/ui/container";
import BlogTitle from "@/components/ui/blog-title";
import Card from "./card";
import { IoIosArrowBack, IoIosArrowForward } from "@/icons"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";

const BlogSection = ({ sectionTitle }) => {
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
    <Container>
      <div className="flex flex-row justify-between mt-7">
        <BlogTitle sectionTitle={sectionTitle} />
        <div className="flex flex-row gap-3">
          <button
            ref={prev}
            className="text-lg  flex items-center justify-center bg-grey-200 px-1 lg:px-3 py-0 lg:py-3 rounded-full"
          >
            <IoIosArrowBack alignmentBaseline="central" />
          </button>
          <button
            ref={next}
            className="text-lg flex items-center justify-center shadow-md shadow-grey-300 px-1 lg:px-3 rounded-full"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="flex mt-7">
        <Swiper
          slidesPerView={1}
          breakpoints={breakPoints}
          spaceBetween={5}
          modules={[Navigation, Pagination, A11y]}
          navigation={{
            prevEl: prev.current,
            nextEl: next.current,
          }}
          // pagination={{
          //   el: ".pagination-container",
          // }}
          onInit={handleChange}
        >
          <SwiperSlide>
            <Card
              image="/images/blogs/blog-post-1.svg"
              author={"BLOG, Saas"}
              date={"11 May, 2023"}
              title={"Vitality in Every Bite"}
              desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="/images/blogs/blog-post-2.svg"
              author={"BLOG, Saas"}
              date={"11 May, 2023"}
              title={"Nourish Your Way to Wellness"}
              desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="/images/blogs/blog-post-3.svg"
              author={"BLOG, Saas"}
              date={"11 May, 2023"}
              title={"Fueling Healthy Lifestyle Choices"}
              desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="/images/blogs/blog-post-1.svg"
              author={"BLOG, Saas"}
              date={"11 May, 2023"}
              title={"Vitality in Every Bite"}
              desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="/images/blogs/blog-post-2.svg"
              author={"BLOG, Saas"}
              date={"11 May, 2023"}
              title={"Nourish Your Way to Wellness"}
              desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="/images/blogs/blog-post-3.svg"
              author={"BLOG, Saas"}
              date={"11 May, 2023"}
              title={"Fueling Healthy Lifestyle Choices"}
              desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="/images/blogs/blog-post-1.svg"
              author={"BLOG, Saas"}
              date={"11 May, 2023"}
              title={"Vitality in Every Bite"}
              desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="/images/blogs/blog-post-2.svg"
              author={"BLOG, Saas"}
              date={"11 May, 2023"}
              title={"Nourish Your Way to Wellness"}
              desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="/images/blogs/blog-post-3.svg"
              author={"BLOG, Saas"}
              date={"11 May, 2023"}
              title={"Fueling Healthy Lifestyle Choices"}
              desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default BlogSection;
