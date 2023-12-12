"use client";
import { topChartCards } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

const ChartCardLong = ({
  title,
  image,
  description,
  duration,
  fav,
}: topChartCards) => {
  const [favourite, setFavourite] = useState(fav);

  const handleFavClick = () => {
    setFavourite(!favourite);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="flex items-center justify-between flex-1 bg-[#0f1112] pl-[17px] pr-[21px] py-[17px] rounded-[20px] text-white">
      <div className="flex items-center">
        <div
          className="cursor-pointer w-[63px] h-[63px] bg-repeat-x bg-cover bg-center rounded-[10px]"
          style={backgroundImageStyle}
        >
          {/* <Image
            src={image}
            alt="top chart song thumbnail"
            width={63}
            height={63}
          /> */}
        </div>
        <div className="ml-[14px] leading-6">
          <h1 className="text-[17px] ">{title}</h1>
          <p className="text-[17px]  opacity-50">{description}</p>
          <p className="text-[17px] ">{duration}</p>
        </div>
      </div>
      <div className="w-fixed flex items-center justify-center text-center border-2 rounded-[50%] border-white/10 h-12 w-12 text-[#5bd6d2] dark:text-[#FACD66] ">
        <button className="mt-1" onClick={handleFavClick}>
          <i
            className={`${
              favourite ? "fa-solid" : "fa-regular"
            } fa-heart text-[20px] h-fit font-light`}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default ChartCardLong;
