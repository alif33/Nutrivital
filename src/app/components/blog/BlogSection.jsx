import React from "react";
import Container from "../ui/Container";
import BlogTitle from "../ui/BlogTitle";
import BlogCard from "./BlogCard";
import newsImage1 from "../../../assets/news/news1.png";
import newsImage2 from "../../../assets/news/news2.png";
import newsImage3 from "../../../assets/news/news3.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const BlogSection = ({ sectionTitle }) => {
  return (
    <div className="">
      <Container>
        <div className="flex flex-row justify-between">
          <BlogTitle sectionTitle={sectionTitle} />
          <div className="flex flex-row gap-3">
            <button className="text-lg  flex items-center justify-center bg-grey-200 px-1 lg:px-3 py-0 lg:py-3 rounded-full">
              <IoIosArrowBack alignmentBaseline="central" />
            </button>
            <button className="text-lg flex items-center justify-center shadow-md shadow-grey-300 px-1 lg:px-3 rounded-full">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="flex mt-7 flex-col lg:flex-row gap-5">
          <BlogCard
            image={newsImage1}
            author={"BLOG, Saas"}
            date={"11 May, 2023"}
            title={"Best Saas platform For 2023"}
            desc="Software as a service (SaaS) allows users to connect to and use cloud-based apps over the Internet."
          />
          <BlogCard
            image={newsImage2}
            author={"BLOG, Saas"}
            date={"11 May, 2023"}
            title={"Best Saas platform For 2023"}
            desc="Software as a service (SaaS) allows users to connect to and use cloud-based apps over the Internet."
          />
          <BlogCard
            image={newsImage3}
            author={"BLOG, Saas"}
            date={"11 May, 2023"}
            title={"Best Saas platform For 2023"}
            desc="Software as a service (SaaS) allows users to connect to and use cloud-based apps over the Internet."
          />
        </div>
      </Container>
    </div>
  );
};

export default BlogSection;
