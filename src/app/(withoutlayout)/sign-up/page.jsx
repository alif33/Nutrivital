"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import signUpImage from "../../../assets/register.png";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

const SignUp = () => {
  const [showPassword, setShowPassowrd] = useState(false);
  const [fieldBgChange, setFieldBgChange] = useState(false);
  console.log(showPassword);

  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Siggnup Successfull");
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
          {/* login left */}
          <h2 className="text-[#233B58] text-center lg:text-left leading-tight text-3xl lg:text-[40px] font-semibold">
            Create account
          </h2>
          <div className="flex  justify-between items-start  flex-col-reverse lg:flex-row gap-10">
            <div className="w-full pt-8 lg:w-4/12 ">
              <form onSubmit={handleSignUp} className="">
                {/* Name Field */}
                <div className="flex flex-col mb-3 lg:mb-6 gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-jakarta text-grey-400 "
                  >
                    Name
                  </label>
                  <input
                    className="bg-grey-200 duration-300 focus:shadow-md focus:shadow-grey-400 focus:bg-white  outline-none p-5 w-full text-base placeholder:text-[#233B58] text-[#233B58] font-jakarta font-normal leading-[18px] rounded-md"
                    type="text"
                    required
                    name="name"
                    id="name"
                  />
                </div>
                {/* Email Field */}
                <div className="flex flex-col mb-3 lg:mb-6 gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-jakarta text-grey-400 "
                  >
                    Email Address
                  </label>
                  <input
                    className="bg-grey-200 duration-300  focus:shadow-md focus:shadow-grey-400 focus:bg-white  outline-none p-5 w-full text-base placeholder:text-[#233B58] text-[#233B58] font-jakarta font-normal leading-[18px] rounded-md"
                    type="email"
                    required
                    name="email"
                    id="email"
                  />
                </div>
                {/* Password Field */}
                <div className="flex  flex-col mb-3 lg:mb-6 gap-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-jakarta text-grey-400 "
                  >
                    Password
                  </label>
                  <div className="w-full relative">
                    <input
                      required
                      className="bg-grey-200 focus:shadow-md focus:shadow-grey-400 focus:bg-white duration-300 outline-none p-5 w-full text-base placeholder:text-[#233B58] text-[#233B58] font-jakarta font-normal leading-[18px] rounded-md"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                    />
                    {showPassword ? (
                      <IoEyeOffOutline
                        onClick={() => setShowPassowrd(!showPassword)}
                        className="absolute right-3 top-4 text-2xl text-grey-500 cursor-pointer"
                      />
                    ) : (
                      <IoEye
                        onClick={() => setShowPassowrd(!showPassword)}
                        className="absolute right-3 top-4 text-2xl text-grey-500 cursor-pointer"
                      />
                    )}
                  </div>
                </div>
                {/* <p className="text-brand-1 leading-[18px] font-normal text-sm font-jakarta">
                <Link href="/reset-password">Forgot Password?</Link>
              </p> */}
                <input
                  type="submit"
                  value="Sign Up"
                  className="bg-brand-1 cursor-pointer text-white font-semibold text-base font-jakarta py-5 px-10 w-full rounded-md mt-7 lg:mt-10"
                />
              </form>

              <button className="flex w-full  mt-2 py-5 rounded-md gap-1 text-base font-semibold font-jakarta leading-5 text-[#233B58] flex-row items-center justify-center ">
                <FcGoogle className="text-3xl" />
                Signup with Google
              </button>
              <p className="text-grey-800 lg:mt-3 mb-5  lg:mb-0 font-jakarta leading-[18px] font-normal text-sm ">
                Already have an account?
                <Link href="/sign-in">
                  <span className="text-brand-1">Login here</span>
                </Link>
              </p>
            </div>
            {/* login right */}
            <div className="w-full  lg:w-8/12 items-centerflex justify-end ">
              <Image className="" src={signUpImage} alt="Login Image" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
