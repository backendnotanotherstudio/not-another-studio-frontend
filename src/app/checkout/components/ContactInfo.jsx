"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import axios from "axios";
import { baseURL } from "@/lib/api";
import { fetchCart, resetCart } from "@/lib/cart";
import { useRouter } from "next/navigation";

const ContactInfo = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    number: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    country: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    number: Yup.string().required("Required"),
  });

  const handleSubmit = async (values) => {
    const cart = fetchCart();
    const total = cart.reduce((a, b) => (a += b.price), 0);
    try {
      await axios.post(`${baseURL}/orders`, {
        data: { ...values, products: cart, total },
      });
      window.alert("Successfully ordered!");
      resetCart();
      router.push("/");
    } catch (err) {
      console.warn(err);
      window.alert(
        "Something went wrong, please try again later or contact us via email"
      );
    }
  };

  return (
    <div className="column p-[50px] w-[50%] relative pr-[100px]">
      <Link href="/shop" className="gap-[10px] flex items-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.25 9H3.75"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 14.25L3.75 9L9 3.75"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="w-24 justify-start text-white text-xs font-bold font-['Inter'] uppercase leading-none">
          Back to shop
        </div>
      </Link>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mt-6 flex flex-col gap-4 w-full sticky top-[120px]">
          <div className="w-44 h-4 mt-[57px] justify-start text-white text-sm font-normal font-['Inter'] uppercase leading-none">
            CONTACT INFORMATION
          </div>
          <div className="flex flex-col w-full">
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="py-[13px] px-[23px] rounded text-white text-base font-light font-['Fraunces'] leading-none bg-[#5D6771] border border-[#FFFFFF4D]"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="w-44 h-4 mt-[100px] mb-[30px] justify-start text-white text-sm font-normal font-['Inter'] uppercase leading-none">
            BILLING REQUEST
          </div>
          <div className="flex flex-col w-full">
            <Field
              name="country"
              placeholder="Country"
              className="py-[13px] px-[23px] rounded text-white text-base font-light font-['Fraunces'] leading-none bg-[#5D6771] border border-[#FFFFFF4D]"
            />
            <ErrorMessage
              name="country"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className=" flex gap-[20px] w-full ">
            <div className="flex flex-col w-full">
              <Field
                name="firstName"
                placeholder="First Name"
                className="py-[13px] px-[23px] rounded text-white text-base font-light font-['Fraunces'] leading-none bg-[#5D6771] border border-[#FFFFFF4D]"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div className="flex flex-col w-full">
              <Field
                name="lastName"
                placeholder="Last Name"
                className="py-[13px] px-[23px] rounded text-white text-base font-light font-['Fraunces'] leading-none bg-[#5D6771] border border-[#FFFFFF4D]"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <Field
              name="address"
              placeholder="Address"
              className="py-[13px] px-[23px] rounded text-white text-base font-light font-['Fraunces'] leading-none bg-[#5D6771] border border-[#FFFFFF4D]"
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className=" flex gap-[20px] w-full ">
            <div className="flex flex-col w-full">
              <Field
                name="city"
                placeholder="City"
                className="py-[13px] px-[23px] rounded text-white text-base font-light font-['Fraunces'] leading-none bg-[#5D6771] border border-[#FFFFFF4D]"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div className="flex flex-col w-full">
              <Field
                name="state"
                placeholder="State/Country"
                className="py-[13px] px-[23px] rounded text-white text-base font-light font-['Fraunces'] leading-none bg-[#5D6771] border border-[#FFFFFF4D]"
              />
              <ErrorMessage
                name="state"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <Field
              name="number"
              placeholder="Phone number"
              className="py-[13px] px-[23px] rounded text-white text-base font-light font-['Fraunces'] leading-none bg-[#5D6771] border border-[#FFFFFF4D]"
            />
            <ErrorMessage
              name="number"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <button
            type="submit"
            className="text-gray-500 text-sm font-normal font-['Inter'] uppercase leading-none bg-[#EADAB8] py-[15px] rounded-[3px]"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactInfo;
