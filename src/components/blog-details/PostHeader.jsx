import React from "react";
import Container from "../ui/container";
import Image from "next/image";
import authorImage from "../../../assets/blog-details/auth.png";
import bannerImage1 from "../../../assets/blog-details/banner.png";

const BlogDetailsHeader = () => {
  return (
    <div>
      <Container>
        <Image
          src={bannerImage1}
          height={500}
          alt="Banner Image"
          width="100%"
        />
        <div className="my-8">
          <h2 className="text-h2 pt-6 font-poppins text-grey-900 font-semibold leading-tight">
            Facebook Marketing To Boost Your Money in 2023
          </h2>
          <p className="font-normal text-xl leading-8 font-urbanist text-secondary-1">
            Our commenting feature is a firm favorite among our customers,
            eliminating the need for endless email threads and multiple
            messaging apps, and ensuring that teams, collaborators and clients…
          </p>
          <div className="flex py-5  border-b border-b-grey-300 flex-row gap-3">
            <Image
              src={authorImage}
              className="w-20 h-20 rounded-full"
              alt="Author Image"
            />
            <div className="">
              <h4 className="font-semibold font-poppins text-3xl text-secondary-1 leading-normal">
                AJOY SARKER
              </h4>
              <p className="text-lg font-urbanist leading-8 text-grey-400">
                May 14, 2023
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetailsHeader;
