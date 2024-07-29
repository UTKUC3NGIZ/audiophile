"use client";
import Button1 from "@/components/buttons/button1";
import Button3 from "@/components/buttons/button3";
import Image from "next/image";

export default function Home() {
  return (
    <main class="relative w-full h-screen px-6">
      <header>
        {/* background */}
        <img
          src="/assets/home/mobile/image-header.jpg"
          alt="Mobile Header"
          class="absolute inset-0 w-full h-auto object-cover sm:hidden -z-10"
        />
        <img
          src="/assets/home/tablet/image-header.jpg"
          alt="Tablet Header"
          class="absolute inset-0 w-full h-auto object-cover hidden sm:block md:hidden -z-10"
        />
        <img
          src="/assets/home/desktop/image-hero.jpg"
          alt="Desktop Header"
          class="absolute inset-0 w-full h-auto object-cover hidden md:block -z-10"
        />
        {/* Main Content */}
        <div className="text-center flex justify-center items-center flex-col pt-28">
          <span className="text-pureWhite text-opacity-50 text-base text-center pb-4 tracking-[.5em] font-light uppercase">
            NEW PRODUCT
          </span>
          <h1 className="text-pureWhite text-4xl text-center pb-6 font-bold uppercase">
            XX99 Mark II HeadphoneS
          </h1>
          <h3 className="text-pureWhite text-opacity-75 text-base text-center pb-7 font-medium">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </h3>
          <div>
            <Button1 content={"See Product"} />
          </div>
        </div>
      </header>
      <div className="flex gap-12 md:gap-3 flex-col md:flex-row pt-64">
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
    </main>
  );
}
