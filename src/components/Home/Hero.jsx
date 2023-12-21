import Image from "next/image";
import React from "react";
import heroImage from "../../assets/image 18.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import Container from "../Container/Container";
import smileImage from "../../assets/icons/smile.png";

const Hero = () => {
  return (
    <div className="bg-primary-bg mt-7 ">
      <Container>
        <div className="flex items-center justify-between lg:flex-row ">
          {/* Hero Left */}
          <div className="lg:w-1/2 text-white textur">
            <div className="flex  mb-4 flex-row gap-2 items-center">
              <div className="w-20 h-1 bg-dividor"></div>
              <p className="text-lg  font-normal leading-6 ">
                Award-winning Dentist clinic
              </p>
            </div>
            <h1 className="text-[60px] relative leading-[79px] mb-7 font-extrabold text-white">
              We earn your <span className="text-dividor">trust</span> in dental
              care
              <Image
                src={smileImage}
                alt="Smile Image"
                className="absolute right-6 top-[70px]"
              />
            </h1>

            <p className="text-lg  font-normal leading-6 mb-4">
              Crafting Radiant Smiles, Nurturing Lifelong Health, and Restoring
              Confidence, One Patient at a Time.
            </p>
            <div className="flex  flex-row mt-14  gap-5 items-center">
              <button className="flex text-base bg-white  py-4 px-6 rounded-md text-heading flex-row gap-2 items-center justify-center">
                Learn More{" "}
                <FaArrowRightLong className="text-2xl text-[#A6CBF8]" />
              </button>
              <button className="flex bg-transparent text-white  py-4 px-6 rounded-md text-base flex-row-reverse gap-2 items-center justify-center">
                Watch Video
                <FaRegPlayCircle className="text-2xl text-[#157FEC]" />
              </button>
            </div>
          </div>
          {/* Hero Right */}
          <div className="lg:w-1/2">
            <Image src={heroImage} alt="Hero Image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
