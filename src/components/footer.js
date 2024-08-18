import Image from "next/image";
import Link from "next/link";
import React from "react";

function footer() {
  return (
    <div className="bg-deepBlack flex flex-col items-center md:items-start gap-12 pt-12 pb-9 px-6 relative md:px-10 lg:px-40">
      <span className="bg-sunsetOrange w-[101px] h-[4px] absolute translate-x-1/2 right-1/2 md:left-0 md:translate-x-0 ml-6 md:ml-10 lg:ml-40 top-0"></span>
      <div className="flex gap-12 flex-col lg:flex-row lg:justify-between lg:w-full ">
        <div>
          <Link href={"/"}>
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="Logo"
              width={143}
              height={25}
            />
          </Link>
        </div>
        <div>
          <ul className="text-sm font-bold uppercase flex justify-center flex-col md:flex-row gap-4 text-center tracking-widest">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/category/headphones"} className="uppercase">
                HEADPHONES
              </Link>
            </li>
            <Link href={"/category/speakers"} className="uppercase">
              speakers
            </Link>

            <Link href={"/category/earphones"} className="uppercase">
              earphones
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-row lg:justify-between lg:items-end">
          <p className="text-pureWhite text-opacity-50 text-base font-medium text-center md:text-start lg:w-1/2">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="lg:flex flex-row gap-4 justify-center items-center hidden">
            <Link href="https://www.facebook.com/">
              <Image
                src="/assets/shared/desktop/icon-facebook.svg"
                alt="Logo"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.facebook.com/">
              <Image
                src="/assets/shared/desktop/icon-twitter.svg"
                alt="Logo"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.facebook.com/">
              <Image
                src="/assets/shared/desktop/icon-instagram.svg"
                alt="Logo"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:w-full gap-12">
          <span className="text-pureWhite text-opacity-50 text-base font-bold text-center">
            Copyright 2024. All Rights Reserved
          </span>
          <div className="flex flex-row gap-4 justify-center items-center lg:hidden">
            <Link href="https://www.facebook.com/">
              <Image
                src="/assets/shared/desktop/icon-facebook.svg"
                alt="Logo"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.facebook.com/">
              <Image
                src="/assets/shared/desktop/icon-twitter.svg"
                alt="Logo"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.facebook.com/">
              <Image
                src="/assets/shared/desktop/icon-instagram.svg"
                alt="Logo"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
