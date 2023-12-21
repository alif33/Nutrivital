import Image from "next/image";
import React from "react";
import "./blogCard.css";

const BlogCard = ({ image, title, desc, author, date }) => {
  return (
    <div className="w-full border border-grey-200 blog-container hover:bg-white hover:shadow-2xl hover:shadow-base-300 cursor-pointer duration-500 ease-in-out">
      <Image src={image} alt="News Image" className="w-full h-[280px]" />
      <div className="w-full px-5 py-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-brand-1"></div>
            <p className="text-xs font-normal text-[#01010F] font-urbanist">
              {author}
            </p>
          </div>
          <p className="text-xs font-medium text-grey-500 font-urbanist">
            {date}
          </p>
        </div>
        <div className="mt-5">
          <h4 className="font-semibold text-xl text-gray-950 font-urbanist leading-loose">
            {title}
          </h4>
          <p className="text-sm font-normal font-urbanist text-grey-600">
            {desc}
          </p>
          <button className="mt-5 font-medium text-sm text-grey-500 news-button">
            Read Full Artcile
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
