"use client";
import React from "react";
import TopCharts from "../TopCharts";

const Albums = () => {
  return (
    <div>
      <h1 className="text-center text-[40px] font-bold">Albums</h1>
      <div className="charts md:pl-[22px] mt-8 md:pr-6 md:mt-0 w-full ">
        <TopCharts title={"Top Charts"} />
        <TopCharts title={"Top this week"} />
        <TopCharts title={"Most Listen World-wide"} />
      </div>
    </div>
  );
};

export default Albums;
