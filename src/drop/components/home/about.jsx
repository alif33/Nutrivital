import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import "./about.css";
import aboutIcon1 from "../../../assets/about/icon1.png";
import aboutIcon2 from "../../../assets/about/icon2.png";
import aboutImage1 from "../../../assets/about/about1.png";
import aboutImage2 from "../../../assets/about/about2.png";
import aboutImage3 from "../../../assets/about/about3.png";
import Container from "../ui/Container";
import aboutBackgroundImage from "../../../assets/about/about-background.png";

const About = () => {
  return (
    <div className="w-full h-full py-20 my-10 about-container ">
      <Container>
        <div className=" gap-16 flex flex-col lg:flex-row items-end">
          {/* Left */}
          <div className="w-full lg:w-7/12 gap-8 grid grid-cols-5 ">
            <Image
              className="col-span-3  w-full"
              src={aboutImage1}
              alt={"about image"}
            />
            <Image
              className="col-span-2  w-full"
              src={aboutImage2}
              alt={"about image"}
            />
            <Image
              className="col-span-5  w-full"
              src={aboutImage3}
              alt={"about image"}
            />
          </div>
          {/* Right */}
          <div className="w-full lg:w-5/12 ">
            <h3 className="text-brand-2 leading-tight font-semibold font-poppins text-[32px] lg:text-h3">
              Easy solutions <br /> for your IT problems
            </h3>
            <p className="font-normal text-grey-600 text-lg font-urbanist mt-3">
              IT problems are persistent technology issues that cause risks and
              costs for businesses. They can range from minor inconveniences
              such as slow performance or poor network connectivity
            </p>
            <div className="mb-8 mt-6 flex flex-col gap-4">
              <div className="flex flex-row gap-4 items-center ">
                <Image src={aboutIcon1} alt="about icons" />
                <p className=" text-grey-950 text-lg font-urbanist leading-7 font-normal ">
                  We guide and support you along your journey of loss, giving
                  you the tools to navigate ..
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center ">
                <Image src={aboutIcon2} alt="about icons" />
                <p className=" text-grey-950 text-lg font-urbanist leading-7 font-normal ">
                  We guide and support you along your journey of loss, giving
                  you the tools to navigate ..
                </p>
              </div>
            </div>
            <Button
              bgColor={"bg-brand-1 text-white"}
              btnPadding={"py-3 px-6"}
              text="Get in touch"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
