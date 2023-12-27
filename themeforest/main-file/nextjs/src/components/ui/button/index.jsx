import React from "react";

const Button = ({ text, bgColor, color, btnPadding, children }) => {
  return (
    <button
      className={`${btnPadding} hover:bg-[#57d8c9d8] duration-500 active:bg-brand-1 ${
        children && "flex flex-row gap-2 items-center"
      } font-medium ${color} text-sm ${bgColor} rounded-md`}
    >
      {text} {children}
    </button>
  );
};

export default Button;
