import React from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/contact/card";
import emailIcon from "../../../assets/contact/email.png";
import phoneIcon from "../../../assets/contact/Icon.png";

const Information = () => {
  return (
    <div className="mt-10 mb-20 lg:my-32">
      <Container>
        <div className="flex flex-col lg:flex-row ">
          <div className="w-full lg:w-4/12 text-center lg:text-left">
            <h3 className="text-brand-2 mb-5 leading-tight font-semibold font-poppins text-[32px] lg:text-h3">
              Contact Us
            </h3>
            <p className="text-grey-600 text-sm lg:text-lg font-normal">
              Questions? Comments? Want to schedule a demo? We’d love to chat!
            </p>
          </div>
          <div className="w-full mt-20 lg:mt-auto lg:w-8/12 gap-5 flex flex-col lg:flex-row">
            <Card
              cardPadding={"p-4"}
              cardBg={"bg-grey-100"}
              image={emailIcon}
              title={"Email us"}
              subtitle={"Support@zamba"}
            />
            <Card
              cardPadding={"p-4"}
              cardBg={"bg-grey-100"}
              image={phoneIcon}
              title={"Email us"}
              subtitle={"Support@zamba"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Information;