import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { IoSearch } from "react-icons/io5";

const BlogHeader = () => {
  return (
    <div className="my-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-brand-2 mb-8 text-center font-poppins text-[32px] lg:w-full w-[250px] mx-auto lg:text-h3 leading-tight font-semibold">
            Special Blogs for you
          </h3>
          <p className=" mb-14 lg:mb-20 text-sm lg:text-lg  font-urbanist text-grey-500">
            We started working on Taskable because we had the same problem. All
            the tasks, files, and information we needed to get work done was
            spread across Slack, email, project management tools, and cloud
            storage.
          </p>
          <form className=" lg:mx-5 flex items-center relative">
            <input
              type="text "
              className="border  placeholder:text-[8px] placeholder:lg:text-lg w-full border-grey-300 outline-brand-1  lg:p-6  py-2 px-3 rounded-full"
              name="search"
              placeholder="Type keyword here"
            />

            <button className="bg-brand-1 absolute right-[6px] lg:right-2 top-[6px] lg:top-2 items-center px-3 py-[10px] lg:py-4 lg:px-6 rounded-full flex flex-row gap-2 text-white text-[7px] lg:text-base ">
              <IoSearch className="text-[10px] lg:text-lg" />
              Search
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default BlogHeader;
