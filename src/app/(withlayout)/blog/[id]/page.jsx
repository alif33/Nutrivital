import React from "react";
import Container from "@/components/ui/Container";
import Header from "@/components/blog-details/header";
import Content from "@/components/blog-details/content";
import Listing from "@/components/blog-details/listing";
import Card from "@/components/blog-details/card";
import Footer from "@/components/blog-details/footer";
import BlogSection from "@/components/blog/section";

const BlogDetails = ({
  params,
  searchParams,
  title,
  subtitle,
  auth,
  date,
  authImage,
  image,
  content,
}) => {
  console.log(params);
  return (
    <div className="mt-20">
      <Container>
        {/* top */}
        <Header />
        {/* main content */}
        <div className="">
          {/* content -1  */}
          <Content
            title={"Top new features"}
            content={[
              {
                pera: "Whether your team is spread around a conference table or around the world, a productive brainstorm can feel like a win, eng the players and producing valuable content.",
              },
              {
                pera: "Unfortunately, there are plenty of things that can derail brainstorming sessions, including unbalanced conversation dominated byrts or quick thinkers, awkward silences that make the whole meeting painful, and anchoring effects, where participast idea or two that  up during the meeting, stifling new ideas and preventing the team from moving on.",
              },
              {
                pera: "No matter what field you are in, brainstorming is a fundamental activity that can move ideas forward and produce better rReady for better brainstorming? We’ve compiled the top five tips you can use today to make brainstorming more fun.",
              },
            ]}
          />
          {/* Content - 2 */}
          <Content
            title={"TLead Generation: The Power Of “Free Samples”"}
            content={[
              {
                pera: "It’s easy to simply gather your group, state your problem, and ask for ideas. But is this the most efficient way to generate fresh, productive ideas? There are specialised methods for brainstorming that take idea generation seriously, and you may want to give some a try. They include:",
              },
            ]}
          />
          <Listing
            list={[
              {
                name: "Brainwriting: Everyone writes down three ideas and passes their ideas to the person on their left (or right), who builds off those ideas before passing them on again. This way, ideas can cross-pollinate, morph and build on top of each other from different perspectives. After all, two heads are better than one.",
              },
              {
                name: "Rapid ideation: Everyone writes down as many ideas as they can in a set amount of time before anything is discussed or critiqued. This is a fun way to get all the good (and bad) ideas out fast and bring a sense of fun urgency to the session.",
              },
              {
                name: "Figure storming: The group picks a well-known figure who is not in the room and asks how they would approach the problem. For example, “How would Barack Obama (or Harry Potter, or anyone else) approach this problem?” - prepare for some funny answers here, this method is a good ice-breaker for everyone involved.",
              },
              {
                name: "Change of scenery: Sometimes the conference room is not the best place for brainstorming. Try moving outside, heading for lunch, or ",
              },
            ]}
          />
          <Card />
          <Content
            content={[
              {
                pera: "It’s easy to simply gather your group, state your problem, and ask for ideas. But is this the most efficient way to generate fresh, productive ideas? There are specialised methods for brainstorming that take idea generation seriously, and you may want to give some a try. They include:",
              },
            ]}
          />
          <Listing
            list={[
              {
                name: "Brainwriting: Everyone writes down three ideas and passes their ideas to the person on their left (or right), who builds off those ideas before passing them on again. This way, ideas can cross-pollinate, morph and build on top of each other from different perspectives. After all, two heads are better than one.",
              },
              {
                name: "Rapid ideation: Everyone writes down as many ideas as they can in a set amount of time before anything is discussed or critiqued. This is a fun way to get all the good (and bad) ideas out fast and bring a sense of fun urgency to the session.",
              },
              {
                name: "Figure storming: The group picks a well-known figure who is not in the room and asks how they would approach the problem. For example, “How would Barack Obama (or Harry Potter, or anyone else) approach this problem?” - prepare for some funny answers here, this method is a good ice-breaker for everyone involved.",
              },
              {
                name: "Change of scenery: Sometimes the conference room is not the best place for brainstorming. Try moving outside, heading for lunch, or ",
              },
            ]}
          />
          <Footer author={"Brian Aude"} date={"may 12, 2023"} />
          <div className="my-16">
            {" "}
            <BlogSection sectionTitle={"Similer Posts"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
