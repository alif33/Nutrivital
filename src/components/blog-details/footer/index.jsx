import React from "react";
import { FaLink, FaTwitter, FaFacebookF, FaInstagram } from "@/icons";

const Footer = ({ date, author }) => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap pt-10 justify-between">
      {/* post footer left */}
      <div className="">
        <p className="text-grey-500 font-urbanist text-lg">
          Posted on {date} by{" "}
          <span className="text-secondary-1 font-extrabold underline">
            {author}
          </span>
        </p>
      </div>
      {/* post footer right */}
      <div className="flex items-center flex-row mt-5 md:mt-0 gap-4">
        <p className="text-grey-500 font-urbanist text-lg">
          Share this article
        </p>
        <button className="text-white py-2 bg-secondary-1 px-2 rounded-full">
          <FaLink className="text-lg" />
        </button>
        <button className="text-white py-2 bg-secondary-1 px-2 rounded-full">
          <FaFacebookF className="text-lg" />
        </button>
        <button className="text-white py-2 bg-secondary-1 px-2 rounded-full">
          <FaInstagram className="text-lg" />
        </button>
        <button className="text-white py-2 bg-secondary-1 px-2 rounded-full">
          <FaTwitter className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
