import React from "react";
import heroImage from "../../assets/home-3/Images Frame.png";
import Image from "next/image";
import Container from "../Container/Container";
import { FaPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="mt-14">
      <Container>
        <div className="flex lg:flex-row gap-20 items-center">
          {/* left */}
          <div className="lg:w-1/2">
            <h1 className="text-[80px] leading-[90px] text-[#110904] font-semibold font-urbanist">
              Nutritionist that can make you{" "}
              <span className="text-brand-1">happy</span>
            </h1>
            <p className="text-[#969696] text-xl font-normal mt-5 leading-8">
              Always take care of your health starting from the food menu that
              you consume every day
            </p>
            <div className="mt-16 flex flex-row gap-5 items-center">
              <button className="flex flex-row gap-2 rounded-full bg-brand-1 py-4 px-6 text-white text-base font-semibold">
                Explore Menu
              </button>
              <button className="flex py-4 px-6 flex-row gap-2">
                {" "}
                <span className="text-2xl  bg-white text-brand-1">
                  <FaPlayCircle />
                </span>{" "}
                Watch Video
              </button>
            </div>
          </div>
          {/* right */}
          <div className="lg:w-1/2">
            <Image src={heroImage} alt="Hero Image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
