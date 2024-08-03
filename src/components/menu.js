import Image from "next/image";
import React from "react";
import Button3 from "@/components/buttons/button3";
function menu() {
  return (
    <div className="flex gap-12 md:gap-3 flex-col md:flex-row pt-20 md:pt-24 lg:pt-32  px-6 md:px-10 lg:px-40">
      <div className="bg-cloudGray flex items-center flex-col rounded-lg relative md:w-screen">
        <div className="absolute -top-10 ">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt=""
            width={130}
            height={160}
          />
        </div>
        <div className="pt-12 text-center font-bold uppercase mt-9 flex flex-col">
          <span className="text-deepBlack text-sm">Headphones</span>
          <Button3 />
        </div>
      </div>
      <div className="bg-cloudGray flex items-center flex-col rounded-lg relative md:w-screen">
        <div className="absolute -top-10 ">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt=""
            width={130}
            height={160}
          />
        </div>
        <div className="pt-12 text-center font-bold uppercase mt-9 flex flex-col">
          <span className="text-deepBlack text-sm">SPEAKERS</span>
          <Button3 />
        </div>
      </div>
      <div className="bg-cloudGray flex items-center flex-col rounded-lg relative md:w-screen">
        <div className="absolute -top-10 ">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt=""
            width={130}
            height={160}
          />
        </div>
        <div className="pt-12 text-center font-bold uppercase mt-9 flex flex-col">
          <span className="text-deepBlack text-sm">EARPHONES</span>
          <Button3 />
        </div>
      </div>
    </div>
  );
}

export default menu;
