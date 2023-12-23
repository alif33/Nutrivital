"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "@/icons";

const Card = ({ title, description }) => {
  const [accordian, setAccordian] = useState(false);
  return (
    <>
      <div className="text-sm mb-5 mt-5 border border-grayOne py-2 rounded-md px-5">
        <div
          onClick={() => setAccordian(!accordian)}
          className="flex flex-row justify-between cursor-pointer"
        >
          <h4 className=" text-sm text-left lg:text-lg font-semibold text-textOne py-2">
            {title}
          </h4>
          <button className="ease-in-out duration-600">
            {accordian ? (
              <IoIosArrowUp className="text-lg ease-in-out duration-600" />
            ) : (
              <IoIosArrowDown className="text-lg ease-in-out duration-600" />
            )}
          </button>
        </div>
        <div
          className={` grid ease-in-out duration-300 overflow-hidden ${
            accordian
              ? " grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="mb-3 text-justify text-grey-500 text-sm lg:text-base ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;