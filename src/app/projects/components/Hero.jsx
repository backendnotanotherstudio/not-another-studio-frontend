"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React, { useState } from "react";

const Hero = ({ data }) => {
  const [selected, setSelected] = useState("request");
  console.log(data.request, data[selected].content);
  return (
    <div className=" hidden md:flex h-[1146px] ">
      <img
        className=" w-[50%] object-cover h-full "
        src={data?.leftImage?.url}
      />
      <div className=" w-[50%] p-[50px] pr-[72px] pb-[0] relative ">
        <div className=" w-full overflow-scroll pb-[10px] blockRenderer pr-[10px] h-full ">
          <BlocksRenderer content={data[selected].content} />
        </div>
        <div className=" flex gap-[10px] justify-between items-center px-[55px] absolute bottom-0 left-0 w-full h-[100px] border-t border-[#FFFFFF4D] bg-[#5D6771] ">
          {["REQUEST", "IDEA", "PROCESS", "RESULTS"].map((text, index) => (
            <div
              key={index}
              onClick={() => setSelected(text.toLowerCase())}
              style={{ fontWeight: selected === text.toLowerCase() ? "700" : "500" }}
              className=" select-none cursor-pointer justify-start text-white text-sm font-bold font-['Inter'] uppercase leading-none"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
