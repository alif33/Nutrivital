import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "@/data/links.json"

const Links = () => {
  const pathname = usePathname();

  return (
    <>
    {
        links.map((link, index)=><Link
            key={index}
            href={link.path}
            className={`${pathname === link.path ? "text-brand-1 font-bold" : ""}`}
        >
            {link.name}
        </Link>)
    }
      <div className="flex md:ml-5 flex-row gap-5 text-lg text-[04091E] font-medium font-urbanist items-center">
        <Link href="/sign-in">
          <button className="ring-[1px] ring-gray-400 text-sm lg:rounded-md md:rounded-sm md:py-2 md:px-3 lg:py-3 lg:px-4">
            Sign in
          </button>
        </Link>
        <Link className="ring-[1px] ring-brand-1 text-sm lg:py-3 lg:px-6 md:py-2 md:px-4 hover:bg-[#ffffff] duration-500 active:bg-brand-1 font-medium text-white hover:text-brand-1 bg-brand-1 lg:rounded-md md:rounded-sm" href="">
          Get Started Free
          {/* <Button
            color={"text-white"}
            bgColor={"bg-brand-1"}
            btnPadding={"py-3 px-6"}
            text="Get Started Free"
            ${
        children && "flex flex-row gap-2 items-center"
      }
          /> */}
        </Link>
      </div>
    </>
  );
};

export default Links;