"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AllLinks from "./AllLinks";
import Container from "../ui/Container";
import { IoMenuSharp } from "react-icons/io5";
import Sidebar from "./Sidebar";


const Navbar = ({ children }) => {
  const [sidemenu, setSideMenu] = useState(false);
  return (
    <div className="shadow-sm pb-2">
      <Container>
      <div className="flex flex-row justify-between w-full  items-center py-2 ">
        {/* Navbar Left */}
          <Link className="flex gap-2" href="/">
            <Image src="/images/logo.svg" width={60} height={45} alt={"logo"} />
            <span className="text-2xl font-bold">Nutrivital</span>
          </Link>
        {/* Navbar Right */}
        <div className="  md:flex hidden gap-5 lg:flex flex-row items-center justify-end">
          <AllLinks />
        </div>
        <div className="lg:hidden  flex flex-row">
          <button
            onClick={() => setSideMenu(true)}
            className="bg-brand-1 p-2 text-white rounded-sm"
          >
            <IoMenuSharp className="text-2xl cursor-pointer " />
          </button>
          {/* Sidebar */}

          <div
            onClick={() => setSideMenu(false)}
            className={`h-screen p-5 fixed flex flex-col   ${
              sidemenu ? " top-0 right-0 w-full  " : "hidden "
            }
              bg-brand-2 text-white`}
          >
            <Sidebar setSideMenu={setSideMenu} />
          </div>
        </div>
      </div>
    </Container>
    </div>
    
  );
};
export default Navbar;
