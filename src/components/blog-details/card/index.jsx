import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="my-10 flex gap-7 flex-row">
      <div className="flex-1">
        <Image
          width={570}
          height={340}
          src={"/images/blogs/blog-content-1.svg"}
          alt="Content Image"
        />
      </div>
      <div className="flex-1">
        <Image
          width={570}
          height={340}
          src={"/images/blogs/blog-content-2.svg"}
          alt="Content Image"
        />
      </div>
    </div>
  );
};

export default Card;
