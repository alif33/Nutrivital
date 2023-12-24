import Image from "next/image";
import React from "react";
import { FaArrowRight } from "@/icons";

const VideoCard = ({ image, title, half }) => {
  return (
    <div className="font-urbanist">
      <div className="relative">
        <Image 
            width={half? 203: 519}
            height={397}
            src={image} 
            alt="Video Image" 
        />
        <Image
          width={55}
          height={51}
          src={"/placeholders/icons/play-icon.svg"}
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