import { getAboutPage } from "@/lib/api";
import Image from "next/image";
import React from "react";

const About = async () => {
  const {data} = await getAboutPage();

  return (
    <div className=" mx-[7%] mt-[124px] md:mt-[234px] mb-[172px] column !items-center ">
      <div className="max-w-[1171px] text-center justify-start text-white md:text-8xl text-4xl font-light font-['Fraunces'] leading-[50px] md:leading-[100px]">
        {data.title}
      </div>
      <img
        src={data.image.url}
        width={1138}
        height={833}
        className=" w-full mt-[38px] md:mt-[100px] max-w-[1138px] max-h-[833px] object-cover "
        alt="about-image"
      />
      <div className="max-w-[1138px] mt-[83px] justify-start text-white text-2xl font-light font-['Inter']">
        {data.content.split('\n').map((text,index) => (
          <p key={index} >{text}<br/></p>
        ))}
      </div>
    </div>
  );
};

export default About;
