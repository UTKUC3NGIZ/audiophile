"use client";
import React, { useEffect, useState } from "react";
import Button1 from "@/components/buttons/button1";
import Link from "next/link";
function page({ product }) {
  const [deviceType, setDeviceType] = useState("mobile");

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
  return (
    <div>
      <div className="bg-midnightBlack flex justify-center py-8 ">
        <h1 className="uppercase text-3xl text-pureWhite font-bold">
          {product[0].category}
        </h1>
      </div>
      <div className="flex flex-col gap-14 pb-20">
        {product.map((item, index) => (
          <div
            className="px-6 md:px-10 lg:px-40 flex lg:grid lg:grid-cols-2 flex-col gap-8 lg:gap-36 text-center pt-16"
            key={index}
          >
            <img
              src={item.categoryImage[deviceType]}
              alt="Mobile Header"
              className=" w-auto h-auto object-cover rounded-lg "
            />
            <div className="flex flex-col gap-6 items-center lg:justify-center lg:items-start">
              <span className="text-sunsetOrange text-sm font-light tracking-[.6em] uppercase">
                {item.new ? "New Product" : ""}
              </span>
              <h1 className="md:text-4xl text-3xl text-deepBlack font-bold lg:text-left">
                {item.name}
              </h1>
              <p className="text-deepBlack text-opacity-50 text-base text-center font-normal lg:text-start">
                {item.description}
              </p>
              <div className="w-fit">
                <Link href={`/product-detail/${item.id}`}>
                  {" "}
                  <Button1 color={"orange"} content={"See Product"} />{" "}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
