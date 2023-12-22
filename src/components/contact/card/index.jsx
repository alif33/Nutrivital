import React from "react";
import Image from "next/image";

const Card = ({ image, title, subtitle, cardPadding, cardBg }) => {
  return (
    <div className="w-full">
      <div
        className={`flex gap-5 flex-row ${cardPadding} ${cardBg} rounded-full`}
      >
        <Image src={image} alt="Contact Email" />
        <div className="">
          <h4 className="text-2xl font-bold font-urbanist text-grey-900">
            {title}
          </h4>
          <p className="text-base mt-2 font-urbanist font-normal text-grey-400">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;