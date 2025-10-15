import Link from "next/link";
import React from "react";

const ProductPreview = ({ data, style = {} }) => {
  if (!data) {
    return <></>;
  }

  return (
    <Link
      style={style}
      className=" w-full h-full"
      href={`/shop/${encodeURIComponent(data.slug)}`}
    >
      <img
        src={data.images[0].url}
        style={{ height: "calc(100% - 72px)" }}
        className=" w-full aspect-[1.25] object-cover shrink"
      />
      <div className=" flex items-center shrink-0 justify-between mt-[24px] ">
        <div className="max-w-80 truncate justify-start text-white text-2xl font-light font-['Fraunces'] leading-loose">
          {data.name}
        </div>
        <div className=" rounded-full w-[44px] h-[44px] flex items-center justify-center border border-[#FFFFFF4D] ">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8857 4.16669V15.8334"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.08081 10H16.6904"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ProductPreview;
