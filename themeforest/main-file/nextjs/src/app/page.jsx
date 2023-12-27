import React from "react";
import Navbar from "@/components/common/navbar";
import Hero from "@/components/home/hero";
import Sponsor from "@/components/home/sponsor";
import Nutrition from "@/components/home/nutrition";
import Menu from "@/components/home/menu";
import Video from "@/components/home/video";
import Banner from "@/components/common/banner";
import Blog from "@/components/home/blog";
import Testimonials from "@/components/common/testimonial";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsor />
      <Nutrition />
      <Menu />
      <Video />
      <Banner />
      <Blog />
      <Testimonials />
      <Footer />
    </>
  );
}
