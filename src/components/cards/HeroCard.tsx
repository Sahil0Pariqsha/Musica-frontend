import { heroContainer } from "@/types";
import Image from "next/image";
import React from "react";

const HeroCard = ({
  title,
  heading,
  subHeading,
  likes,
  image,
  customers,
}: heroContainer) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div
      className="flex flex-col justify-between bg-repeat-x bg-cover bg-center min-h-[420px] h-full px-[45px] py-[38px] text-white dark:text-white"
      style={backgroundImageStyle}
    >
      <p className="text-[12px]">{title}</p>
      <div className="w-[274px]">
        <h1 className="text-[35px] font-bold">{heading}</h1>
        <p>{subHeading}</p>
      </div>

      {/* Customers Section */}
      <div className="flex gap-[11px]">
        <span className="flex ml-2">
          {customers.map((curElm, index) => (
            <div className="-ml-2 rounded-[50%] h-[25px] w-[25px]" key={index}>
              <div className="w-full h-full">
                <Image
                  src={curElm}
                  alt="customers"
                  height={40}
                  width={40}
                  className="rounded-[50%]"
                />
              </div>
            </div>
          ))}
        </span>
        <span>
          <i className="fa-solid fa-heart"></i>
        </span>
        <span className="-ml-[2px]">{likes}k Likes</span>
      </div>
    </div>
  );
};

export default HeroCard;
