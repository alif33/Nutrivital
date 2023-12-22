import React from "react";
import Image from "next/image";
import contentImage1 from "../../../assets/blog-details/content-image1.png";
import contentImage2 from "../../../assets/blog-details/content-image2.png";

const Card = () => {
  return (
    <div className="my-10 flex gap-7 flex-row">
      <div className="flex-1">
        <Image src={contentImage1} alt="Content Image" />
      </div>
      <div className="flex-1  py-10 px-9 bg-brand-1">
        <h5 className="text-2xl font-urbanist font-medium italic text-white mb-5 leading-10 ">
          “Many people would say that it is absolute madness to keep on doing
          the same thing, time after time, expecting to get a different result
          or for something happen.”
        </h5>
        <div className="flex flex-row gap-4  items-end">
          <Image src={contentImage2} alt="Content Image" />
          <p className="w-[130px] font-medium text-white font-urbanist text-xl leading-7 ">
            Georgia Harper
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
