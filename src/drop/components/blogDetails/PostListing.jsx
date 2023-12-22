import React from "react";

const PostListing = ({ list }) => {
  return (
    <ul className="list-disc ml-10 text-base text-grey-500 font-medium font-urbanist leading-8 flex flex-col gap-4">
      {list.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
};

export default PostListing;
