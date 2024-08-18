"use client";
import Button1 from "@/components/buttons/button1";
import Menu from "@/components/menu";
import Content from "@/components/content";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full">
      {/* Header */}
      <div className="relative">
        {/* background */}
        <img
          src="/assets/home/mobile/image-header.jpg"
          alt="Mobile Header"
          className=" w-full h-auto object-cover md:hidden -z-10"
        />
        <img
          src="/assets/home/tablet/image-header.jpg"
          alt="Tablet Header"
          className=" w-full h-auto object-cover hidden md:block lg:hidden -z-10"
        />
        <img
          src="/assets/home/desktop/image-hero.jpg"
          alt="Desktop Header"
          className=" w-full h-auto object-cover hidden lg:block -z-10"
        />
        {/* Main Content */}

        <div className="text-center flex justify-center md:justify-start lg:justify-center items-center flex-col pt-28 md:pt-60 lg:pt-32  px-6 md:px-10 lg:px-40 absolute top-0 h-full w-full">
          <span className="text-pureWhite text-opacity-50 text-base lg:text-start w-full text-center pb-4 tracking-[.5em] font-light uppercase">
            NEW PRODUCT
          </span>
          <h1 className="text-pureWhite text-4xl md:text-6xl text-center lg:text-start pb-6 font-bold uppercase lg:w-full">
            XX99 Mark II <br className="hidden md:block" /> HeadphoneS
          </h1>
          <div className="flex justify-center lg:justify-start lg:w-full">
            <h3 className="text-pureWhite text-opacity-75 text-base text-center lg:text-start pb-7 font-medium md:w-3/5 w-4/5">
              Experience natural, lifelike audio and exceptional{" "}
              <br className="hidden lg:block" /> build quality made for the
              passionate music enthusiast.
            </h3>
          </div>
          <div className="lg:w-full">
            <div className="flex w-fit">
              <Link href={"/product-detail/xx99-mark-two-headphones"}>
                <Button1 content={"See Product"} color={"orange"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Menu */}
      <Menu />
      {/* See Product */}
      <div className=" px-6 md:px-10 lg:px-40">
        <div className="bg-sunsetOrange rounded-lg mt-[120px] md:mt-24 lg:flex lg:flex-row relative overflow-hidden ">
          <div className=" flex justify-center ">
            <img
              src="/assets/home/desktop/pattern-circles.svg"
              alt=""
              className="absolute w-[558px] h-[558px] md:w-[944px] md:h-[944px] object-cover -top-[120px] md:-top-[280px] lg:-top-[120px] xl:-left-36 lg:-left-64"
            />
            <img
              src="/assets/home/mobile/image-speaker-zx9.png"
              alt=""
              className=" w-[170px] md:w-[197px] h-auto mt-12 lg:hidden"
            />
            <img
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt=""
              className="xl:w-[410px] w-[280px] h-auto mt-12 hidden lg:block absolute top-4 z-10 left-0 xl:ml-32 ml-12"
            />
          </div>
          <div className="lg:flex lg:justify-end lg:w-full">
            <div className="lg:w-1/2">
              <div className="flex flex-col items-center text-center pt-8 md:pt-16 pb-14 gap-6 lg:justify-center lg:w-full xl:pt-[133px] xl:pb-32 xl:pl-32 xl:pr-24 ">
                <h2 className="text-4xl md:text-6xl font-bold uppercase text-pureWhite lg:text-start lg:w-full">
                  ZX9 <br />
                  SPEAKER
                </h2>
                <h3 className="text-base text-pureWhite md:w-2/5 lg:text-start lg:w-full">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </h3>
                <div className=" lg:mx-auto lg:text-start lg:w-full">
                  <div className="w-fit">
                    <Link href={"/product-detail/zx9-speaker"}>
                      <Button1 content={"See Product"} color={"black"} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* See Product 2 */}
      <div className="rounded-lg mt-6 overflow-hidden relative  px-6 md:px-10 lg:px-40">
        <img
          src="/assets/home/mobile/image-speaker-zx7.jpg"
          alt=""
          className="w-full h-auto md:hidden"
        />
        <img
          src="/assets/home/tablet/image-speaker-zx7.jpg"
          alt=""
          className="w-full h-auto hidden md:block lg:hidden"
        />
        <img
          src="/assets/home/desktop/image-speaker-zx7.jpg"
          alt=""
          className="w-full h-auto hidden lg:block"
        />
        <div
          className="flex flex-col absolute top-1/2 ml-6 md:ml-16 transform  -translate-y-1/2
"
        >
          <h2 className="text-3xl text-deepBlack font-bold mb-8">
            ZX7 SPEAKER
          </h2>
          <div className="w-fit">
            <Link href={"/product-detail/zx7-speaker"}>
              <Button1 content={"See Product"} color={"transparent"} />
            </Link>
          </div>
        </div>
      </div>
      {/* See Product 3 */}
      <div className="overflow-hidden mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3  px-6 md:px-10 lg:px-40 lg:gap-6">
        <img
          src="/assets/home/mobile/image-earphones-yx1.jpg"
          alt=""
          className="w-full h-auto rounded-lg md:hidden"
        />
        <img
          src="/assets/home/tablet/image-earphones-yx1.jpg"
          alt=""
          className="w-full h-auto rounded-lg hidden md:block lg:hidden"
        />
        <img
          src="/assets/home/desktop/image-earphones-yx1.jpg"
          alt=""
          className="w-full h-auto rounded-lg hidden lg:block"
        />
        <div className="flex flex-col  border rounded-lg w-full bg-cloudGray md:justify-center">
          <div className="my-10 ml-6 md:ml-10">
            <h2 className="text-3xl text-deepBlack font-bold mb-8">
              YX1 EARPHONES
            </h2>
            <div className="w-fit">
              <Link href={"/product-detail/yx1-earphones"}>
                <Button1 content={"See Product"} color={"transparent"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}

      <Content />
    </main>
  );
}
