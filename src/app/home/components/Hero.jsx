import Button from "@/app/components/Button/Button";
import Image from "next/image";
import React from "react";

const Hero = ({data}) => {
  return (
    <div className=" relative w-lvw max-h-[2000px] h-lvh min-h-[500px] md:min-h-[800px] flex items-center flex-col ">
      <Image
        width={1920}
        height={1080}
        src="/images/beach.jpg"
        alt="hero image"
        className=" object-cover w-full h-full "
      />
      <div className=" flex gap-[24px] flex-col items-start justify-end px-[20px] md:px-[57px] max-md:pb-[100px] py-[7%] absolute top-0 left-0 bg-[#00000050] w-full h-full ">
        <div className="max-w-120 justify-start text-white md:text-3xl text-xl font-light font-['Fraunces']">
          {data?.heroDesc}
        </div>
        <Button href='/contact-us' >CONTACT US</Button>
      </div>
      <div className="w-28 h-4 absolute justify-start bottom-[61px] text-white/60 text-sm font-bold font-['Inter'] uppercase leading-none">
        SCROLL DOWN
      </div>
    </div>
  );
};

export default Hero;
