import React from "react";
import Content from "@/components/content";
import Menu from "@/components/menu";
import Button1 from "@/components/buttons/button1";
function page() {
  return (
    <div className="pt-[88px] ">
      <div className="bg-midnightBlack flex justify-center py-8 ">
        <h1 className="uppercase text-3xl text-pureWhite font-bold">
          HEADPHONES
        </h1>
      </div>
      <div className="flex flex-col gap-14 pb-20">
        <div className="px-6 md:px-10 lg:px-40 flex flex-col gap-8 text-center pt-16">
          <img
            src="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
            alt="Mobile Header"
            class=" w-auto h-auto object-cover rounded-lg"
          />
          <div className="flex flex-col gap-6 items-center">
            <span className="text-sunsetOrange text-sm font-light tracking-[.6em]">
              NEW PRODUCT
            </span>
            <h1 className="text-3xl text-deepBlack font-bold ">
              XX99 Mark II Headphones
            </h1>
            <p className="text-deepBlack text-opacity-50 text-base text-center font-normal lg:text-start">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <div className="w-fit">
              <Button1 color={"orange"} content={"See Product"} />
            </div>
          </div>
        </div>
        <div className="px-6 md:px-10 lg:px-40 flex flex-col gap-8 text-center pt-16">
          <img
            src="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
            alt="Mobile Header"
            class=" w-auto h-auto object-cover rounded-lg"
          />
          <div className="flex flex-col gap-6 items-center">
            <span className="text-sunsetOrange text-sm font-light tracking-[.6em]">
              NEW PRODUCT
            </span>
            <h1 className="text-3xl text-deepBlack font-bold ">
              XX99 Mark II Headphones
            </h1>
            <p className="text-deepBlack text-opacity-50 text-base text-center font-normal lg:text-start">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <div className="w-fit">
              <Button1 color={"orange"} content={"See Product"} />
            </div>
          </div>
        </div>
        <div className="px-6 md:px-10 lg:px-40 flex flex-col gap-8 text-center pt-16">
          <img
            src="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
            alt="Mobile Header"
            class=" w-auto h-auto object-cover rounded-lg"
          />
          <div className="flex flex-col gap-6 items-center">
            <span className="text-sunsetOrange text-sm font-light tracking-[.6em]">
              NEW PRODUCT
            </span>
            <h1 className="text-3xl text-deepBlack font-bold ">
              XX99 Mark II Headphones
            </h1>
            <p className="text-deepBlack text-opacity-50 text-base text-center font-normal lg:text-start">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <div className="w-fit">
              <Button1 color={"orange"} content={"See Product"} />
            </div>
          </div>
        </div>
      </div>
      <Menu />
      <Content />
    </div>
  );
}

export default page;
