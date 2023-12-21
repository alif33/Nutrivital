import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import memberImage1 from "../../../assets/member/member1.png";
import memberImage2 from "../../../assets/member/member2.png";
import memberImage3 from "../../../assets/member/member3.png";
import MemberCard from "./memberCard";

const Members = () => {
  return (
    <div className="my-32 ">
      <Container>
        <div className="">
          <h3 className="text-brand-2 leading-tight font-semibold font-poppins text-[32px] lg:text-h3">
            Our top class <br /> team members
          </h3>
          <div className="flex mt-12 flex-col lg:flex-row gap-6 justify-between">
            <MemberCard
              btnColor="text-white"
              btnBg={"bg-[#FFFFFF33] "}
              nameColor="text-white"
              desiColor="text-white"
              bg="bg-brand-1 "
              image={memberImage1}
              name="Jonathon Rees"
              designation="Chief Executive"
            />
            <MemberCard
              btnColor="grey-900"
              nameColor="text-grey-900"
              btnBg={"bg-grey-200"}
              image={memberImage2}
              desiColor="text-secondary-2"
              name="Jonathon Rees"
              designation="Chief Executive"
            />
            <MemberCard
              btnColor="grey-900"
              btnBg={"bg-grey-200"}
              nameColor="text-grey-900"
              image={memberImage3}
              desiColor="text-secondary-2"
              name="Jonathon Rees"
              designation="Chief Executive"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Members;
