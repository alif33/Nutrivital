import React from "react";

const List = ({ children, name, cssStyle }) => {
  return (
    <div
      className={`flex items-center  flex-row gap-3 py rounded-3xl p-4 bg-[#FAFAFA] ${cssStyle}`}
    >
      <div className="text-2xl p-3 rounded-2xl bg-brand-1 text-white ">
        {children}
      </div>
      <h6 className="text-[#110904] font-semibold text-lg lg:text-2xl leading-normal">
        {name}
      </h6>
    </div>
  );
};

export default List;
