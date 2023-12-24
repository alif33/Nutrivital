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
        <div className="my-8 pb-8 flex lg:flex-row gap-10 border-b  border-b-grey-300">
          <h2 className="text-h2 lg:w-[70%] pt-6 font-poppins text-grey-900 font-semibold leading-tight">
            FRevitalize Through Nutrient-Rich Choices
          </h2>

          <div className="flex lg:w-[30%] py-5   flex-row gap-3">
            <Image
              width={80}
              height={80}
              src={"/images/blogs/avatar.svg"}
              className="w-20 h-20 rounded-full"
              alt="Author Image"
            />
            <div className="">
              <h4 className="font-semibold font-poppins text-3xl text-secondary-1 leading-normal">
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
