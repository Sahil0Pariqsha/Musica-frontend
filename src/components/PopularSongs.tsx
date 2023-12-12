import React from "react";
import { popularReleases } from "../../constants";
import SongsListCarousel from "./Pages/carousels/songsListCarousel";

const PopularSongs = () => {
  return (
    <div className="mt-9">
      <h1 className="font-bold text-[24px]">Popular in your area</h1>
      <div className="">
        <SongsListCarousel songs={popularReleases} carouselNo={2} />
      </div>
    </div>
  );
};

export default PopularSongs;
