"use client";
import Image from "next/image";
import React from "react";
import TopCharts from "./TopCharts";
import HeroCard from "./cards/HeroCard";
import { heroContainerData } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between w-full md:flex-row">
      <div className="max-w-[90vw] md:max-w-[50vw] flex-1 w-full rounded-[40px] overflow-hidden mx-auto">
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination]}
        >
          {heroContainerData.map((curElm, index) => (
            <SwiperSlide key={index}>
              <div className="cta-container bg-slate-500 flex-1 w-full  rounded-[40px] mx-auto overflow-hidden">
                <HeroCard
                  title={curElm.title}
                  heading={curElm.heading}
                  subHeading={curElm.subHeading}
                  likes={curElm.likes}
                  customers={curElm.customers}
                  image={curElm.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="charts flex-1 md:pl-[22px] mt-8 md:pr-6 md:mt-0 w-full ">
        <TopCharts title={"Top Charts"}/>
      </div>
    </div>
  );
};

export default Hero;
