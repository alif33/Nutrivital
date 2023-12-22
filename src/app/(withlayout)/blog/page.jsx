import Header from "@/components/blog/header";
import Section from "@/components/blog/section";

const BlogPage = () => {
  return (
    <div className="my-28">
      <Header />
      <div className="flex  flex-col gap-24">
        <Section sectionTitle={"Latest blog post"} />
        <Section sectionTitle={"Features blog post"} />
      </div>
    </div>
  );
};

export default BlogPage;
