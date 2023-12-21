"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import SectionHeadinig from "../ui/SectionHeading/SectionHeadinig";
import Pera from "../ui/Pera/Pera";
import ServiceCard from "./ServiceCard";


const Services = () => {
  const [allService, setAllService] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => {
        setAllService(data);
      })
      .catch((error) => console.error(error));
  }, []);
  
  return (
    <div className="mt-14">
      <Container>
        <div className="">
          {/* Services Top */}
          <div className="flex flex-row gap-20 items-center justify-between">
            {/* Services Top Left */}
            <div className="lg:w-5/12">
              <SectionTitle title={"Services"} />
              <SectionHeadinig heading={"Best services we provided for you"} />
            </div>
            {/* Services Top Right */}
            <div className="lg:w-7/12">
              <Pera
                text={
                  "Our clients are our priority, we offer quality dental services with a team of specialists. More details about our services below."
                }
              />
            </div>
          </div>
          {/* Services Bottom */}
                  <div className="mt-28 flex flex-row justify-between gap-28">
                      {/* <ServiceCard title={"Health"} /> */}
            {allService.map((service, index) => (
              <ServiceCard
                key={index}
                title={service?.title}
                subtitle={service?.subtitle}
                image={service?.image}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
