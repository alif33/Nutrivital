import React from "react";
import Container from "../Container/Container";
import videoImage1 from "../../assets/home-3/video-image-1.png";
import videoImage2 from "../../assets/home-3/video-image-2.png";
import videoImage3 from "../../assets/home-3/video-image-3.png";
import VideoCard from "./VideoCard";

const FoodVideo = () => {
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
          <VideoCard
            title={"Three-pronged intermediate movement"}
            image={videoImage1}
          />
          <VideoCard title={"Basic style of flexibility"} image={videoImage2} />
          <VideoCard title={"Reverse "} image={videoImage3} />
        </div>
      </Container>
    </div>
  );
};

export default FoodVideo;
