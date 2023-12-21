import React from 'react'
import Container from '../ui/Container'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";

import socialImage1 from '../../../assets/social/social (1).png'
import socialImage2 from '../../../assets/social/social (2).png'
import socialImage3 from '../../../assets/social/social (3).png'
import Button from '../ui/Button'

const Social = () => {
  return (
    <div className="py-20 lg:py-32  bg-grey-950">
      <Container>
        <div className="flex flex-col lg:flex-row gap-14 items-center justify-between ">
          {/* Social Left */}
          <div className="flex flex-col w-full flex-1 gap-6">
            <div className="flex flex-row flex-1 w-full gap-6 overflow-hidden">
              <div className="col-span-1 lg:col-span-2">
                {" "}
                <Image
                  className="  w-full lg:w-auto"
                  src={socialImage1}
                  alt="Social Image"
                />
              </div>
              <div className="col-span-2 lg:col-span-3  ">
                <Image
                  className=" w-full pt-7 lg:pt-16
                  "
                  src={socialImage2}
                  alt="Social Image"
                />
              </div>
            </div>
            <div className="flex-1">
              <Image
                className="col-span-5  w-full"
                src={socialImage3}
                alt="Social Image"
              />
            </div>
          </div>
          {/* Social Right */}
          <div className=" flex-1">
            <h2
              className="font-poppins text-center lg:text-left
             font-semibold lg:text-h2 text-[32px] leading-9 text-white lg:leading-[60px] mb-12"
            >
              Helping you overcome your any kind of technology challenges
            </h2>
            <div className="flex flex-row items-center justify-center">
              <Button
                text="See Pricings"
                bgColor={"bg-brand-1"}
                color="text-white"
                btnPadding={"py-3 px-14"}
              >
                <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Social