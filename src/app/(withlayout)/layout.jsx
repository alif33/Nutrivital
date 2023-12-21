import React from "react";
import Navbar from "../components/base/navbar";
import Social from "../components/home/social";
import Footer from "../components/home/footer";
import Reviews from "../components/home/reviews";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}

      <Social />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Layout;
