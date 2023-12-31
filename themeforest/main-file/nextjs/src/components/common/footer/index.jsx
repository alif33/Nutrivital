import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/container";
import { IoCallOutline, FaFacebookF, FaTwitter, FaInstagram } from "@/icons";

const Footer = () => {
  return (
    <div className="bg-brand-2 text-white pt-20 pb-12">
      <Container>
        <div className="flex flex-row flex-wrap lg:gap-10 gap-14">
          {/* brand footer */}
          <div className="basis-full md:basis-6/12 lg:basis-4/12">
            <Link className="flex gap-2" href="/">
              <Image src="/placeholders/logo.svg" width={60} height={45} alt={"logo"} />
              <span className="text-2xl font-bold">Nutrivital</span>
            </Link>
            <p className="lg:my-10 my-8 text-justify text-xs font-medium text-grey-200">
              Always take  care of your health starting from the food menu that you consume every day.
            </p>
            <div className="w-full">
              <button
                className="flex w-full items-center justify-center flex-row gap-1 lg:gap-2 bg-brand-1 py-2 px-4 text-xs lg:text-sm text-white"
              >
                <IoCallOutline />
                <span className="text"> (973) 068 2300</span>
              </button>
            </div>
          </div>
           {/* company footer */}
           <div className="basis-full md:basis-5/12 lg:basis-2/12">
              <h3 className="text-xl mb-3 font-semibold  font-urbanist">Company</h3>
              <div className="flex flex-col font-medium text-lg text-[#AAAAAA] gap-3">
                <Link href="/blog">Blog</Link>
                <Link href="/price">Pricing</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/faq">FAQ</Link>
              </div>
            </div>
            {/* quick-links footer */}
            <div className="basis-full md:basis-5/12 lg:basis-2/12">
              <h3 className="text-xl mb-3 font-semibold  font-urbanist">Quick Links</h3>
              <div className="flex flex-col font-medium text-lg text-[#AAAAAA] gap-3">
                <Link href="/blog">Privacy Policy</Link>
                <Link href="/price">Terms & Conditions</Link>
              </div>
            </div>
            {/* contact footer */}
            <div className="basis-full md:basis-5/12 lg:basis-2/12">
              <ul className="flex flex-col gap-3">
                <li>
                  <h5 className="text-lg font-bold pb-1">Phone :</h5>
                  <h2 className="text-base">+1-123-456-7890</h2>
                </li>
                <li>
                  <h5 className="text-lg font-bold pb-1">Address :</h5>
                  <h2 className="text-base">+1-123-456-7890</h2>
                </li>
                <li>
                  <h5 className="text-lg font-bold pb-1">Email :</h5>
                  <h2 className="text-base">+1-123-456-7890</h2>
                </li>
              </ul>
            </div>
        </div>
        {/* footer bottom */}
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-center items-center gap-7 pt-8 border-t border-grey-500 mt-12">
          <p className="text-center text-sm lg:text-lg font-normal">
            © 2023 Copyright By StackBuzz Inc. All Rights Reserved.
          </p>
          <ul className="flex">
            <li className="px-3 py-3 rounded-full border mx-1"><Link href="/"><FaFacebookF/></Link></li>
            <li className="px-3 py-3 rounded-full border mx-1"><Link href="/"><FaTwitter/></Link></li>
            <li className="px-3 py-3 rounded-full border mx-1"><Link href="/"><FaInstagram/></Link></li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
