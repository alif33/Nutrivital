import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <Container>
      <div className="flex flex-row justify-between py-5 items-center">
        {/* left */}
        <div className="">
          <Image src={logo} alt="Dental Logo" />
        </div>
        {/* right */}
        <div className="">
          <NavLinks />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
