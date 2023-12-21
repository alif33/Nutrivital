import React from "react";
import Container from "../Container/Container";
import sponsorImage1 from "../../assets/home-3/logo_2.png";
import sponsorImage2 from "../../assets/home-3/logo_3.png";
import sponsorImage3 from "../../assets/home-3/logo_4.png";
import sponsorImage4 from "../../assets/home-3/logo_5.png";
import sponsorImage5 from "../../assets/home-3/logo_6.png";
import Image from "next/image";

const Sponsor = () => {
  return (
    <div className="mt-12">
      <Container>
        <p className="text-[#969696] text-center text-xl font-urbanist font-normal">
          Trusted by <span className="text-[#282828] font-bold">250+</span>{" "}
          Company
        </p>
        <div className="flex flex-row flex-wrap lg:flex-nowrap w-full justify-between mt-4 gap-2">
          <Image
            className="py-6 px-6 w-[200px]"
            src={sponsorImage1}
            alt="Sponsore Image 1"
          />
          <Image
            className="py-6 px-6 w-[200px]"
            src={sponsorImage2}
            alt="Sponsore Image 2"
          />
          <Image
            className="py-6 px-6 w-[200px]"
            src={sponsorImage3}
            alt="Sponsore Image 3"
          />
          <Image
            className="py-6 px-6 w-[200px]"
            src={sponsorImage4}
            alt="Sponsore Image 6"
          />
          <Image
            className="py-6 px-6 w-[200px]"
            src={sponsorImage5}
            alt="Sponsore Image 5"
          />
        </div>
      </Container>
    </div>
  );
};

export default Sponsor;
