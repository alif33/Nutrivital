import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../ui/Button";
import iconImage from "../../../assets/package-icon.png";
const PackageCard = ({
  name,
  price,
  duration,
  list,
  btnBg,
  btnColor,
  cardBg,
  cardColor,
}) => {
  return (
    <div
      className={`shadow-lg ${cardColor} shadow-base-300 flex flex-col justify-between w-full py-10 px-8 ${cardBg}`}
    >
      <div className="">
        <div className="pb-8 border-b border-gray-300 mb-8">
          <h4 className="text-xl  font-semibold font-urbanist leading-7">
            {name}
          </h4>
          <h1 className="font-urbanist text-3xl leading-8 font-medium">
            ${" "}
            <span className="text-h1 leading-normal font-extrabold">
              {price}
            </span>
          </h1>
          <p className="">Per {duration}</p>
        </div>
        <div className="flex flex-col gap-4 justify-center mb-5">
          {list.map((item, index) => (
            <div key={index} className="flex  flex-row gap-2 items-center">
              <Image src={iconImage} alt="Package Card" />
              <p className="text-[16px] font-semibold  leading-7 font-urbanist">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto ">
        <Button
          bgColor={btnBg}
          color={btnColor}
          text={"Get Started"}
          btnPadding={"px-10 py-3"}
        />
      </div>
    </div>
  );
};

export default PackageCard;
