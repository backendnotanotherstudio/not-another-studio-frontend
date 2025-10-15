import Link from "next/link";
import React from "react";

const Footer = ({ infiniteBanner = false }) => {
  return (
    <div className=" h-[650px] px-[45px] py-[60px] flex relative md:flex-row flex-col border-t border-[#FFFFFF4D] ">
      <div className=" w-full md:w-[50%] md:scale-100 scale-50 md:top-0 md:left-0 -left-[76px] -top-[100px] relative flex items-end h-full ">
        <div className=" relative w-[313px] h-[356px] ">
          <svg
            width="149"
            className=" left-[72px] top-[21px] absolute "
            height="6"
            viewBox="0 0 149 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.268555 2.96743C6.42898 2.07083 12.5861 1.43794 18.7465 0.798462C30.3862 0.821536 62.1142 0.821536 74.1771 0.821536H129.608C135.768 1.4742 141.925 2.10709 148.086 2.97072C141.925 3.83106 135.768 4.46394 129.608 5.11991H74.1771C62.0083 5.11991 30.5284 5.11991 18.7465 5.14298C12.5894 4.5035 6.42898 3.86732 0.268555 2.97402"
              fill="#AEB3B8"
            />
          </svg>
          <svg
            className=" left-[24px] top-[72px] absolute "
            width="266"
            height="263"
            viewBox="0 0 266 263"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M129.263 262.396C56.558 262.396 0.575195 204.553 0.575195 127.993C0.575195 62.6636 63.3864 0.393311 136.772 0.393311C210.158 0.393311 265.113 56.8787 265.113 134.8C265.113 200.129 202.649 262.396 129.263 262.396ZM136.088 252.188C198.899 252.188 247.366 215.44 247.366 134.8C247.366 71.5109 194.799 10.6019 129.947 10.6019C65.0959 10.6019 18.329 47.3491 18.329 127.993C18.329 189.581 71.2365 252.188 136.088 252.188Z"
              fill="#AEB3B8"
            />
          </svg>
        </div>
      </div>
      <div className=" w-full md:mt-0 -mt-[130px] md:w-[50%] flex-col flex ">
        <Link
          href="/"
          className=" justify-start text-white md:text-5xl text-3xl font-light font-['Fraunces'] md:leading-[70px] leading-[50px]"
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className=" justify-start text-white md:text-5xl text-3xl font-light font-['Fraunces'] md:leading-[70px] leading-[50px]"
        >
          About
        </Link>
        <Link
          href="/projects"
          className=" justify-start text-white md:text-5xl text-3xl font-light font-['Fraunces'] md:leading-[70px] leading-[50px]"
        >
          Projects
        </Link>
        <Link
          href="/shop"
          className=" justify-start text-white md:text-5xl text-3xl font-light font-['Fraunces'] md:leading-[70px] leading-[50px]"
        >
          Shop
        </Link>
        <Link
          href="/contact-us"
          className=" justify-start text-white md:text-5xl text-3xl font-light font-['Fraunces'] md:leading-[70px] leading-[50px]"
        >
          Contact
        </Link>
        <div className=" column md:!items-end gap-[11px] mt-[36px] md:mt-0 ">
          <a
            href="mailto:info@notanotherstudio.com"
            className="w-48 h-4 justify-start text-white text-sm font-normal font-['Inter'] leading-none"
          >
            info@notanotherstudio.com
          </a>
          <a
            href="tel:+971585686729"
            className="w-48 h-4 justify-start text-white text-sm font-normal font-['Inter'] leading-none"
          >
            +971 58 5686729
          </a>
          <div className=" flex w-full md:flex-row gap-[11px] flex-col justify-between ">
            <a
              href="tel:+971585686729"
              className="w-48 h-4 justify-start text-white text-sm font-normal font-['Inter'] leading-none"
            >
              Instagram
            </a>
            <a
              href="tel:+971585686729"
              className="w-48 h-4 justify-start text-white text-sm font-normal font-['Inter'] leading-none"
            >
              Dubai, United Arab Emirates
            </a>
          </div>
          <div className="w-full mt-[30px] pt-[20px] pb-[30px] md:pb-0 justify-start border-t-[2px] border-white text-white text-sm font-normal font-['Inter'] leading-none">
            ©{new Date().getFullYear()} Not Another Studio
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
