import React from "react";
import Container from "@/components/ui/container";
import Card from "./card";

const Video = () => {
  return (
    <div className="bg-white pt-28 pb-20 font-urbanist">
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
        <div className="mt-20 flex flex-col  lg:flex-row gap-6">
          <Card
            title={"Three-pronged intermediate movement"}
            image={"/images/videos/video-poster-1.svg"}
          />
          <Card
            title={"Basic style of flexibility"}
            image={"/images/videos/video-poster-2.svg"}
          />
          <Card
            title={"Reverse "}
            half={true}
            image={"/images/videos/video-poster-3.svg"}
          />
        </div>
      </Container>
    </div>
  );
};

export default Video;
