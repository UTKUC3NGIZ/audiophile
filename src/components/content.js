import React from "react";

function content() {
  return (
    <div className="my-[120px] md:my-24 lg:flex lg:flex-row  px-6 md:px-10 lg:px-40">
      <img
        src="/assets/shared/mobile/image-best-gear.jpg"
        alt=""
        className="w-full h-auto rounded-lg md:hidden"
      />
      <img
        src="/assets/shared/tablet/image-best-gear.jpg"
        alt=""
        className="w-full h-auto rounded-lg hidden md:block lg:hidden "
      />
      <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-2 lg:gap-8">
        <img
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt=""
          className="w-full h-auto rounded-lg hidden lg:block lg:order-2 "
        />
        <div className="flex flex-col lg:order-1 lg:justify-center">
          <h2 className="text-deepBlack text-3xl md:text-[40px] md:w-4/5 md:mx-auto lg:mx-0 font-bold text-center mt-10 mb-8 uppercase lg:text-start">
            Bringing you the <span className="text-sunsetOrange">best</span>{" "}
            audio gear
          </h2>
          <p className="text-deepBlack text-opacity-50 text-base text-center font-normal lg:text-start">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default content;
