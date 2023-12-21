import React from "react";

const SectionHeadinig = ({ heading, cssClass }) => {
  return (
    <>
      <h2
        className={`text-[#2F2E49] leading-normal font-urbanist font-bold text-[48px] ${cssClass}`}
      >
        {heading}
      </h2>
    </>
  );
};

export default SectionHeadinig;
