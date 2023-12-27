import Header from "@/components/blog/header";
import Section from "@/components/blog/section";

const BlogPage = () => {
  return (
    <div className="my-28">
      <Header />
      <Section sectionTitle={"Latest blog post"} />
      <Section sectionTitle={"Features blog post"} />
    </div>
  );
};

export default BlogPage;
