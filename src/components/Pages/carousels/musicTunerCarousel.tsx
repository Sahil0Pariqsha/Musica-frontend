"use client";
import React from "react";
import SongsCard from "../../cards/SongsCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Keyboard, Pagination } from "swiper/modules";

const MusicTunerCarousel = ({ songs }: any) => {
  return (
    <div className="w-[95vw] md:w-[92vw] mt-3 md:pr-6">
      <Swiper
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1.9,
            spaceBetween: 20,
          },
          426: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
          1025: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, Pagination]}
      >
        <div className="song-carousel flex w-full overflow-scroll gap-20">
          {songs.map((song: any, index: number) => {
            return (
              <SwiperSlide key={`${song.id}_${index}`} className="w-[153px]">
                <SongsCard
                  id={song.id}
                  image={song.image}
                  title={song.title}
                  artist={song.artist}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default MusicTunerCarousel;
