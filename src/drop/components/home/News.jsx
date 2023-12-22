import React from "react";
import Container from "../ui/Container";
import NewsCard from "./NewsCard";
import newsImage1 from "../../../assets/news/news1.png";
import newsImage2 from "../../../assets/news/news2.png";
import newsImage3 from "../../../assets/news/news3.png";

const News = () => {
  return (
    <div className="my-44">
      <Container>
        <h3 className="text-brand-2 mb-16 text-center leading-tight font-semibold font-poppins text-[32px]   lg:text-h3">
          Our latest News <br />
          and articles
        </h3>
        <div className="flex flex-col lg:flex-row gap-5">
          <NewsCard
            image={newsImage1}
            author={"BLOG, Saas"}
            date={"11 May, 2023"}
            title={"Best Saas platform For 2023"}
            desc="Software as a service (SaaS) allows users to connect to and use cloud-based apps over the Internet."
          />
          <NewsCard
            image={newsImage2}
            author={"BLOG, Saas"}
            date={"11 May, 2023"}
            title={"Best Saas platform For 2023"}
            desc="Software as a service (SaaS) allows users to connect to and use cloud-based apps over the Internet."
          />
          <NewsCard
            image={newsImage3}
            author={"BLOG, Saas"}
            date={"11 May, 2023"}
            title={"Best Saas platform For 2023"}
            desc="Software as a service (SaaS) allows users to connect to and use cloud-based apps over the Internet."
          />
        </div>
      </Container>
    </div>
  );
};

export default News;
