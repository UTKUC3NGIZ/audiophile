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
        <div className="px-6 md:px-10 lg:px-40 flex lg:grid lg:grid-cols-2 flex-col gap-8 lg:gap-36 text-center pt-16">
          <img
            src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg md:hidden"
          />
          <img
            src="/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg hidden md:block lg:hidden"
          />
          <img
            src="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg hidden lg:block hidden"
          />
          <div className="flex flex-col gap-6 items-center lg:justify-center lg:items-start">
            <span className="text-sunsetOrange text-sm font-light tracking-[.6em]">
              NEW PRODUCT
            </span>
            <h1 className="md:text-4xl text-3xl text-deepBlack font-bold lg:text-left">
              XX99 Mark II <br /> Headphones
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
        <div className="px-6 md:px-10 lg:px-40 flex lg:grid lg:grid-cols-2 flex-col gap-8 lg:gap-36 text-center pt-16">
          <img
            src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg md:hidden"
          />
          <img
            src="/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg hidden md:block lg:hidden"
          />
          <img
            src="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg hidden lg:block hidden order-2"
          />
          <div className="flex flex-col gap-6 items-center lg:justify-center lg:items-start">
            <span className="text-sunsetOrange text-sm font-light tracking-[.6em]">
              NEW PRODUCT
            </span>
            <h1 className="md:text-4xl text-3xl text-deepBlack font-bold lg:text-left">
              XX99 Mark II <br /> Headphones
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
        <div className="px-6 md:px-10 lg:px-40 flex lg:grid lg:grid-cols-2 flex-col gap-8 lg:gap-36 text-center pt-16">
          <img
            src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg md:hidden"
          />
          <img
            src="/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg hidden md:block lg:hidden"
          />
          <img
            src="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg hidden lg:block hidden"
          />
          <div className="flex flex-col gap-6 items-center lg:justify-center lg:items-start">
            <span className="text-sunsetOrange text-sm font-light tracking-[.6em]">
              NEW PRODUCT
            </span>
            <h1 className="md:text-4xl text-3xl text-deepBlack font-bold lg:text-left">
              XX99 Mark II <br /> Headphones
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
