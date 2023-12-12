import React from "react";
import { yourMusicTuner } from "../../constants";
import SongsListCarousel from "./Pages/carousels/songsListCarousel";

const YourMusicTuner = () => {
  return (
    <div className="mt-9">
      <h1 className="font-bold text-[24px]">Your music tuner</h1>
      <div className="">
        <SongsListCarousel songs={yourMusicTuner} />
      </div>
    </div>
  );
};

export default YourMusicTuner;
