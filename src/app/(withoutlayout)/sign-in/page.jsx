"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import loginImage from "../../../assets/login.png";
import logoImage from "../../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

const SignIn = () => {
  const [showPassword, setShowPassowrd] = useState(false);
  const handleSignIn = (e) => {
    e.preventDefault();
    alert("Login Successfull");
  };
  return (
    <div className="">
      <Container>
        <div className="py-5 mb-2">
          <Link href="/">
            <Image src={logoImage} alt="logo" width={100} />
          </Link>
        </div>
        <div className="">
          <h2 className="text-[#233B58] lg:mb-0 mb-5 w-full   text-[28px] leading-tight lg:text-[40px] font-semibold lg:text-left text-center ">
            Login in to <span className="lg:block"></span> your account
          </h2>
          <div className="flex  justify-between flex-col-reverse  lg:flex-row gap-10">
            {/* login left */}
            <div className="w-full lg:pt-8 lg:w-4/12 ">
              <form onSubmit={handleSignIn} className="">
                {/* Email Field */}
                <div className="flex flex-col mb-5 lg:mb-8 gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-jakarta text-grey-400 "
                  >
                    Email Address
                  </label>
                  <input
                    required
                    className=" bg-grey-200 duration-300 focus:shadow-md focus:shadow-grey-400 focus:bg-white outline-none p-5 text-base placeholder:text-[#233B58] text-[#233B58] font-jakarta font-normal leading-[18px] rounded-md"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                {/* Name Field */}
                <div className="flex  flex-col mb-3 gap-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-jakarta text-grey-400 "
                  >
                    Password
                  </label>
                  <div className="w-full relative">
                    <input
                      required
                      className="bg-grey-200 duration-300 focus:shadow-md focus:shadow-grey-400 focus:bg-white   outline-none p-5 w-full text-base placeholder:text-[#233B58] text-[#233B58] font-jakarta font-normal leading-[18px] rounded-md"
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
                <p className="text-brand-1 leading-[18px] font-normal text-sm font-jakarta">
                  <Link href="/reset-password">Forgot Password?</Link>
                </p>
                <input
                  type="submit"
                  value="Login"
                  className="bg-brand-1 cursor-pointer text-white font-semibold text-base font-jakarta py-5 px-10 w-full rounded-md mt-7 lg:mt-16"
                />
              </form>

              <button className="flex w-full  mt-2 py-5 rounded-md gap-1 text-base font-semibold font-jakarta leading-5 text-[#233B58] flex-row items-center justify-center ">
                <FcGoogle className="text-3xl" />
                Login with Google
              </button>
              <p className="text-grey-800 mt-3 mb-5 lg:mb-0 lg:mt-5 font-jakarta leading-[18px] font-normal text-sm ">
                Don’t have an account?{" "}
                <Link href="/sign-up">
                  <span className="text-brand-1">Signup here.</span>
                </Link>
              </p>
            </div>
            {/* login right */}
            <div className="w-full  lg:w-8/12   flex justify-end ">
              <Image className="w-[70%]" src={loginImage} alt="Login Image" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
