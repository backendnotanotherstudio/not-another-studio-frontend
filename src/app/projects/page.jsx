"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import Hero from "./components/Hero";
import HeroMobile from "./components/HeroMobile";

const Projects = () => {

  return (
    <div className=" mt-[69px] md:mt-[104px] ">
      <Hero/>
      <HeroMobile/>
      <Swiper className=" h-[350px] md:h-[789px] ">
        {exampleData.gallery.map((image, index) => (
          <SwiperSlide key={index} className=" h-full ">
            <img src={image.url} className=" object-cover w-full h-full " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;

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
