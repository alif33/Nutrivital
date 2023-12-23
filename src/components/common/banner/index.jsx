import React from 'react'
import Container from '../../ui/container'
import Image from 'next/image'
import { FaArrowRight } from "@/icons";
import Button from '../../ui/button'

const Banner = () => {
  return (
      <Container>
       <div className="bg-[#2A9D8F] rounded-lg">
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap">
          <div className="basis-full md:basis-1/2 flex flex-col justify-center items-center p-3 md:p-5 lg:p-20">
            <h2 className="font-poppins text-center lg:text-left font-semibold lg:text-h2 text-[32px] leading-9 text-white lg:leading-[60px] mb-7 sm:mt-7">
              Helping you overcome your any kind of Nutrition challenges
            </h2>
            <div className="flex flex-row items-center">
              <Button
                text="See Pricings"
                bgColor={"bg-[#ffffff]"}
                color="text-[#2A9D8F]"
                btnPadding={"py-3 px-14"}
              >
                <FaArrowRight />
              </Button>
            </div>
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