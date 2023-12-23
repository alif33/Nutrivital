import React from 'react';
import Container from '@/components/ui/container';
import BlogCard from '@/components/blog/BlogCard';

const Blog = () =>{
    return(
        <Container>
            <div className="flex justify-between pt-20">
                <h1 className="basis-1/2 text-[#141414] text-4xl font-bold">Read Our Best Articles for <span className="text-[#2A9D8F]">Holistic Health</span></h1>
                <span className="px-32">
                    <p className="text-base font-normal pb-4">{"We'll share insights, techniques, and practices that can help you manage stress, increase happiness"}</p>
                    <button className="flex flex-row gap-2 rounded bg-brand-1 py-4 px-10 text-white text-base font-semibold">See More</button>
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-14 gap-5">
                <BlogCard
                    image="/images/blogs/01.png"
                    author={"BLOG, Saas"}
                    date={"11 May, 2023"}
                    title={"Vitality in Every Bite"}
                    desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
                />
                <BlogCard
                    image="/images/blogs/02.png"
                    author={"BLOG, Saas"}
                    date={"11 May, 2023"}
                    title={"Nourish Your Way to Wellness"}
                    desc="Guiding you on optimizing your nutritional choices to support your overall well-being..."
                />
                <BlogCard
                    image="/images/blogs/03.png"
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