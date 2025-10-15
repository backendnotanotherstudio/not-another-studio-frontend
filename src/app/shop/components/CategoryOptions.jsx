import React from "react";

const CategoryOptions = ({
  categories,
  setSelectedCategories,
  selectedCategories,
}) => {
  return (
    <div className=" mb-[40px] ">
      <div className="justify-start text-white text-lg mb-[18px] font-light font-['Inter'] leading-loose">
        Categories
      </div>
      {categories.map((item) => (
        <CategoryBox
          data={item}
          key={item.id}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      ))}
    </div>
  );
};

export default CategoryOptions;

const CategoryBox = ({ data, setSelectedCategories, selectedCategories }) => {
  function click() {
    const clone = [...selectedCategories];

    if (clone.includes(data.categoryName)) {
      clone.splice(
        clone.findIndex((item) => item === data.categoryName),
        1
      );
    } else {
      clone.push(data.categoryName);
    }

    setSelectedCategories(clone);
  }

  return (
    <div
      onClick={click}
      className=" cursor-pointer flex gap-[15px] items-center "
    >
      <div className=" flex items-center justify-center bg-white p-[2px] ">
        <svg
          opacity={selectedCategories.includes(data.categoryName) ? 1 : 0}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 4.5L6.75 12.75L3 9"
            stroke="#5D6771"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="justify-start text-white text-lg font-light font-['Inter'] leading-loose">
        {data.categoryName}
      </div>
    </div>
  );
};
