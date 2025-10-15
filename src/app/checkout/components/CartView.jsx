"use client";
import { fetchCart, removeFromCart } from "@/lib/cart";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CartView = () => {
  const [cart, setCart] = useState(null); // null while loading

  useEffect(() => {
    const cartData = fetchCart(); // safe to use localStorage now
    setCart(cartData);
  }, []);

  if (cart === null) {
    return <div>Loading cart...</div>; // optional fallback
  }

  return (
    <div className="w-[50%] py-[75px] pl-[80px] pr-[15%] border-l border-[#FFFFFF4D]">
      {cart.map((cartItemData, index) => (
        <CartItem data={cartItemData} key={index} setCart={setCart} />
      ))}
    </div>
  );
};
export default CartView;

const CartItem = ({ data,setCart }) => {
  
  return (
    <div className=" mb-[50px] ">
      <img src={data.image} className=" object-cover w-full aspect-video " />
      <div className=" mt-[24px] flex justify-between items-center ">
        <div className=" flex w-full ">
          <Link href={`shop/${data.slug}`} className=" mr-[15%] justify-start text-white text-2xl font-light font-['Fraunces'] leading-loose">
            {data.name}
          </Link>
          <div className=" justify-start ml-[10px] text-white text-2xl font-light font-['Fraunces'] leading-loose">
            {data.price} د.إ
          </div>
        </div>
        <svg
          width="24"
          onClick={() => {
            removeFromCart(data.slug)
            setCart(fetchCart)
          }}
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6H5H21"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 11V17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 11V17"
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
