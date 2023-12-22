import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const ReviewCard = ({ review, name, designation, active }) => {
  return (
    <div className={`p-10 rounded-md ${active ? "bg-brand-1 text-white" : ""}`}>
      <div
        className={`${
          active
            ? "bg-[#FFFFFF26] text-white"
            : " bg-grey-300 mb-6 text-brand-1"
        }  inline-block p-3 rounded-full`}
      >
        <BiSolidQuoteAltLeft className="text-2xl" />
      </div>
      <p
        className={`${
          !active && "text - grey - 800"
        } font-urbanist text-lg font-normal leading-7`}
      >
        {review}
      </p>
      <div className="mt-10">
        <h5
          className={`${
            !active && "text-grey-950 text-xl"
          } font-semibold leading-8 font-urbanist`}
        >
          {name}
        </h5>
        <p
          className={` ${
            active ? "bg-[#FFFFFF26]" : "bg-brand-1"
          }  inline-block font-medium text-xs py-1 px-2 rounded-full text-white ${
            active ? "" : ""
          } `}
        >
          {designation}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
