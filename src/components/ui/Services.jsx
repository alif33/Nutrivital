import React from "react";
import Container from "./container";
import Button from "./button";
import Image from "next/image";

const Services = ({ list, title, subtitle, titleColor }) => {
  return (
    <div className="bg-[#f3fefd] mb-20 mt-32 py-10">
      <Container>
        <div className="flex flex-col lg:flex-row  justify-between gap-24">
          <div className="w-full lg:w-4/12">
            <h3 className={`text-[32px] leading-tight lg:text-h3 font-poppins font-semibold ${titleColor} mb-3 `}>
              {title}
            </h3>
            <p className="text-sm lg:text-lg mb-6  font-urbanist text-grey-500">
              {subtitle}
            </p>
            <div className="my-10">
              {list.map((item, index) => (
                <div
                  key={index}
                  className="flex  mb-5 flex-row gap-2 items-center"
                >
                  <Image 
                    width={20}
                    height={20}
                    src={"/placeholders/icons/package-icon.svg"} 
                    alt="Package Card" 
                  />
                  <p
                    className="lg:textxm
                  text-base font-semibold  leading-7 font-urbanist"
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <Button
              text="Get In Touch"
              bgColor={"bg-brand-1"}
              color={"text-white"}
              btnPadding={"py-3 px-5"}
            />
          </div>
          <div className="w-full lg:w-8/12">
            <Image
              width={700}
              height={766}
              src="/placeholders/banners/pricing.svg"
              className="w-full h-full"
              alt="Service Image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
