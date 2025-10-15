import React from "react";
import Logo from "./components/Logo";
import Link from "next/link";
import Image from "next/image";
import Line from "./components/Line";

const Header = () => {
  return (
    <div className=" flex justify-between items-center fixed md:h-[104px] h-[70px] top-0 z-[1000] md:px-[50px] px-[20px] pt-[23px] pb-[22px] md:pt-[42px] md:pb-[41px] w-dvw ">
      <Line/>
      <div className=" gap-[67px] md:flex hidden ">
        <Link
          href="/"
          className="justify-start text-white text-sm font-medium font-['Inter']"
        >
          HOME
        </Link>
        <Link
          href="/about-us"
          className="justify-start text-white text-sm font-medium font-['Inter']"
        >
          ABOUT
        </Link>
      </div>
      <div className=" gap-[60px] md:flex hidden ">
        <Link
          href="/shop"
          className="justify-start text-white text-sm font-medium font-['Inter']"
        >
          SHOP
        </Link>
        <Link
          href="/contact-us"
          className="justify-start text-white text-sm font-medium font-['Inter']"
        >
          CONTACT
        </Link>
      </div>
      <div className=" pointer-events-none md:visible invisible absolute left-0 top-0 w-full h-full flex items-center justify-center ">
        <Logo />
      </div>
      <Image
        width={302}
        height={29}
        className=" pointer-events-auto w-[156px] h-[15px] md:hidden block transition-[top,width] ease-in-out "
        alt="logo"
        src="/images/headerLogo.png"
      />
      <div className=" flex md:hidden gap-[10px] items-center ">
        <div className="justify-start text-white text-sm font-medium font-['Inter']">
          MENU
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 10H7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 6H3"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 14H3"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 18H7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
