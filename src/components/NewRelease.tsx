import React from "react";
import { newReleases } from "../../constants";
import SongsListCarousel from "./Pages/carousels/songsListCarousel";

const NewRelease = () => {
  return (
    <div className="mt-9">
      <h1 className="font-bold text-[24px]">NewRelease</h1>
      <div className="">
        <SongsListCarousel songs={newReleases} />
      </div>
    </div>
  );
};

export default NewRelease;
