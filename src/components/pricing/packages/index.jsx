"use client";
import React, { useState } from "react";
import Container from "@/components/ui/container";
import { FaLinesLeaning } from "react-icons/fa6";
import Card from "./card";

const Packages = () => {
  const [toggleButton, setToggleButton] = useState(FaLinesLeaning);
  return (
    <div className="my-14 lg:my-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-brand-2 mb-10 text-center leading-tight font-semibold font-poppins text-[32px] lg:text-h3">
            Pricing for everyone <span className="lg:block">and suitable</span>
          </h3>
          <p className="mb-16 lg:mb-20 text-sm leading-5 lg:text-lg  text-center font-urbanist text-grey-500">
            We started working on Taskable because we had the same problem. All
            the tasks, files, and information we needed to get work done was
            spread across Slack, email, project management tools, and cloud
            storage.
          </p>
        </div>
        {/* toggle button */}
        <div className="mx-auto mb-10  text-center flex  w-[183px] rounded-md shadow-2xl  shadow-gray-500  p-1 bg-white">
          <button
            onClick={() => !toggleButton && setToggleButton(!toggleButton)}
            className={`py-3 ${
              toggleButton
                ? "bg-brand-1 text-white"
                : "text-grey-950 ease-in-out bg-white duration-300"
            } px-6   font-bold duration-500 text-sm rounded-md`}
          >
            Yearly
          </button>
          <button
            onClick={() => toggleButton && setToggleButton(!toggleButton)}
            className={`py-3 px-6  ${
              !toggleButton
                ? "bg-brand-1 text-white"
                : "text-grey-950  ease-in-out bg-white "
            }  text-sm rounded-md font-bold duration-500`}
          >
            Yearly
          </button>
        </div>
        {/* Packages */}
        <div className="flex flex-col lg:flex-row justify-between gap-7">
          <Card
            name="Starter"
            price={"5.00"}
            duration={"Month"}
            btnBg={"bg-grey-950"}
            btnColor={"text-white"}
            list={[
              { name: "3 Social Media Account" },
              { name: "Free Platform Access" },
              { name: "24/7 Customer Support" },
            ]}
          />
          <Card
            cardColor={"text-white"}
            cardBg="bg-brand-2"
            btnBg={"bg-brand-1"}
            btnColor={"text-white"}
            name="Premium"
            price={"25.00"}
            duration={"Month"}
            list={[
              { name: "10 Social Media Account" },
              { name: "Free Platform Access" },
              { name: "24/7 Customer Support" },
              { name: "24/7 Customer Support" },
            ]}
          />
          <Card
            btnBg={"bg-grey-950"}
            btnColor={"text-white"}
            name="Basic"
            price={"5.00"}
            duration={"Month"}
            list={[
              { name: "5 Social Media Account" },
              { name: "Free Platform Access" },
              { name: "24/7 Customer Support" },
              { name: "24/7 Customer Support" },
              { name: "24/7 Customer Support" },
            ]}
          />
        </div>
      </Container>
    </div>
  );
};

export default Packages;
