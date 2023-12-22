import React from "react";
import Image from "next/image";
import Container from "../Container/Container";
import sponsorImage1 from "../../assets/home-3/logo_2.png";
import sponsorImage2 from "../../assets/home-3/logo_3.png";
import sponsorImage3 from "../../assets/home-3/logo_4.png";

const Sponsor = () => {

  const companies = [
    "starsup.svg", "teamtalk.svg", "overlays.svg", "payscale.svg", "bestbank.svg"
  ]

  return (
    <div className="mt-16">
      <Container>
        <p className="text-[#969696] text-center text-xl font-urbanist font-normal">
          Trusted by <span className="text-[#282828] font-bold">250+</span>{" "}
          Company
        </p>
        <div className="lg:flex lg:flex-row grid grid-cols-3 lg:flex-nowrap w-full justify-between mt-4 gap-2">
          {companies.map((name, index)=><Image
            key={index}
            width={200}
            height={38}
            className="lg:p-6 p-3"
            src={`/images/companies/${name}`}
            alt={`Company Image ${index}`}
          />)}
        </div>
      </Container>
    </div>
  );
};

export default Sponsor;
