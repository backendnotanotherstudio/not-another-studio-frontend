"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React, { useState } from "react";

const HeroMobile = ({data}) => {
  const [selected, setSelected] = useState('request');

  return (
    <div className=" md:hidden flex flex-col ">
      <div className=" flex gap-[10px] justify-between items-center px-[27px] w-full h-[82px] border-t border-[#FFFFFF4D] bg-[#5D6771] ">
        {["REQUEST", "IDEA", "PROCESS", "RESULTS"].map((text, index) => (
          <div
            key={index}
            onClick={() => setSelected(text.toLowerCase())}
            style={{
              fontWeight: selected === text.toLowerCase() ? "700" : "500",
            }}
            className=" select-none cursor-pointer justify-start text-white text-sm font-bold font-['Inter'] uppercase leading-none"
          >
            {text}
          </div>
        ))}
      </div>
      <img className=" w-full object-cover h-full " src="/images/room.jpg" />
      <div className=" w-full p-[20px] pb-[0] relative ">
        <div className=" w-full overflow-scroll pb-[10px] blockRenderer pr-[10px] h-full ">
          <BlocksRenderer content={data[selected].content} />
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;
