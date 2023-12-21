import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div className="flex flex-row items-center gap-5 text-lg text-[#04091E] font-medium mb-10">
      <Link href="/blog">Blog</Link>
      <Link href="/price">Pricing</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/faq">FAQ</Link>
      <div className="flex flex-row items-center gap-5">
        <button className="rounded-md ring-[1px] ring-[#747681]  px-5 py-3">
          Sign In
        </button>
        <button className="bg-primary-bg py-4 px-5 rounded-md text-white text-center text-base">
          Get Started Free
        </button>
      </div>
    </div>
  );
};

export default NavLinks;
