import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import { usePathname } from "next/navigation";

const AllLinks = () => {
  const pathname = usePathname();

  return (
    <>
      <Link
        className={`${pathname == "/" ? "text-brand-1 font-bold" : ""}`}
        href="/"
      >
        Home
      </Link>

      <Link
        className={`${pathname == "/blog" ? "text-brand-1 font-bold" : ""}`}
        href="/blog"
      >
        Blog
      </Link>
      <Link
        href="/price"
        className={`${pathname == "/price" ? "text-brand-1 font-bold" : ""}`}
      >
        Pricing
      </Link>
      <Link
        href="/contact"
        className={`${pathname == "/contact" ? "text-brand-1 font-bold" : ""}`}
      >
        Contact
      </Link>
      <Link
        href="/faq"
        className={`${pathname == "/faq" ? "text-brand-1 font-bold" : ""}`}
      >
        FAQ
      </Link>
      <div className="flex md:ml-5 flex-row gap-5 text-lg text-[04091E] font-medium font-urbanist items-center">
        <Link href="/sign-in">
          <button className="py-2 px-3 ring-[1px] ring-gray-400 rounded-md">
            Sign in
          </button>
        </Link>
        <Link href="">
          <Button
            color={"text-white"}
            bgColor={"bg-brand-1"}
            btnPadding={"py-3 px-6"}
            text="Get Started Free"
          />
        </Link>
      </div>
    </>
  );
};

export default AllLinks;
