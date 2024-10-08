"use client";
import React, { useEffect, useState } from "react";
import Button1 from "@/components/buttons/button1";
import Link from "next/link";

export default function ClientComponent({ product }) {
  const [deviceType, setDeviceType] = useState("mobile");
  const [count, setCount] = useState(1);
  useEffect(() => {
    const updateDeviceType = () => {
      const screen = window.matchMedia("(min-width: 768px)");
      if (screen.matches) {
        if (window.matchMedia("(min-width: 1024px)").matches) {
          setDeviceType("desktop");
        } else {
          setDeviceType("tablet");
        }
      } else {
        setDeviceType("mobile");
      }
    };

    updateDeviceType();

    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType);
  }, [product]);
  const addBasket = () => {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    const productIndex = basket.findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      basket.push({ ...product, quantity: count });
    } else {
      basket[productIndex].quantity += count;
    }
    localStorage.setItem("basket", JSON.stringify(basket));
  };
  return (
    <div>
      <div className=" flex justify-start px-6 md:px-10 lg:px-40 pt-4 pb-6">
        <button
          className="text-base text-deepBlack text-opacity-50 font-medium hover:text-sunsetOrange"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
      <div className="flex flex-col gap-14 pb-20">
        <div className="px-6 md:px-10 lg:px-40 flex md:grid md:grid-cols-2 flex-col md:flex-row gap-8 md:gap-20 lg:gap-36 text-center">
          <img
            src={product.image[deviceType]}
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg "
          />

          <div className="flex flex-col gap-6 items-start lg:justify-center lg:items-start md:justify-center">
            <span className="text-sunsetOrange text-sm font-light tracking-[.6em] uppercase">
              {product.new ? "New Product" : ""}
            </span>
            <h1 className="md:text-4xl text-2xl text-deepBlack font-bold lg:text-left uppercase md:text-left">
              {product.name}
            </h1>
            <p className="text-deepBlack text-opacity-50 text-base text-start font-normal lg:text-start">
              {product.description}
            </p>
            <span className="text-deepBlack text-lg font-bold ">
              ${product.price}
            </span>
            <div className="w-fit flex flex-row gap-4">
              <div className="relative flex items-center overflow-hidden">
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="quantity-input"
                  className="p-3 bg-cloudGray hover:text-sunsetOrange group/item h-full"
                  onClick={() =>
                    setCount((prevCount) => Math.max(prevCount - 1, 1))
                  }
                >
                  <svg
                    className="w-2 h-2 text-deepBlack opacity-25 group-hover/item:text-sunsetOrange group-hover/item:opacity-100"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  data-input-counter
                  aria-describedby="helper-text-explanation"
                  className=" text-center block w-full py-2.5 bg-cloudGray text-deepBlack placeholder-deepBlack h-full"
                  placeholder={count}
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="quantity-input"
                  className=" p-3 bg-cloudGray group/item h-full"
                  onClick={() => setCount(count + 1)}
                >
                  <svg
                    className="w-2 h-2 text-deepBlack opacity-25 group-hover/item:text-sunsetOrange group-hover/item:opacity-100 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
              <span className="w-full" onClick={() => addBasket()}>
                <Button1 color={"orange"} content={"Add To Cart"} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2  px-6 md:px-10 lg:px-40">
        <div className="flex flex-col gap-6 items-start lg:justify-center lg:items-start col-span-2 lg:col-span-1">
          <h1 className="md:text-4xl text-2xl text-deepBlack font-bold lg:text-left uppercase">
            FEATURES
          </h1>
          <p className="text-deepBlack text-opacity-50 text-base text-start font-normal lg:text-start">
            {product.features}
          </p>
        </div>
        <div className="flex flex-col gap-6 items-start md:flex-row lg:flex-col md:justify-between lg:items-center  lg:justify-start  pt-20 lg:pt-0 col-span-2 lg:col-span-1">
          <h1 className="md:text-4xl text-2xl text-deepBlack font-bold lg:text-left uppercase">
            in the box
          </h1>
          <ul className="gap-2 flex flex-col md:pr-36 lg:pr-0">
            {product.includes.map((item, index) => (
              <li className="flex gap-6 " key={index}>
                <span className="text-sunsetOrange text-base font-bold">
                  {item.quantity}x
                </span>
                <span className="text-deepBlack text-opacity-50 text-base font-medium">
                  {item.item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-6 md:px-10 lg:px-40 flex flex-col gap-5 pt-20 md:grid grid-cols-12">
        <div className="flex gap-5 flex-col col-span-5">
          <img
            src={product.gallery.first[deviceType]}
            alt={`${deviceType} Header`}
            className="rounded-lg"
          />
          <img
            src={product.gallery.second[deviceType]}
            alt={`${deviceType} Header`}
            className="rounded-lg"
          />
        </div>
        <img
          src={product.gallery.third[deviceType]}
          alt={`${deviceType} Header`}
          className=" rounded-lg col-span-7"
        />
      </div>
      <div className="flex flex-col gap-14 pb-20 mt-20 px-6 md:px-10 lg:px-40">
        <h1 className="md:text-4xl text-2xl text-deepBlack font-bold lg:text-left uppercase text-center">
          you may also like
        </h1>

        <div className="flex flex-col md:flex-row  gap-14 md:gap-3 lg:gap-8">
          {product.others.map((item, index) => (
            <div className=" flex  flex-col gap-8  text-center" key={index}>
              <img
                src={item.image[deviceType]}
                alt="Mobile Header"
                className=" w-auto h-auto object-cover rounded-lg"
              />

              <div className="flex flex-col gap-6 lg:justify-center items-center lg:items-center">
                <h1 className="md:text-2xl text-2xl text-deepBlack font-bold lg:text-left text-center">
                  {item.name}
                </h1>

                <div className="w-fit ">
                  <Link href={`/product-detail/${item.slug}`}>
                    <Button1 color={"orange"} content={"See Product"} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
