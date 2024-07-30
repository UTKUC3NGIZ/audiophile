"use client";
import Button1 from "@/components/buttons/button1";
import Button3 from "@/components/buttons/button3";
import Image from "next/image";

export default function Home() {
  return (
    <main class="relative w-full h-screen px-6">
      {/* Header */}
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
      {/* Menu */}
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
      {/* See Product */}
      <div className="bg-sunsetOrange rounded-lg mt-[120px] ">
        <div className="relative flex justify-center ">
          <img
            src="/assets/home/desktop/pattern-circles.svg"
            alt=""
            className="absolute w-[558px] h-[558px] object-cover -top-[120px]"
          />
          <img
            src="/assets/home/mobile/image-speaker-zx9.png"
            alt=""
            className=" w-[170px] h-auto mt-12"
          />
        </div>
        <div className="flex flex-col items-center text-center pt-8 pb-14 gap-6">
          <h2 className="text-4xl font-bold uppercase text-pureWhite">
            ZX9 <br />
            SPEAKER
          </h2>
          <h3 className="text-base text-pureWhite pt-">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </h3>
          <div>
            <Button1
              content={"See Product"}
              bgColor={"midnightBlack"}
              textColor={"pureWhite"}
              borderColor={"transparent"}
            />
          </div>
        </div>
      </div>
      {/* See Product 2 */}
      <div className="rounded-lg mt-6 overflow-hidden relative">
        <img
          src="/assets/home/mobile/image-speaker-zx7.jpg"
          alt=""
          className="w-full h-auto"
        />
        <div
          className="flex flex-col absolute top-1/2 ml-6 transform  -translate-y-1/2
"
        >
          <h2 className="text-3xl text-deepBlack font-bold mb-8">
            ZX7 SPEAKER
          </h2>
          <div className="w-fit">
            <Button1
              content={"See Product"}
              bgColor={"transparent"}
              textColor={"deepBlack"}
              borderColor={"deepBlack"}
            />
          </div>
        </div>
      </div>
      {/* See Product 3 */}
      <div className="overflow-hidden mt-6">
        <img
          src="/assets/home/mobile/image-earphones-yx1.jpg"
          alt=""
          className="w-full h-auto rounded-lg"
        />
        <div className="flex flex-col mt-6 border rounded-lg w-full bg-cloudGray ">
          <div className="my-10 ml-6">
            <h2 className="text-3xl text-deepBlack font-bold mb-8">
              ZX7 SPEAKER
            </h2>
            <div className="w-fit">
              <Button1
                content={"See Product"}
                bgColor={"transparent"}
                textColor={"deepBlack"}
                borderColor={"deepBlack"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Content */}

      <div className="my-[120px]">
        <img
          src="/assets/shared/mobile/image-best-gear.jpg"
          alt=""
          className="w-full h-auto rounded-lg"
        />
        <h2 className="text-deepBlack text-3xl font-bold text-center mt-10 mb-8 uppercase">
          Bringing you the <span className="text-sunsetOrange">best</span> audio
          gear
        </h2>
        <p className="text-deepBlack text-opacity-50 text-base text-center font-normal">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </main>
  );
}
