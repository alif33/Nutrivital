import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/container";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-brand-2 text-white pt-20 pb-12">
      <Container>
        <div className="grid grid-cols-4 justify-between lg:gap-10 gap-5">
          {/* brand footer */}
          <div className="col-span-1">
            <Link className="flex gap-2" href="/">
              <Image src="/images/logo.svg" width={60} height={45} alt={"logo"} />
              <span className="text-2xl font-bold">Nutrivital</span>
            </Link>
            <p className="lg:my-10 my-8 text-xs font-medium text-grey-200">
              Always take  care of your health starting from the food menu that you consume every day.
            </p>
            <div className="w-full">
              <button
                className="flex w-full items-center
              justify-center  flex-row gap-1 lg:gap-2 bg-brand-1 py-2 px-4 text-xs lg:text-sm text-white"
              >
                <IoCallOutline />
                <span className="text"> (973) 068 2300</span>
              </button>
            </div>
          </div>
          {/* company footer */}
          <div className="col-span-1">
            <h3 className="text-xl mb-3 font-semibold  font-urbanist">Company</h3>
            <div className="flex flex-col font-medium text-lg text-[#AAAAAA] gap-3">
              <Link href="/blog">Blog</Link>
              <Link href="/price">Pricing</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          </div>
          {/* quick-links footer */}
          <div className="cols-span-1">
            <h3 className="text-xl mb-3 font-semibold  font-urbanist">Quick Links</h3>
            <div className="flex flex-col font-medium text-lg text-[#AAAAAA] gap-3">
              <Link href="/blog">Privacy Policy</Link>
              <Link href="/price">Terms & Conditions</Link>
            </div>
          </div>
          {/* contact footer */}
          <div className="cols-span-1">
            <ul className="flex flex-col gap-3">
              <li>
                <h5 className="text-sm font-bold pb-1">Phone :</h5>
                <h2 className="text-xs">+1-123-456-7890</h2>
              </li>
              <li>
                <h5 className="text-sm font-bold pb-1">Address :</h5>
                <h2 className="text-xs">+1-123-456-7890</h2>
              </li>
              <li>
                <h5 className="text-sm font-bold pb-1">Email :</h5>
                <h2 className="text-xs">+1-123-456-7890</h2>
              </li>
            </ul>
          </div>
        </div>
        {/* footer bottom */}
        <div className="pt-8 border-t border-grey-500 mt-12">
          <p className="text-center text-sm lg:text-lg font-normal ">
            © 2023 Copyright By StackBuzz Inc. All Rights Reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
