import Container from "@/components/ui/Container";
import Accordion from "@/components/faq/accordion";

const FaqPage = () => {
  return (
    <div className="mb-20">
      <Container>
        <div className="mx-auto my-14 max-w-3xl text-center">
          <h3 className="text-brand-2 mb-8 text-center font-poppins text-[32px] lg:text-h3 leading-tight font-semibold">
            Solutions: all your <br /> questions answered
          </h3>
          <p className=" mb-20 text-sm leading-5 lg:text-lg text-center  font-urbanist text-grey-500">
            We started working on Taskable because we had the same problem. All
            the tasks, files, and information we needed to get work done was
            spread across Slack, email, project management tools, and cloud
            storage.
          </p>
          <Accordion />
        </div>
      </Container>
    </div>
  );
};

export default FaqPage;
