import Image from "next/image";
import React from "react";
import customerImage1 from "../../../assets/customers/customer1.png";
import customerImage2 from "../../../assets/customers/customer2.png";
import customerImage3 from "../../../assets/customers/customer3.png";
import customerImage4 from "../../../assets/customers/customer4.png";
import customerImage5 from "../../../assets/customers/customer5.png";
import Container from "../ui/Container";

const Customers = () => {
  return (
    <Container>
      <div className="mt-32 mb-20">
        <p className="font-medium text-lg text-gray-600 font-urbanist text-center  ">
          We take care of more than{" "}
          <span className="font-bold underline">1000+</span> customers
        </p>
        <div className="lg:flex lg:flex-row  grid text-center grid-cols-3 border-b border-gray-200 py-5 lg:justify-between  items-center">
          <Image src={customerImage5} alt={"Customer Image"} />
          <Image src={customerImage4} alt={"Customer Image"} />
          <Image src={customerImage1} alt={"Customer Image"} />
          <Image src={customerImage2} alt={"Customer Image"} />
          <Image src={customerImage3} alt={"Customer Image"} />
        </div>
      </div>
    </Container>
  );
};

export default Customers;
