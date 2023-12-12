import { songCard } from "@/types";
import Image from "next/image";
import React from "react";

const SongsCard = ({ image, title, artist }: songCard) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div>
      <div
        className="rounded-[25px] overflow-hidden w-[153px] h-[153px] md:w-[180px] md:h-[180px] bg-repeat-x bg-cover bg-center cursor-pointer"
        style={backgroundImageStyle}
      ></div>
      <h1 className="text-[12px] md:text-[20px] mt-1">{title}</h1>
      <p className="text-[12px] md:text-[20px] opacity-50">{artist}</p>
    </div>
  );
};

export default SongsCard;
