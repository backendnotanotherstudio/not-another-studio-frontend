"use client";
import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { addToCart } from "@/lib/cart";
import { useRouter } from "next/navigation";

const Client = ({ product }) => {
  const router = useRouter();
  const [quantityValue, setQuantityValue] = useState(1);
  function quantityOnChange(value) {
    if (!isNaN(parseInt(value))) {
      let number = parseInt(value);

      if (number <= 0) {
        number = 0;
      }
      setQuantityValue(number);
      return;
    }
    setQuantityValue("");
  }

  function attemptAddToCart() {
    if (selectedColor[1] === -1 || option === "none") {
      window.alert("Please select a color and dimension.");
      return;
    }

    addToCart({
      name: product.name,
      slug: product.slug,
      image: gallery[0].url,
      color: selectedColor[0],
      option: option,
      quantity: quantityValue,
      price: product.price,
    });
    router.push("/checkout");
  }

  console.log(product);

  const [selectedColor, setSelectedColor] = useState(["none", -1]);
  const [gallery, setGallery] = useState(product.images);
  const [option, setOption] = useState("none");

  useEffect(() => {
    if (
      selectedColor[1] === -1 ||
      product.colorOptions[selectedColor[1]].productImages === null ||
      product.colorOptions[selectedColor[1]].productImages.length === 0
    ) {
      setGallery(product.images);
      return;
    }
    setGallery(product.colorOptions[selectedColor[1]].productImages);
  }, [selectedColor]);

  return (
    <div className=" pt-[104px] flex border-b border-[#FFFFFF4D] ">
      <div className=" w-[50%] p-[50px] ">
        <Gallery gallery={gallery} />
      </div>
      <div className=" w-[50%] border-l py-[50px] border-[#FFFFFF4D] ">
        <div className="w justify-start text-white mx-[50px] text-[40px] font-light font-['Fraunces'] leading-[55px]">
          Lorem ipsum dolor sit amet
        </div>
        <div className=" my-[50px] justify-start text-white mx-[50px] text-4xl font-light font-['Fraunces'] leading-[55px]">
          د.إ {product.price}
        </div>
        <div className=" flex gap-[16px] max-w-[550px] mx-[50px] ">
          <div className=" border flex rounded-[3px] w-full justify-between border-[#FFFFFF4D] px-[13px] py-[9px] ">
            <svg
              onClick={() => quantityOnChange(`${quantityValue - 1}`)}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="number"
              value={quantityValue}
              onChange={(e) => quantityOnChange(e.target.value)}
              className="w-full text-center justify-start text-white text-xl fontLight font-['Fraunces'] leading-none"
              placeholder="0"
            />
            <svg
              onClick={() => quantityOnChange(`${quantityValue + 1}`)}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12H19"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <select
            defaultValue="none"
            onChange={(e) => setOption(e.target.value)}
            className=" border flex rounded-[3px] text-white text-base font-light font-['Fraunces'] leading-none w-full justify-between border-[#FFFFFF4D] px-[13px] py-[9px] "
          >
            <option value="none" disabled>
              {product.selectionOption.name}
            </option>
            {product.selectionOption.options.map((item) => (
              <option key={item.id}>{item.option}</option>
            ))}
          </select>
        </div>
        <button
          onClick={attemptAddToCart}
          className=" mx-[50px] bg-[#EADAB8] flex gap-[16px] items-center justify-center h-[42px] py-[12px] max-w-[550px] w-full mt-[33px] "
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.50033 18.3333C7.96056 18.3333 8.33366 17.9602 8.33366 17.5C8.33366 17.0398 7.96056 16.6667 7.50033 16.6667C7.04009 16.6667 6.66699 17.0398 6.66699 17.5C6.66699 17.9602 7.04009 18.3333 7.50033 18.3333Z"
              stroke="#5D6771"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.6663 18.3333C17.1266 18.3333 17.4997 17.9602 17.4997 17.5C17.4997 17.0398 17.1266 16.6667 16.6663 16.6667C16.2061 16.6667 15.833 17.0398 15.833 17.5C15.833 17.9602 16.2061 18.3333 16.6663 18.3333Z"
              stroke="#5D6771"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0.833008 0.833344H4.16634L6.39967 11.9917C6.47588 12.3753 6.6846 12.72 6.9893 12.9653C7.29399 13.2105 7.67526 13.3408 8.06634 13.3333H16.1663C16.5574 13.3408 16.9387 13.2105 17.2434 12.9653C17.5481 12.72 17.7568 12.3753 17.833 11.9917L19.1663 5.00001H4.99967"
              stroke="#5D6771"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="w-24 h-4 justify-start text-gray-500 text-sm font-normal font-['Inter'] uppercase leading-none">
            ADD TO CART
          </div>
        </button>
        <div className=" pb-[70px] px-[50px] border-b border-[#FFFFFF4D] column gap-[25px] mt-[67px] ">
          <div
            style={{
              display: product.colorOptions.length === 0 ? "none" : undefined,
            }}
            className="w-16 h-4 justify-start text-white text-sm font-normal font-['Inter'] uppercase leading-none"
          >
            COLORS
          </div>
          <div className=" gap-[16px] flex flex-wrap ">
            {product.colorOptions.map((colorItem, index) => {
              const selected = selectedColor[1] === index;

              return (
                <div
                  style={{ background: colorItem.hexadecimal }}
                  key={colorItem.id}
                  onClick={() =>
                    selected
                      ? setSelectedColor(["none", -1])
                      : setSelectedColor([colorItem.name, index])
                  }
                  className=" relative flex items-center justify-center w-[55px] h-[55px] "
                >
                  <div
                    style={{ opacity: selected ? "1" : "0" }}
                    className=" pointer-events-none absolute w-[25px] h-[25px] bg-[#5d6771] "
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" my-[50px] ">
          <div className="w-16 h-4 mb-[18px] px-[50px] justify-start text-white text-sm font-normal font-['Inter'] uppercase leading-none">
            DETAILS
          </div>
          <div className=" mx-[50px] justify-start text-white text-xs font-light font-['Inter'] leading-tight">
            <BlocksRenderer content={product.details} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
