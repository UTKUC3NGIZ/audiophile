import Image from "next/image";
import React from "react";
import Button3 from "@/components/buttons/button3";
import Link from "next/link";
function menu() {
  return (
    <div className="flex gap-12 md:gap-3 flex-col md:flex-row pt-20 md:pt-24 lg:pt-32  px-6 md:px-10 lg:px-40">
      <Link
        href={"/category/headphones"}
        className="bg-cloudGray flex items-center flex-col rounded-lg relative md:w-screen group/item"
      >
        <div className="absolute -top-16 lg:-top-24 ">
          <img
            src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt=""
            className="w-[130px] md:w-[160px] lg:w-[220px]"
          />
        </div>
        <div className="pt-12 text-center font-bold uppercase mt-9 flex flex-col">
          <span className="text-deepBlack text-sm lg:text-lg font-bold">
            Headphones
          </span>
          <Button3 />
        </div>
      </Link>
      <Link
        href={"/category/speakers"}
        className="bg-cloudGray flex items-center flex-col rounded-lg relative md:w-screen group/item"
      >
        <div className="absolute -top-14 lg:-top-20">
          <img
            src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt=""
            className="w-[130px] md:w-[160px] lg:w-[220px]"
          />
        </div>
        <div className="pt-12 text-center font-bold uppercase mt-9 flex flex-col">
          <span className="text-deepBlack text-sm lg:text-lg font-bold">
            SPEAKERS
          </span>
          <Button3 />
        </div>
      </Link>
      <Link
        href={"/category/earphones"}
        className="bg-cloudGray flex items-center flex-col rounded-lg relative md:w-screen group/item"
      >
        <div className="absolute -top-10 lg:-top-16">
          <img
            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt=""
            className="w-[130px] md:w-[160px] lg:w-[220px]"
          />
        </div>
        <div className="pt-12 text-center font-bold uppercase mt-9 flex flex-col">
          <span className="text-deepBlack text-sm lg:text-lg font-bold">
            EARPHONES
          </span>
          <Button3 />
        </div>
      </Link>
    </div>
  );
}

export default menu;
