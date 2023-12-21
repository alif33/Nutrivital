import Button from "@/app/components/ui/Button";
import OutlineButton from "@/app/components/ui/OutlineButton";
import Container from "@/components/Container/Container";
import React from "react";
import bannerImage1 from "../../../assets/home-4/Thorus 1.png";
import bannerImage2 from "../../../assets/home-4/Thorus 2.png";
import Image from "next/image";
import bannerImage from "../../../assets/home-4/Rectangle.png";

const Banner = () => {
  return (
    <div className="text-center mt-10 relative">
      <Container>
        <div className="mx-auto max-w-xl">
          <p className="text-lg text-[#00000099] leading-6 font-normal font-urbanist">
            we're committed to crafting a unique identity and voice for your
            brand. Stand out from the crowd with a brand that is true to you and
            your work.
          </p>
          <div className="mt-14 flex flex-row gap-5 mx-auto justify-center items-center">
            <Button
              bgColor={"bg-brand-1 text-white"}
              btnPadding={"py-3 px-6"}
              text={"Get Started"}
            />
            <OutlineButton text={"Services"} />
          </div>
        </div>
        <div className="w-full  mt-24">
          <Image
            className="w-full z-[100]"
            src={bannerImage}
            alt="Banner Image"
          />
        </div>
      </Container>
      <Image
        className="absolute w-40 top-0 left-0
      "
        src={bannerImage1}
        alt="Banner Icon"
      />
      <Image
        className="absolute z-0 w-40 top-10 right-0
      "
        src={bannerImage2}
        alt="Banner Icon"
      />
    </div>
  );
};

export default Banner;
