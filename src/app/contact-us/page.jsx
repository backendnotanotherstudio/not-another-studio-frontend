import Link from "next/link";
import React from "react";
import Button from "../components/Button/Button";
import ContactSection from "./components/ContactSection";
import { getContactPage } from "@/lib/api";

const Contact = async () => {
  const pageData = await getContactPage();

  return (
    <div>
      <div className=" mt-[70px] md:mt-[104px] h-[450px] md:h-[920px] relative ">
        <div className=" h-[118px] md:h-[158px] z-[1] w-full absolute left-0 top-0 border-b border-[#FFFFFF4D] flex items-center px-[55px] ">
          <div className="w-28 h-4 justify-start text-white text-sm font-medium font-['Inter'] uppercase leading-none">
            Reach us here
          </div>
        </div>
        <div className=" pt-[170px] md:pt-[256px] z-[1] md:pl-[50px] md:ml-[20%] relative column gap-[2px] md:mx-0 mx-[20px] md:gap-[27px] md:border-l h-full border-[#FFFFFF4D] ">
          <Link
            href="tel:+971585686729"
            className="max-w-[598px] justify-start text-white md:text-6xl text-4xl font-light font-['Fraunces'] md:leading-[70px]"
          >
            +971 58 5686729
          </Link>
          <Link
            href="mailto:info@notanotherstudio.com"
            className=" justify-start text-white md:text-3xl text-2xl font-light font-['Fraunces'] leading-10"
          >
            info@notanotherstudio.com
          </Link>
          <a
            href="https://www.instagram.com/n0tan0therstudi0/"
            className=" rounded-full border border-[#FFFFFF99] p-[18px] absolute bottom-[74px] "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                stroke="white"
                strokeOpacity="0.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0002 11.37C16.1236 12.2022 15.9815 13.0522 15.594 13.799C15.2065 14.5458 14.5933 15.1514 13.8418 15.5297C13.0903 15.9079 12.2386 16.0396 11.408 15.9059C10.5773 15.7723 9.80996 15.3801 9.21503 14.7852C8.62011 14.1902 8.22793 13.4229 8.09426 12.5922C7.9606 11.7615 8.09226 10.9099 8.47052 10.1584C8.84878 9.40685 9.45438 8.79374 10.2012 8.40624C10.948 8.01874 11.7979 7.87658 12.6302 8C13.4791 8.12588 14.265 8.52146 14.8719 9.1283C15.4787 9.73515 15.8743 10.5211 16.0002 11.37Z"
                stroke="white"
                strokeOpacity="0.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 6.5H17.5113"
                stroke="white"
                strokeOpacity="0.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className=" md:flex hidden md:column justify-end absolute right-0 bottom-0 md:bottom-[unset] md:top-0 h-full w-full max-w-[461px] ">
          <img
            src="/images/dubai.jpg"
            className=" h-full object-cover w-full"
          />
          <div className=" column gap-[22px] absolute bottom-[50px] left-[50px] ">
            <div className="w-80 h-11 justify-start text-white text-2xl font-light font-['Fraunces'] leading-10">
              Dubai, United Arab Emirates
            </div>
            <Button
              href="https://maps.app.goo.gl/pvC7sZdRqafTHgnn9"
              className=" z-[100] "
            >
              SEE ON MAP
            </Button>
          </div>
        </div>
      </div>
      <div className=" relative md:hidden flex items-end h-[450px] px-[25px] py-[50px] z-[1] ">
        <Button className=" z-50 ">SEE ON MAP</Button>
        <img
          src="/images/dubai.jpg"
          className=" absolute top-0 left-0 -z-[1] max-h-[450px] h-full object-cover w-full"
        />
      </div>
      <ContactSection pageData={pageData?.data} />
    </div>
  );
};

export default Contact;
