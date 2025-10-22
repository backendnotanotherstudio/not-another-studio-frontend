"use client";
import { baseURL } from "@/lib/api";
import axios from "axios";
import React, { useRef } from "react";

const ContactSection = ({pageData}) => {
  const values = useRef({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  async function attemptSend() {
    const emptyFields = [];
    Object.entries(values.current).map(([key, value]) => {
      if (value === "") {
        emptyFields.push(key);
      }
    });

    if (emptyFields.length !== 0) {
      window.alert(`Please fill out all fields.\nmissing: ${emptyFields}`);
      return;
    }

    try {
      await axios.post(`${baseURL}/messages`, { data: values.current });
      window.alert("message successfully sent!");
    } catch (err) {
      console.warn("failed to deliver message", err);
      window.alert(
        "Something went wrong, please try again later or contact us via email."
      );
    }
  }

  return (
    <div className=" flex flex-col items-center border-t border-[#FFFFFF4D] ">
      <div className="max-w-[1171px] mt-[50px] md:mt-[142px] text-center justify-start text-white md:text-8xl text-4xl font-light font-['Fraunces'] leading-[50px] md:leading-[100px]">
        {pageData?.contactFormTitle}
      </div>
      <div className=" max-w-[828px] mt-[33px] mx-[10px] border border-[#FFFFFF4D] ">
        <input
          onChange={(e) => (values.current.name = e.target.value)}
          placeholder="NAME..."
          className=" h-[74px] md:h-[162px] w-full p-[24px] md:p-[70px] border-b border-[#FFFFFF4D] text-white/50 text-xl font-medium font-['Inter'] leading-none "
        />
        <input
          onChange={(e) => (values.current.email = e.target.value)}
          placeholder="EMAIL..."
          className=" h-[74px] md:h-[162px] w-full p-[24px] md:p-[70px] border-b border-[#FFFFFF4D] text-white/50 text-xl font-medium font-['Inter'] leading-none "
        />
        <input
          onChange={(e) => (values.current.number = e.target.value)}
          placeholder="PHONE NUMBER..."
          className=" h-[74px] md:h-[162px] w-full p-[24px] md:p-[70px] border-b border-[#FFFFFF4D] text-white/50 text-xl font-medium font-['Inter'] leading-none "
        />
        <textarea
          onChange={(e) => (values.current.message = e.target.value)}
          placeholder="MESSAGE..."
          className=" h-[289px] w-full p-[24px] md:p-[70px] resize-y text-white/50 text-xl font-medium font-['Inter'] leading-none "
        />
      </div>
      <button
        style={{width:'calc(100% - 20px)'}}
        onClick={attemptSend}
        className=" mb-[50px] md:mb-[150px] h-[101px] max-w-full mx-[10px] md:!w-[828px] bg-[#EADAB7] text-gray-500 text-xl font-medium font-['Inter'] uppercase leading-none "
      >
        SEND
      </button>
    </div>
  );
};

export default ContactSection;
