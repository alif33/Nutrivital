import React from "react";

const Content = ({ title, content }) => {
  return (
    <div>
      <div className="my-10">
        <h3 className="text-3xl  leading- mb-4 font-poppins text-secondary-1 font-semibold">
          {title}
        </h3>
        <div className="flex flex-col gap-5">
          {content?.map((item, index) => (
            <p
              key={index}
              className="text-lg text-grey-500 font-medium font-urbanist leading-8"
            >
              {item?.pera}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;