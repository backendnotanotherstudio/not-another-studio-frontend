"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import Hero from "../components/Hero";
import HeroMobile from "../components/HeroMobile";

const Client = ({data}) => {

  return (
    <div className=" mt-[69px] md:mt-[104px] ">
      <Hero data={data} />
      <HeroMobile data={data} />
      <Swiper className=" h-[350px] md:h-[789px] ">
        {data.gallery.map((image, index) => (
          <SwiperSlide key={index} className=" h-full ">
            <img src={image.url} className=" object-cover w-full h-full " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Client;

const exampleData = {
  gallery: [
    {
      url: "/images/placeholder-4.png",
    },
    {
      url: "/images/placeholder-4.png",
    },
    {
      url: "/images/placeholder-4.png",
    },
    {
      url: "/images/placeholder-4.png",
    },
  ],
};
