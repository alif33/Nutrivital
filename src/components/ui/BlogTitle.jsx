import React from "react";

const BlogTitle = ({ sectionTitle }) => {
  return (
    <h4 className="lg:text-[28px] text-xl text-grey-900 font-poppins font-semibold">
      {sectionTitle}
    </h4>
  );
};

export default BlogTitle;
