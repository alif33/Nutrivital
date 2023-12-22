import Link from "next/link";
import React from "react";
import Button from "@/components/ui/button";
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

export default Links;