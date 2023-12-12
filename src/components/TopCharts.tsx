import React from "react";
import ChartCardLong from "./cards/ChartCardLong";
import { topChartsData } from "../../constants";

const TopCharts = ({ title }: any) => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-[24px] mb-3">{title}</h1>

      {topChartsData.map((curElm, index) => (
        <div key={index} className="mb-3 w-full">
          <ChartCardLong
            title={curElm.title}
            description={curElm.description}
            duration={curElm.duration}
            image={curElm.image}
            fav={curElm.fav}
          />
        </div>
      ))}
    </div>
  );
};

export default TopCharts;
