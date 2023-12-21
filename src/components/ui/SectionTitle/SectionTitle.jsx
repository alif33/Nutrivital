import React from "react";

const SectionTitle = ({ title, cssClass }) => {
  return (
    <div className={`flex  mb-4 flex-row gap-2 items-center ${cssClass}`}>
      <div className="w-20 h-1 bg-dividor"></div>
      <p className="text-lg  text-[#060606] font-normal leading-6 ">{title}</p>
    </div>
  );
};

export default SectionTitle;
