"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";

const ResetPassword = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    alert("Password Set");
  };
  return (
    <div className="">
      <Container>
        <div className="py-5 mb-2">
          <Link className="flex gap-2 mt-3 md:mt-3 lg:mt-0" href="/">
            <Image src="/images/logo.svg" width={60} height={45} alt={"logo"} />
            <span className="text-2xl font-bold">Nutrivital</span>
          </Link>
        </div>
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-10">
            {/* login left */}
            <div className="basis-1/2 lg:w-4/12 lg:pt-4 h-full ">
              <h2 className="text-[#233B58] leading-tight text-3xl lg:text-[40px] lg:text-left text-center font-semibold">
                Create new <span className="lg:block"></span> password
              </h2>
              <form onSubmit={handleSignIn} className="mt-4">
                {/* Password Field */}
                <div className="flex flex-col mb-4 gap-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-jakarta text-grey-400 "
                  >
                    New Password
                  </label>
                  <input
                    required
                    className="input"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                {/* Repeat Field */}
                <div className="flex flex-col mb-3 gap-2">
                  <label
                    htmlFor="repeatPassword"
                    className="text-sm font-jakarta text-grey-400 "
                  >
                    Repeat Password
                  </label>

                  <input
                    required
                    className="input"
                    type="text"
                    name="repeatPassword"
                    id="repeatPassword"
                  />
                </div>

                <input
                  type="submit"
                  value="Set Password"
                  className="bg-brand-1 cursor-pointer text-white font-semibold text-base font-jakarta py-3 px-10 w-full rounded-md mt-5"
                />
              </form>
              <p className="text-grey-800 text-center mt-5 lg:mt-10 font-jakarta leading-[18px] font-normal text-sm ">
                Already have an account?{" "}
                <Link href="/sign-in">
                  <span className="text-brand-1">Login here</span>
                </Link>
              </p>
              <p className="text-grey-800 text-center mt-3 font-jakarta leading-[18px] font-normal text-sm ">
                Don’t have an account?
                <Link href="/sign-up">
                  <span className="text-brand-1">Signup here.</span>
                </Link>
              </p>
            </div>
            {/* login right */}
            <div className="basis-full md:basis-1/2 flex justify-end">
              <Image
                width={497}
                height={364}
                className="hidden md:block"
                src="/images/reset-password.svg"
                alt="Reset Password"
              />
            </div>
          </div>
      </Container>
    </div>
  );
};

export default ResetPassword;
