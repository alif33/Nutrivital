import React from "react";
import Link from "next/link";
import Container from "@/components/ui/container";
import BlogCard from "@/components/blog/section/card";

const Blog = () =>{
    return(
        <Container>
            <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-between pt-20">
                <h1 className="basis-full md:basis-1/2 text-[#141414] text-4xl font-bold">Read Our Best Articles for <span className="text-[#2A9D8F]">Holistic Health</span></h1>
                <span className="basis-full md:basis-1/2 lg:px-20">
                    <p className="text-base font-normal mb-4 pb-4 pt-7 md:pt-0">{"We'll share insights, techniques, and practices that can help you manage stress, increase happiness"}</p>
                    <Link href="/blog" className="rounded bg-brand-1 py-4 px-10 text-white text-base font-semibold">See More</Link>
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-5">
                <BlogCard
                    image="/images/blogs/blog-post-1.svg"
                    author={"BLOG, Saas"}
                    date={"11 May, 2023"}
                    title={"Vitality in Every Bite"}
                    desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
                />
                <BlogCard
                    image="/images/blogs/blog-post-2.svg"
                    author={"BLOG, Saas"}
                    date={"11 May, 2023"}
                    title={"Nourish Your Way to Wellness"}
                    desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
                />
                <BlogCard
                    image="/images/blogs/blog-post-3.svg"
                    author={"BLOG, Saas"}
                    date={"11 May, 2023"}
                    title={"Fueling Healthy Lifestyle Choices"}
                    desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
                />
            </div>
        </Container>
    )
}
export default Blog;