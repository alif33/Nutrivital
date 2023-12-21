import BlogHeader from "@/app/components/blog/BlogHeader";
import BlogSection from "@/app/components/blog/BlogSection";

const BlogPage = () => {
  return (
    <div className="my-28">
      <BlogHeader />
      <div className="flex  flex-col gap-24">
        <BlogSection sectionTitle={"Latest blog post"} />
        <BlogSection sectionTitle={"Features blog post"} />
      </div>
    </div>
  );
};

export default BlogPage;
