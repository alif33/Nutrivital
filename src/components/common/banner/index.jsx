import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/container";
import { FaArrowRight } from "@/icons";

const Banner = () => {
  return (
      <Container>
       <div className="bg-[#2A9D8F] rounded-lg">
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap">
          <div className="basis-full md:basis-1/2 flex flex-col justify-center items-center p-3 md:p-5 lg:p-20">
            <h2 className="font-poppins text-center lg:text-left font-semibold text-[24px] md:text-[32px] lg:text-h2 leading-9 text-white lg:leading-[60px] mb-7 pt-7 md:pt-0">
              Helping you overcome your any kind of Nutrition challenges
            </h2>
            <Link
              href="/blog"
              className="flex flex-row gap-2 items-center py-3 px-14 hover:bg-[#57d8c9d8] duration-500 active:bg-brand-1 font-medium text-[#2A9D8F] text-sm bg-[#ffffff] rounded-md"
            >
              <span>See Pricings</span> <FaArrowRight />
            </Link>
          </div>
          <div className="basis-full md:basis-1/2 relative flex flex-col items-center justify-center">
              <div className="hidden lg:block absolute -top-14 -right-14">
                <Image
                  width={222}
                  height={222}
                  className="block"
                  src="/images/v-shape.svg"
                  alt="Advertise banner"
                />
              </div>
              <Image
                width={500}
                height={350}
                className="p-5 lg:p-0"
                src="/images/banners/help.png"
                alt="Advertise banner"
              />
          </div>
          
        </div>
      </div>
    </Container>
  );
}

export default Banner