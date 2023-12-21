"use client";
import React from "react";
import Container from "../ui/Container";
import ContactCard from "./ContactCard";
import fbIcon from "../../../assets/contact/Facebook.png";
import instagramIcon from "../../../assets/contact/Instagram.png";
import twitterIcon from "../../../assets/contact/Twitter.png";
import "./contactform.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className="py-5 lg:py-24 contact-form ">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* form left */}
          <div className="flex-1 ">
            <h2 className="text-[32px] text-center lg:text-left lg:text-h2 font-poppins font-semibold leading-tight text-grey-950 mb-5 capitalize">
              Send us a <span className="lg:block">message</span>
            </h2>
            <p className="text-sm lg:text-lg leading-6 font-urbanist font-normal text-grey-400">
              {
                " Fill out the form and our team will get back to you as quickly as              we can. you'll be able to build with ease."
              }
            </p>
            <div className="grid mt-10 grid-cols-1 lg:grid-cols-2 gap-3">
              <ContactCard
                cardPadding={"py-4"}
                title={"Facebook"}
                subtitle={"iravit_Official"}
                image={fbIcon}
              />
              <ContactCard
                cardPadding={"py-4"}
                title={"Twitter"}
                subtitle={"iravit_Official"}
                image={twitterIcon}
              />
              <ContactCard
                cardPadding={"py-4"}
                title={"Instagram"}
                subtitle={"iravit_Official"}
                image={instagramIcon}
              />
            </div>
          </div>
          {/* form right */}
          <div className="flex-1">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col gap-3 lg:gap-5 w-full"
            >
              <div className="flex flex-row gap-3 lg:gap-4">
                <input
                  placeholder="Your Name"
                  className="border lg:text-base placeholder:text-xs w-full border-gray-300 rounded-md py-2 px-4 lg:py-5 lg:px-7 outline-brand-1 "
                  type="text"
                  name="name"
                />
                <input
                  placeholder="Enter your email"
                  className="border w-full lg:text-base placeholder:text-xs border-gray-300 rounded-md lg:py-5 py-2 lg:px-7 px-4 outline-brand-1"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex flex-row gap-3 lg:gap-4">
                <input
                  placeholder="Phone number"
                  className="border w-full border-gray-300 rounded-md lg:py-5 py-2 lg:px-7 px-4  lg:text-base placeholder:text-xs  outline-brand-1"
                  type="tel"
                  name="phone"
                />
                <input
                  placeholder="Company name"
                  className="border w-full border-gray-300 rounded-md lg:py-5 py-2 lg:px-7 px-4  lg:text-base placeholder:text-xs  outline-brand-1"
                  type="text"
                  name="company"
                />
              </div>
              <div className="w-full">
                <textarea
                  placeholder="Your message"
                  className="border lg:text-base placeholder:text-xs   border-gray-300 rounded-md w-full py-5 px-7 outline-brand-1"
                  name=""
                  id=""
                  cols="auto"
                  rows="10"
                ></textarea>
              </div>
              <button
                className="text-xs
                 lg:text-base bg-brand-1  text-white py-5 rounded-md font-urbanist
                text-center font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
