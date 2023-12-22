import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import pageNoteFoundImage from "../assets/page-not-found.png";
import Container from "@/components/ui/Container";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

const NotFoundPage = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <div className="flex flex-col justify-center items-center w-full my-20">
          <Image
            src={pageNoteFoundImage}
            alt="Page not found"
            height="auto"
            className="w-[150px]  lg:w-[20%] "
          />

          <h1 className="font-poppins text-[124px] lg:text-[200px] font-semibold text-brand-2 leading-tight">
            404
          </h1>
          <p className="text-2xl lg:text-3xl font-normal font-urbanist text-grey-500">
            page could not fround
          </p>
          <Link className="mt-14 " href="/">
            <Button
              bgColor={"bg-brand-1"}
              color={"text-white"}
              btnPadding={"py-3 px-8"}
              text="Back to home "
            />
          </Link>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default NotFoundPage;

