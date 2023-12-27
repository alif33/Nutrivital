import React from "react";
import Navbar from "@/components/common/navbar";
import Banner from "@/components/common/banner";
import Testimonials from "@/components/common/testimonial";
import Footer from "@/components/common/footer";

const layout = ({ children }) => {
  return(
    <>
        <Navbar />
        {children}
        <Banner />
        <Testimonials />
        <Footer />
    </>
  )
};

export default layout;
