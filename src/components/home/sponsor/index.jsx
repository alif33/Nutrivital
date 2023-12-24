import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import companies from "@/data/companies.json"

const Sponsor = () => {
  return (
    <div className="mt-16">
      <Container>
        <p className="text-[#969696] text-center text-xl font-urbanist font-normal">
          Trusted by <span className="text-[#282828] font-bold">250+</span>{" "}
          Company
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-center mt-4 gap-2">
          {companies.map((company, index)=><Image
            key={index}
            width={200}
            height={38}
            className="lg:p-6 p-3"
            src={`/images/companies/${company.name}`}
            alt={`Company Image ${index}`}
          />)}
        </div>
      </Container>
    </div>
  );
};

export default Sponsor;
