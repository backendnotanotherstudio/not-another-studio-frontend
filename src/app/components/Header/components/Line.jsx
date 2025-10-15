"use client";
import React, { useEffect, useState } from "react";

const Line = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    function scroll() {
      setEnabled(window.scrollY === 0);
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
      <div
        className=" transition-[left] ease-out min-h-[1px] h-[1px] w-full absolute bottom-[0px] "
        style={{
          left: !enabled ? "-100%" : "0%",
          transitionDuration:!enabled?'0.3s':'2.5s',
          background: "#FFFFFF",
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      />
      <div
        className=" transition-[left] ease-out min-h-[1px] h-[1px] w-full absolute bottom-[0px] "
        style={{
          left: !enabled ? "100%" : "0%",
          transitionDuration:!enabled?'0.3s':'2.5s',
          background: "#FFFFFF",
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      />
    </>
  );
};

export default Line;
