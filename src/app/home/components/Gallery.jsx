"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Gallery = ({ pageData }) => {
  const router = useRouter();
  const tl = useRef(null);
  useGSAP(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#image",
        start: "center center",
      },
    });

    tl.current.fromTo(
      "#image",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        stagger: 0.5,
        y: 0,
        duration: 0.75,
      }
    );

    // Cleanup function
    return () => {
      tl.current?.kill(); // Kill the timeline and its ScrollTrigger
    };
  }, [pageData]);

  function onClick(href) {
    if (href) {
      router.push(`projects/${href}`);
    }
  }

  return (
    <div className=" my-[100px] hidden md:flex flex-col items-center overflow-hidden ">
      <div className=" flex mx-[100px] gap-[7%] items-start ">
        <Image
          id="image"
          onClick={() => onClick(pageData?.projects[0]?.slug)}
          src={pageData?.projects[0]?.leftImage?.url ?? pageData.images[0].url}
          className=" object-cover aspect-square "
          width={729}
          height={729}
          alt="image"
        />
        <Image
          id="image"
          onClick={() => onClick(pageData?.projects[1]?.slug)}
          src={pageData?.projects[1]?.leftImage?.url ?? pageData.images[1].url}
          className=" object-cover w-[386px] relative top-[365px] h-[526px] "
          width={386}
          height={526}
          alt="image"
        />
      </div>
      <div className=" object-cover flex mx-[100px] mt-[186px] gap-[6%] items-start ">
        <Image
          id="image"
          onClick={() => onClick(pageData?.projects[2]?.slug)}
          src={pageData?.projects[2]?.leftImage?.url ?? pageData.images[2].url}
          className=" object-cover w-[634px] h-[481px] "
          width={634}
          height={481}
          alt="image"
        />
        <Image
          id="image"
          onClick={() => onClick(pageData?.projects[3]?.slug)}
          src={pageData?.projects[3]?.leftImage?.url ?? pageData.images[3].url}
          className=" object-cover w-[511px] relative top-[143px] h-[554px] "
          width={511}
          height={554}
          alt="image"
        />
      </div>
      <div className=" object-cover flex mt-[330px] gap-[7%] items-start ">
        <Image
          id="image"
          onClick={() => onClick(pageData?.projects[4]?.slug)}
          src={pageData?.projects[4]?.leftImage?.url ?? pageData.images[4].url}
          className=" object-cover w-[1157px] h-[771px] "
          width={1157}
          height={771}
          alt="image"
        />
      </div>
      <div className=" object-cover flex ml-[100px] mt-[154px] gap-[7%] items-start ">
        <Image
          id="image"
          onClick={() => onClick(pageData?.projects[5]?.slug)}
          src={pageData?.projects[5]?.leftImage?.url ?? pageData.images[5].url}
          className=" object-cover w-[762px] h-[710px] "
          width={762}
          height={710}
          alt="image"
        />
        <Image
          id="image"
          onClick={() => onClick(pageData?.projects[6]?.slug)}
          src={pageData?.projects[6]?.leftImage?.url ?? pageData.images[6].url}
          className=" object-cover w-[467px] relative top-[154px] h-[382px] "
          width={467}
          height={382}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Gallery;
