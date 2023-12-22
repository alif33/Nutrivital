import React from "react";
import Container from "../ui/container";
import BlogTitle from "../ui/BlogTitle";
import BlogCard from "./BlogCard";
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
            image="/images/blogs/01.png"
            author={"BLOG, Saas"}
            date={"11 May, 2023"}
            title={"Vitality in Every Bite"}
            desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
          />
          <BlogCard
            image="/images/blogs/02.png"
            author={"BLOG, Saas"}
            date={"11 May, 2023"}
            title={"Nourish Your Way to Wellness"}
            desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
          />
          <BlogCard
            image="/images/blogs/03.png"
            author={"BLOG, Saas"}
            date={"11 May, 2023"}
            title={"Fueling Healthy Lifestyle Choices"}
            desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
          />
        </div>
      </Container>
    </div>
  );
};

export default BlogSection;
