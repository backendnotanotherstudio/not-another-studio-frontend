import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  onClick,
  disabled,
  href,
  className = "",
  children,
  type,
}) => {
  const tailwind = twMerge(
    "bg-[#FFFFFF80] px-[23px] py-[11px] font-[Inter] font-[500]  ",
    className
  );

  if (href) {
    return (
      <div className=" hover:p-[0px] transition-[padding,margin] duration-500 hover:duration-75 hover:m-[6px] flex items-center justify-center p-[6px] border border-[#FFFFFF80] rounded-[3px] ">
        <Link href={href} onClick={onClick} className={tailwind}>
          {children}
        </Link>
      </div>
    );
  }
  return (
    <div className=" hover:p-[0px] transition-[padding,margin] duration-500 hover:duration-75 hover:m-[6px] flex items-center justify-center p-[6px] border border-[#FFFFFF80] rounded-[3px] ">
      <button
        disabled={disabled}
        style={{ cursor: disabled ? "not-allowed" : "pointer" }}
        type={type}
        href={href}
        onClick={onClick}
        className={tailwind}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
