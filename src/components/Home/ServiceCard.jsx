import Image from 'next/image'
import React from 'react'
import Pera from '../ui/Pera/Pera'

const ServiceCard = ({ image, title, subtitle }) => {
   
  return (
    <div className="font-urbanist  text-left">
          <Image src={image} alt="Service Image mt-7" width={56} height={60}    />
      <h4 className=" text-2xl font-bold text-[#2F2E49] mt-7 mb-5">{title}</h4>
      <Pera  text={subtitle} />
    </div>
  );
}

export default ServiceCard