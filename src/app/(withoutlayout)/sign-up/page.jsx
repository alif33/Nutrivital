"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import {FcGoogle, IoEyeOffOutline, IoEye} from "@/icons";

const SignUp = () => {
  const [showPassword, setShowPassowrd] = useState(false);
  const [fieldBgChange, setFieldBgChange] = useState(false);
  console.log(showPassword);

  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Siggnup Successfull");
  };
  return (
      <Container>
        <div className="mb-2">
          <Link className="flex gap-2" href="/">
            <Image src="/images/logo.svg" width={60} height={45} alt={"logo"} />
            <span className="text-2xl font-bold">Nutrivital</span>
          </Link>
        </div>
        <div className="">
          {/* login left */}
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-10">
            <div className="basis-full sm:basis-full md:basis-1/2 pt-3">
              <h2 className="text-[#233B58] text-center lg:text-left leading-tight text-3xl lg:text-[40px] font-semibold">
                Create account
              </h2>
              <form onSubmit={handleSignUp} className="pt-5">
                {/* Name Field */}
                <div className="flex flex-col mb-3 lg:mb-4 gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-jakarta text-grey-400 "
                  >
                    Name
                  </label>
                  <input
                    className="input"
                    type="text"
                    required
                    name="name"
                    id="name"
                  />
                </div>
                {/* Email Field */}
                <div className="flex flex-col mb-3 lg:mb-4 gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-jakarta text-grey-400 "
                  >
                    Email Address
                  </label>
                  <input
                    className="input"
                    type="email"
                    required
                    name="email"
                    id="email"
                  />
                </div>
                {/* Password Field */}
                <div className="flex flex-col mb-3 lg:mb-4 gap-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-jakarta text-grey-400 "
                  >
                    Password
                  </label>
                  <div className="w-full relative">
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
                <input
                  type="submit"
                  value="Submit"
                  className="bg-brand-1 cursor-pointer text-white font-semibold text-base font-jakarta py-3 px-10 w-full rounded-md mt-7"
                />
              </form>

              <button className="flex w-full mt-2 py-5 rounded-md gap-1 text-base font-semibold font-jakarta leading-5 text-[#233B58] flex-row items-center justify-center ">
                <FcGoogle className="text-3xl" />
                Signup with Google
              </button>
              <p className="text-grey-800 mb-5 lg:mb-0 font-jakarta leading-[18px] font-normal text-sm text-center">
                Already have an account?
                <Link href="/sign-in">
                  <span className="text-brand-1"> Login here</span>
                </Link>
              </p>
            </div>
            {/* login right */}
            <div className="basis-full sm:basis-full md:basis-1/2 items-centerflex justify-end ">
              <Image 
                width={600}
                height={450}
                className="hidden md:block"
                src="/images/register.svg" 
                alt="Register Image" 
              />
            </div>
          </div>
        </div>
      </Container>
  );
};

export default SignUp;
