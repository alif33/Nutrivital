import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const MemberCard = ({
  image,
  name,
  nameColor,
  designation,
  desiColor,
  btnBg,
  btnColor,
  bg,
}) => {
  return (
    <div className="w-full">
      <Image className="h-96 w-full" src={image} alt="Member Image" />
      <div
        className={` py-4 shadow-2xl  shadow-base-400 px-5 flex flex-row justify-between ${bg}`}
      >
        {/* Content */}
        <div className="">
          <h4 className={`text-lg  ${nameColor} font-medium font-urbanist`}>
            {name}
          </h4>
          <p className={` text-xs font-normal italic ${desiColor}`}>
            {designation}
          </p>
        </div>
        {/* Icons */}
        <div className="flex items-center flex-row gap-3">
          <button
            className={`flex ${btnColor} ${btnBg} p-2 text-lg rounded-full flex-row`}
          >
            <FaFacebookF />
          </button>
          <button
            className={`flex ${btnColor} ${btnBg} p-2 text-lg rounded-full flex-row`}
          >
            <FaYoutube markerMid="" className=" ${btnColor} " />
          </button>
          <button
            className={`flex ${btnColor} ${btnBg} p-2 text-lg rounded-full flex-row`}
          >
            <FaTwitter />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
