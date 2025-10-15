import { getProduct, getProducts } from "@/lib/api";
import React from "react";
import Client from "./components/Client";
import ProductPreview from "@/app/components/ProductPreview/ProductPreview";

const page = async ({ params }) => {
  const { slug } = await params;
  const product = await getProduct(slug);
  const products = await getProducts("");
  return (
    <>
      <Client product={product} />
      <div className=" pt-[42px] border-b border-[#FFFFFF4D] ">
        <div className="w-full px-[50px] pb-[42px] border-b border-[#FFFFFF4D] justify-start text-white text-sm font-normal font-['Inter'] uppercase leading-none">
          YOU MAY ALSO LIKE
        </div>
        <div className=" flex gap-[20px] h-[600px] px-[50px] ">
          <div className=" h-full w-[1px] shrink-0 bg-[#FFFFFF4D] " />
          <ProductPreview style={{padding:'38px 0'}} data={products[0]} />
          <div className=" h-full w-[1px] shrink-0 bg-[#FFFFFF4D] " />
          <ProductPreview style={{padding:'38px 0'}} data={products[1]} />
          <div className=" h-full w-[1px] shrink-0 bg-[#FFFFFF4D] " />
          <ProductPreview style={{padding:'38px 0'}} data={products[2]} />
          <div className=" h-full w-[1px] shrink-0 bg-[#FFFFFF4D] " />
        </div>
      </div>
    </>
  );
};

export default page;
