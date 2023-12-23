"use server";
import React from "react";
import { FaArrowRightLong} from "@/icons"; 
import "./card.css";

const Card = ({ children, title, details, cssStyle }) => {
  return (
    <div
      className={`p-6 border ${cssStyle} nutrition-card hover:bg-[#2A9D8F] duration-500 h-72 flex flex-col justify-between rounded-lg`}
    >
      <div className="">
        <div className="text-2xl bg-[#F4F8FF] p-3 rounded-full inline-block">
          {children}
        </div>
        <h3 className="text-xl mt-4 font-semibold text-[#333B47]">{title}</h3>
        <p className="text-[#969696] text-sm font-normal mt-2">{details}</p>
      </div>
      <div className="">
        <button className="flex flex-row text-[#212A3D] gap-3 text-base items-center">
          Read More <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Card;