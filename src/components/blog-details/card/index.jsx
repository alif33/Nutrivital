import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="my-10 flex gap-7 flex-row">
      <div className="flex-1">
        <Image 
          width={570}
          height={340}
          src={"/images/blogs/content-1.png"} 
          alt="Content Image" 
        />
      </div>
      <div className="flex-1  py-10 px-9 bg-brand-1">
        <h5 className="text-2xl font-urbanist font-medium italic text-white mb-5 leading-10 ">
          “Many people would say that it is absolute madness to keep on doing
          the same thing, time after time, expecting to get a different result
          or for something happen.”
        </h5>
        <div className="flex flex-row gap-4  items-end">
          <Image 
            width={62}
            height={64}
            src={"/images/blogs/content-2.png"} 
            alt="Content Image" 
          />
          <p className="w-[130px] font-medium text-white font-urbanist text-xl leading-7 ">
            Georgia Harper
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
