import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";

const Header = () => {
  return (
    <div>
      <Container>
        <Image
          height={507}
          width={1136}
          src={"/images/blogs/banner.svg"}
          alt="Banner Image"
        />
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap my-8 pb-8 gap-10 border-b border-b-grey-300">
          <h2 className="text-[28px] md:text-[34px] lg:text-h2 md:w-[65%] lg:w-[70%] pt-6 font-poppins text-grey-900 font-semibold leading-tight">
            FRevitalize Through Nutrient-Rich Choices
          </h2>

          <div className="flex md:w-[35%] lg:w-[30%] md:my-2 gap-3">
            <Image
              width={80}
              height={80}
              src={"/images/blogs/avatar.svg"}
              className="w-20 h-20 rounded-full"
              alt="Author Image"
            />
            <div className="">
              <h4 className="font-semibold font-poppins text-[22px] md:text-[26px] lg:text-[28px] text-secondary-1 leading-normal">
                AJOY SARKER
              </h4>
              <p className="text-lg font-urbanist leading-8 text-grey-400">
                May 14, 2023
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
