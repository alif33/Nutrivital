import React from 'react'
import Container from '../../ui/container'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";
import Button from '../../ui/button'

const Social = () => {
  return (
      <Container>
       <div className="bg-[#2A9D8F] rounded-lg">
        <div className="flex">
          <div className="flex flex-col flex-1 p-20">
            <h2
              className="font-poppins text-center lg:text-left
             font-semibold lg:text-h2 text-[32px] leading-9 text-white lg:leading-[60px] mb-12"
            >
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
         
          {/* Social Right */}
          <div className="flex-1 flex items-center">
            <div className="shadow rounded-2xl">
              <Image
                width={525}
                height={376}
                className="block"
                src="/images/banners/help.png"
                alt="Advertise banner"
              />
            </div>
          </div>
          
        </div>
      </div>
    </Container>
  );
}

export default Social