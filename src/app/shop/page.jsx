"use client";

import { getCategories, getProducts, getShopPage } from "@/lib/api";
import React, { useEffect, useState } from "react";
import ProductPreview from "../components/ProductPreview/ProductPreview";
import ColorOptions from "./components/ColorOptions";
import CategoryOptions from "./components/CategoryOptions";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts("");
      const categories = await getCategories();

      //extracts all the colors available from the products
      const tempColors = [];
      products.forEach((element) => {
        const colorOptions = element.colorOptions;
        for (let color of colorOptions) {
          if (!tempColors.map((item) => item.name).includes(color.name)) {
            tempColors.push(color);
          }
        }
      });
      setColors(tempColors);
      setProducts(products);
      setCategories(categories);
    };
    fetchData();
  }, []);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let categoriesQuery = "";
      selectedCategories.forEach((item) => {
        categoriesQuery += `&filters[category][categoryName][$eq]=${item}`;
      });
      let colorQuery = "";
      if (selectedColor !== "") {
        colorQuery = `&filters[colorOptions][name][$eq]=${selectedColor}`;
      }
      const query = `${categoriesQuery}${colorQuery}`;
      const filteredProducts = await getProducts(query);
      setProducts(filteredProducts);

      const temppageData = await getShopPage();
      setPageData(temppageData?.data);
    };
    fetchData();
  }, [selectedCategories, selectedColor]);

  return (
    <div className=" pt-[104px] flex mb-[50px] flex-col items-end mx-[7%] ">
      <div className="max-w-[1171px] md:mt-[30px] mt-[0px] md:w-[75%] mb-0 md:mb-[60px] text-center justify-start text-white md:text-6xl text-4xl font-light font-['Fraunces']">
        {pageData?.title}
      </div>
      <div className=" w-full flex md:flex-row flex-col ">
        <div className=" w-full md:mt-0 mt-[40px] mb-[50px] md:w-[25%] md:pr-[20px] ">
          <div className=" flex mb-[41px] items-center gap-[13px] ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 21V14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 10V3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 21V12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8V3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 21V16"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 12V3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 14H7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 8H15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 16H23"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="justify-start text-white text-2xl font-light font-['Inter'] leading-loose">
              FILTERS
            </div>
          </div>
          <CategoryOptions
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
          <ColorOptions
            colors={colors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
        <div className=" w-full md:w-[75%] gap-[14px] md:gap-[45px] grid grid-cols-2 ">
          {products.map((data) => (
            <ProductPreview data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
