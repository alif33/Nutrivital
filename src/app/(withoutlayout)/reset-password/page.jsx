"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import resetPasswordImage from "../../../assets/reset-password.png";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

const ResetPassword = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    alert("Password Set");
  };
  return (
    <div className="">
      <Container>
        <div className="py-5 mb-2">
          <Link className="flex gap-2" href="/">
            <Image src="/images/logo.svg" width={60} height={45} alt={"logo"} />
            <span className="text-2xl font-bold">Nutrivital</span>
          </Link>
        </div>
        <div className="">
          <h2 className="text-[#233B58]  leading-tight text-3xl lg:text-[40px] lg:text-left text-center font-semibold">
            Create new <span className="lg:block"></span> password
          </h2>
          <div className="flex justify-between flex-col-reverse lg:flex-row gap-10">
            {/* login left */}
            <div className="w-full lg:w-4/12 lg:pt-8 h-full ">
              <form onSubmit={handleSignIn} className="">
                {/* Password Field */}
                <div className="flex flex-col mb-4 lg:mb-8 gap-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-jakarta text-grey-400 "
                  >
                    New Password
                  </label>
                  <input
                    required
                    className=" bg-grey-200 duration-300 h-[50px] focus:shadow-md focus:shadow-grey-400 focus:bg-white outline-none p-5 text-base placeholder:text-[#233B58] text-[#233B58] font-jakarta font-normal leading-[18px] rounded-md"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                {/* Repeat Field */}
                <div className="flex  flex-col mb-4 lg:mb-3 gap-2">
                  <label
                    htmlFor="repeatPassword"
                    className="text-sm font-jakarta text-grey-400 "
                  >
                    Repeat Password
                  </label>

                  <input
                    required
                    className="bg-grey-200 duration-300 h-[50px] focus:shadow-md focus:shadow-grey-400 focus:bg-white   outline-none p-5 w-full text-base placeholder:text-[#233B58] text-[#233B58] font-jakarta font-normal leading-[18px] rounded-md"
                    type="text"
                    name="repeatPassword"
                    id="repeatPassword"
                  />
                </div>

                <input
                  type="submit"
                  value="Set Password"
                  className="bg-brand-1 cursor-pointer text-white font-semibold text-base font-jakarta py-5 px-10 w-full rounded-md mt-7 lg:mt-16"
                />
              </form>
              <p className="text-grey-800 mt-5 lg:mt-10 font-jakarta leading-[18px] font-normal text-sm ">
                Already have an account?{" "}
                <Link href="/sign-in">
                  <span className="text-brand-1">Login here</span>
                </Link>
              </p>
              <p className="text-grey-800 mt-3 font-jakarta leading-[18px] font-normal text-sm ">
                Don’t have an account?
                <Link href="/sign-up">
                  <span className="text-brand-1">Signup here.</span>
                </Link>
              </p>
            </div>
            {/* login right */}
            <div className="w-full  lg:w-8/12   flex justify-end">
              <Image
                className="lg:w-[70%]"
                src={resetPasswordImage}
                alt="Login Image"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResetPassword;
