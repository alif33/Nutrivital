"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AllLinks from "./AllLinks";
import logo from "../../../assets/logo.png";
import Container from "../ui/Container";
import { IoMenuSharp } from "react-icons/io5";
import Sidebar from "./Sidebar";


const Navbar = ({ children }) => {
  const [sidemenu, setSideMenu] = useState(false);
  return (
    <Container>
      <div className="flex flex-row justify-between w-full  items-center py-2 ">
        {/* Navbar Left */}
        <div className="">
          <Link href="/">
            <Image src={logo} width={100} height={20} alt={"logo"} />
          </Link>
        </div>
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
  );
};
export default Navbar;
