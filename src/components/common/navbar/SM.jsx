import Link from "next/link";
import React from "react";
import { TfiClose } from "react-icons/tfi";
import Button from "../../ui/button";

const Sidebar = ({ setSideMenu }) => {
  return (
    <>
      <button
        onClick={() => setSideMenu(false)}
        className="flex flex-row justify-end   rounded-md   p-3 "
      >
        <TfiClose className="text-2xl" />
      </button>

      <div className="flex flex-col gap-3 mt-5">
        <Link
          className="text-lg  px-5 py-3 font-semibold hover:bg-grey-200 duration-300 hover:text-brand-1"
          href={"/blog"}
        >
          Blog
        </Link>

        <Link
          className="text-lg px-5 py-3 font-semibold hover:bg-grey-200 duration-300 hover:text-brand-1"
          href={"/price"}
        >
          Pricing
        </Link>

        <Link
          className="text-lg px-5 py-3 font-semibold hover:bg-grey-200 duration-300 hover:text-brand-1"
          href={"/contact"}
        >
          Contact
        </Link>

        <Link
          className="text-lg px-5 py-3 font-semibold hover:bg-grey-200 duration-300 hover:text-brand-1"
          href={"/faq"}
        >
          FAQ
        </Link>
        <h1>Mobile</h1>
        <div className="mx-auto fixed bottom-5 right-[25%] flex flex-row gap-5">
          <Link
            className="py-2 px-3 ring-[1px] ring-gray-400 rounded-md"
            href={"/sign-in"}
          >
            Signin
          </Link>

          <Link className="" href={"/"}>
            <Button
              color={"text-white"}
              bgColor={"bg-brand-1"}
              btnPadding={"py-3 px-6"}
              text="Get Started Free"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
