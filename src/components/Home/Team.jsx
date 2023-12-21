"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import SectionHeadinig from "../ui/SectionHeading/SectionHeadinig";
import TeamCard from "./TeamCard";

const Team = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("./doctors.json")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="py-14 mt-44 bg-[#e5f4fb]">
      <Container>
        <SectionHeadinig
          heading={"Our Talented Team"}
          cssClass={"mx-auto text-center"}
        />
        <div className="flex mt-16 flex-row items-center justify-between gap-5 text-center">
          {doctors.map((doctor, index) => (
            <TeamCard
              key={index}
              image={doctor?.image}
              post={doctor?.post}
              name={doctor?.name}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Team;
