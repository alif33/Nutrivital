import React from "react";
import AccordionCard from "./AccordionCard";
import faqs from "@/data/faqs.json";

const FaqAccordion = () => {
  return (
    <>
      {
        faqs.map((faq, index)=>(
          <AccordionCard
            key={index}
            title={faq.title}
            description={faq.description}
          />
        ))
      }
    </>
  );
};

export default FaqAccordion;
