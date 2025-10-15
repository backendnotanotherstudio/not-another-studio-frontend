"use client";

import React, { useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Gallery = ({ gallery }) => {
  const [selected, setSelected] = useState(0);

  useLayoutEffect(() => {
    setSelected(0)
  },[gallery])

  return (
    <div className=" w-full column gap-[33px] ">
      <img
        src={gallery[selected]?.url}
        className=" object-cover w-full aspect-square "
      />
      <Swiper spaceBetween={33} slidesPerView={2} className=" w-full ">
        {gallery.map((image, index) => (
          <SwiperSlide key={image.id} className=" aspect-[3/2] ">
            <img
              src={image.url}
              onClick={() => setSelected(index)}
              className=" w-full h-full object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
