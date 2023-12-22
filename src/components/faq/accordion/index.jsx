import React from "react";
import Card from "./card";
import faqs from "@/data/faqs.json";

const Accordion = () => {
  return (
    <>
      {
        faqs.map((faq, index)=>(
          <Card
            key={index}
            title={faq.title}
            description={faq.description}
          />
        ))
      }
    </>
  );
};

export default Accordion;