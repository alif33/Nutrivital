"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import { FcGoogle, IoEyeOffOutline, IoEye } from "@/icons"

const SignIn = () => {
  const [showPassword, setShowPassowrd] = useState(false);
  const handleSignIn = (e) => {
    e.preventDefault();
    alert("Login Successfull");
  };
  return (
    <Container>
      <div className="mb-2">
        <Link className="flex gap-2 mt-3 md:mt-3 lg:mt-0" href="/">
          <Image src="/images/logo.svg" width={60} height={45} alt={"logo"} />
          <span className="text-2xl font-bold">Nutrivital</span>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-start gap-10">
        {/* login left */}
        <div className="basis-1/2 lg:pt-8">
          <h2 className="text-[#233B58] mt-14 mb-5 md:mt-5 md:mb-5 lg:mt-0 lg:mb-0 w-full text-[28px] leading-tight lg:text-[40px] font-semibold lg:text-left text-center ">
            <span className="text-brand-1">Login</span> in to your account
          </h2>
          <form onSubmit={handleSignIn} className="pt-5">
            {/* Email Field */}
            <div className="flex flex-col mb-5 lg:mb-5 gap-2">
              <label
                htmlFor="email"
                className="text-sm font-jakarta text-grey-400 "
              >
                Email Address
              </label>
              <input
                required
                className="input"
                type="email"
                name="email"
                id="email"
              />
            </div>
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-jakarta text-grey-400 "
              >
                Password
              </label>
              <div className="relative">
                <input
                  required
                  className="input w-full"
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
            <p className="text-brand-1 leading-[18px] font-normal text-sm font-jakarta float-right py-5">
              <Link href="/reset-password">Forgot Password?</Link>
            </p>
            <input
              type="submit"
              value="Submit"
              className="bg-brand-1 cursor-pointer text-white font-semibold text-base font-jakarta py-3 px-10 w-full rounded-md"
            />
          </form>

          <button className="flex w-full  mt-2 py-5 rounded-md gap-1 text-base font-semibold font-jakarta leading-5 text-[#233B58] flex-row items-center justify-center">
            <FcGoogle className="text-3xl" />
            Login with Google
          </button>
          <p className="text-grey-800 mb-5 lg:mb-2 font-jakarta leading-[18px] font-normal text-sm text-center">
            Don’t have an account?{" "}
            <Link href="/sign-up">
              <span className="text-brand-1">Signup here.</span>
            </Link>
          </p>
        </div>
        {/* login right */}
        <div className="basis-full md:basis-1/2 flex justify-end">
          <Image 
            width={425}
            height={400}
            className="hidden md:block"
            src="/images/login.svg" 
            alt="Login Image" 
          />
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
