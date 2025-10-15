import React from "react";

const ColorOptions = ({ colors, setSelectedColor, selectedColor }) => {
  return (
    <div className=" w-full ">
      <div className="justify-start text-white text-lg font-light font-['Inter'] leading-loose">
        Colors
      </div>
      <div className=" gap-[16px] flex flex-wrap w-full md:w-[126px] ">
        {colors.map((item) => (
          <ColorOption
            data={item}
            key={item.id}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorOptions;

const ColorOption = ({ data, selectedColor, setSelectedColor }) => {
  function click() {
    if(selectedColor === data.name) {
      setSelectedColor('')
      return
    } 
    setSelectedColor(data.name)
  }

  return (
    <div
      onClick={click}
      style={{ background: data.hexadecimal }}
      className=" cursor-pointer flex items-center justify-center w-[55px] h-[55px] "
    >
      <div
        style={{ opacity: selectedColor === data.name ? "1" : "0" }}
        className=" bg-[#5D6771] pointer-events-none w-[25px] h-[25px] "
      />
    </div>
  );
};
