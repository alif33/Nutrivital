import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import { FaPlayCircle } from "@/icons";  

const Hero = () => {
  return (
    <div className="mt-14">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* left */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-[80px] leading-tight text-center lg:text-left lg:leading-[90px] text-[#110904] font-semibold font-urbanist">
              Nutritionist that can make you{" "}
              <span className="text-brand-1">happy</span>
            </h1>
            <p className="text-[#969696] text-base lg:text-left text-center lg:text-xl font-normal mt-5 leading-8">
              Always take care of your health starting from the food menu that
              you consume every day
            </p>
            <div className="my-16 flex gap-5 items-center justify-center lg:justify-start">
              <button className="flex flex-row gap-2 rounded bg-brand-1 py-4 px-10 text-white text-base font-semibold">
                See Pricing
              </button>
              <button className="flex py-4 px-6 flex-row gap-2">
                {" "}
                <span className="text-2xl  bg-white text-brand-1">
                  <FaPlayCircle />
                </span>{" "}
                Watch Video
              </button>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="mb-4 text-base font-semibold">Loved By 350+ Customers</h3>
              <div>
                <Image
                  height={54}
                  width={203}
                  src="/placeholders/trusted-customers.svg"
                  alt="Trusted customers"
                />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="lg:w-1/2">
            <Image 
              width={505}
              height={791}
              src="/placeholders/banners/banner.svg"
              alt="Hero Image" 
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
