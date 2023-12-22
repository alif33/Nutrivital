import React from "react";

const OutlineButton = ({ text }) => {
  return (
    <button className="py-2 px-3 ring-[1px] ring-grey-400 rounded-md">
      {text}
    </button>
  );
};

export default OutlineButton;
