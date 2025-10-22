"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

const GalleryMobile = ({ pageData }) => {
  const router = useRouter();

  const tl = useRef(
    gsap.timeline({
      scrollTrigger: {
        trigger: "#image",
        start: "center center",
      },
    })
  );

  useGSAP(() => {
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
  });
  function onClick(href) {
    if (href) {
      router.push(`projects/${href}`);
    }
  }

  return (
    <div className=" flex flex-col px-[20px] overflow-hidden pb-[50px] mt-[50px] items-center md:hidden ">
      <div className=" flex gap-[20px] ">
        <Image
          id="image"
          onClick={() => onClick(pageData?.projects[0]?.slug)}
          src={pageData?.projects[0]?.leftImage?.url ?? pageData.images[0].url}
          className=" object-cover w-[206px] h-[232px] "
          width={206}
          height={232}
          alt="image"
        />
        <Image
          id="image"
          onClick={() => onClick(pageData?.projects[1]?.slug)}
          src={pageData?.projects[1]?.leftImage?.url ?? pageData.images[1].url}
          className=" object-cover mt-[116px] w-[124px] h-[171px] "
          width={206}
          height={232}
          alt="image"
        />
      </div>
      <div className=" flex gap-[20px] mt-[50px] ">
        <Image
          id="image"
          onClick={() => onClick(pageData?.projects[2]?.slug)}
          src={pageData?.projects[2]?.leftImage?.url ?? pageData.images[2].url}
          className=" w-[206px] h-[155px] object-cover "
          width={206}
          height={232}
          alt="image"
        />
        <Image
          id="image"
          onClick={() => onClick(pageData?.projects[3]?.slug)}
          src={pageData?.projects[3]?.leftImage?.url ?? pageData.images[3].url}
          className=" w-[124px] h-[124px] mt-[66px] "
          width={206}
          height={232}
          alt="image"
        />
      </div>
      <div className=" flex gap-[20px] mt-[50px] ">
        <Image
          id="image"
          onClick={() => onClick(pageData?.projects[4]?.slug)}
          src={pageData?.projects[4]?.leftImage?.url ?? pageData.images[4].url}
          className=" w-[323px] h-[215px] relative -left-[20px] object-cover "
          width={323}
          height={232}
          alt="image"
        />
      </div>
      <div className=" flex gap-[16px] mt-[50px] ">
        <Image
          id="image"
          onClick={() => onClick(pageData?.projects[5]?.slug)}
          src={pageData?.projects[5]?.leftImage?.url ?? pageData.images[5].url}
          className=" w-[214px] h-[199px] object-cover "
          width={214}
          height={232}
          alt="image"
        />
        <Image
          id="image"
          onClick={() => onClick(pageData?.projects[6]?.slug)}
          src={pageData?.projects[6]?.leftImage?.url ?? pageData.images[6].url}
          className=" w-[116px] h-[135px] object-cover mt-[32px] "
          width={116}
          height={135}
          alt="image"
        />
      </div>
    </div>
  );
};

export default GalleryMobile;
