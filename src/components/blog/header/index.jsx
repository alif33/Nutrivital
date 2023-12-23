import React from "react";
import Container from "@/components/ui/container";
import { IoSearch } from "@/icons";

const Header = () => {
  return (
      <Container>
        <div className="mx-auto max-w-3xl text-center mt-7">
          <h3 className="text-brand-2 mb-8 text-center font-poppins text-[32px] lg:w-full w-[250px] mx-auto lg:text-h3 leading-tight font-semibold">
            Special Blogs for you
          </h3>
          <p className=" mb-14 lg:mb-20 text-sm lg:text-lg  font-urbanist text-grey-500">
            We started working on Taskable because we had the same problem. All
            the tasks, files, and information we needed to get work done was
            spread across Slack, email, project management tools, and cloud
            storage.
          </p>
          <form className="lg:mx-5">
            <h3 className="text-left text-lg font-semibold pb-1">By keyword</h3>
            <div className="flex items-center relative">
              <input
                id="search"
                name="search"
                type="text"
                className="border placeholder:text-[12px] placeholder:lg:text-lg w-full border-grey-300 outline-brand-1  lg:p-6  py-2 px-3 rounded-2xl"
                placeholder="Type keyword here"
              />
              <button className="bg-brand-1 absolute right-[6px] lg:right-2 top-[6px] lg:top-2 items-center px-3 py-[10px] lg:py-4 lg:px-6 rounded-2xl flex flex-row gap-2 text-white text-[7px] lg:text-base">
                <IoSearch className="text-[12px] lg:text-lg" />
                Search
              </button>
            </div>
          </form>
        </div>
      </Container>
  );
};

export default Header;
