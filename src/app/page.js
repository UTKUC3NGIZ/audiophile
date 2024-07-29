"use client";
import Button1 from "@/components/buttons/button1";

export default function Home() {
  return (
    <main class="relative w-full h-screen overflow-hidden">
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
        <div className="text-center flex justify-center items-center flex-col pt-28 px-6">
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
    </main>
  );
}
