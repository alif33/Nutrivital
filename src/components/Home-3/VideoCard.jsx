import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import playIcon from "../../assets/home-3/play-icon.png";

const VideoCard = ({ image, title }) => {
  return (
    <div className="font-urbanist">
      <div className="relative">
        <Image src={image} alt="Video Image" />
        <Image
          src={playIcon}
          alt="Play Icon"
          className="absolute top-[50%] left-[50%] cursor-pointer -translate-y-[50%] -translate-x-[50%]"
        />
      </div>
      <div className="">
        <p className="text-[#121212] mt-2 items-center flex flex-row justify-between text-lg font-normal leading-7">
          {title}
          <button className="">
            {" "}
            <FaArrowRight className="" />
          </button>
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
