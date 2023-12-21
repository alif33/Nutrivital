import Image from 'next/image'
import React from 'react'

const TeamCard = ({image, name, post}) => {
  return (
    <div className="font-urbanist">
      <Image src={image} alt="Doctor Image" width="285" height={328}  />
      <h5 className="text-2xl font-bold mt-5 leading-8">{name}</h5>
      <p className="text-lg font-bold mt-2 text-[#299FF4]">{post}</p>
    </div>
  );
}

export default TeamCard