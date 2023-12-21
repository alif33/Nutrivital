import React from "react";
import AccordionCard from "./AccordionCard";

const FaqAccordion = () => {
  return (
    <>
      <AccordionCard
        title="Is my data safe?"
        subtitle={
          "Your data privacy is protected across Google with built-in security designed to automatically stop threats before they reach you. Learn more. Advanced ..."
        }
      />
      <AccordionCard
        title={"How does the 30-day free software trial work?"}
        subtitle={
          "Your data privacy is protected across Google with built-in security designed to automatically stop threats before they reach you. Learn more. Advanced ..."
        }
      />
      <AccordionCard
        title={"What happens after my free trial?"}
        subtitle={
          "Your data privacy is protected across Google with built-in security designed to automatically stop threats before they reach you. Learn more. Advanced ..."
        }
      />
      <AccordionCard
        title={"What makes LessAccounting better than the rest?"}
      />
      <AccordionCard title={"Is my data safe?"} />
    </>
  );
};

export default FaqAccordion;
