"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";

const Logo = () => {
  const path = usePathname();
  const [home, setHome] = useState(false);
  const router = useRouter();

  useLayoutEffect(() => {
    const isHome = path === "/" && window.scrollY === 0;
    setHome(isHome);
  }, [path]);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 0) {
        setHome(false);
      } else {
        setHome(true);
      }
    }

    if (path === "/") {

      window.addEventListener("scroll", onScroll);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [path]);

  return (
    <Image
      onClick={() => (!home && (path !== "/") ? router.push("/") : window.scrollTo({top:0,behavior:'smooth'}))}
      style={{
        top: `${home ? `40vh` : `${37.5}px`}`,
        width: `${home ? "1310px" : "302px"}`,
        transitionDuration: `${home ? "200ms" : "400ms"}`,
      }}
      width={path === "/" ? 1310 : 302}
      height={path === "/" ? 126 : 29}
      className=" px-[20px] absolute pointer-events-auto transition-[top,width] ease-in-out "
      alt="logo"
      src="/images/headerLogo.png"
    />
  );
};

export default Logo;
