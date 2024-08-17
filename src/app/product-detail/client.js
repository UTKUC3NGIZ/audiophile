"use client";
import React, { useEffect } from "react";
import Button1 from "@/components/buttons/button1";

export default function ClientComponent({ product }) {
  console.log(product);
  return (
    <div>
      <div className=" flex justify-start px-6 md:px-10 lg:px-40 pt-4 pb-6">
        <h1 className="text-base text-deepBlack text-opacity-50 font-medium">
          Go Back
        </h1>
      </div>
      <div className="flex flex-col gap-14 pb-20">
        <div className="px-6 md:px-10 lg:px-40 flex md:grid md:grid-cols-2 flex-col md:flex-row gap-8 md:gap-20 lg:gap-36 text-center">
          <img
            src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg md:hidden"
          />
          <img
            src="/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg hidden md:block lg:hidden"
          />
          <img
            src="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg hidden lg:block hidden"
          />
          <div className="flex flex-col gap-6 items-start lg:justify-center lg:items-start md:justify-center">
            <span className="text-sunsetOrange text-sm font-light tracking-[.6em]">
              NEW PRODUCT
            </span>
            <h1 className="md:text-4xl text-2xl text-deepBlack font-bold lg:text-left uppercase">
              XX99 Mark II <br /> Headphones
            </h1>
            <p className="text-deepBlack text-opacity-50 text-base text-start font-normal lg:text-start">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <span className="text-deepBlack text-lg font-bold ">$ 2,999</span>
            <div className="w-fit flex flex-row gap-4">
              <div className="relative flex items-center   overflow-hidden">
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="quantity-input"
                  className="p-3 h-11 bg-cloudGray"
                >
                  <svg
                    className="w-2 h-2 text-deepBlack opacity-25"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  data-input-counter
                  aria-describedby="helper-text-explanation"
                  className=" h-11 text-center block w-full py-2.5 bg-cloudGray text-deepBlack placeholder-deepBlack"
                  placeholder="2"
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="quantity-input"
                  className=" p-3 h-11 bg-cloudGray"
                >
                  <svg
                    className="w-2 h-2 text-deepBlack opacity-25"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
              <Button1 color={"orange"} content={"Add To Cart"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start lg:justify-center lg:items-start px-6 md:px-10 lg:px-40">
        <h1 className="md:text-4xl text-2xl text-deepBlack font-bold lg:text-left uppercase">
          FEATURES
        </h1>
        <p className="text-deepBlack text-opacity-50 text-base text-start font-normal lg:text-start">
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you’re taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you’ll
          never miss a beat.
          <br />
          <br />
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </p>
      </div>
      <div className="flex flex-col gap-6 items-start lg:justify-center md:flex-row md:justify-between lg:items-start px-6 md:px-10 lg:px-40 pt-20">
        <h1 className="md:text-4xl text-2xl text-deepBlack font-bold lg:text-left uppercase">
          in the box
        </h1>
        <ul className="gap-2 flex flex-col md:pr-36">
          <li className="flex gap-6 ">
            <span className="text-sunsetOrange text-base font-bold">1x</span>
            <span className="text-deepBlack text-opacity-50 text-base font-medium">
              Headphone Unit
            </span>
          </li>
          <li className="flex gap-6 ">
            <span className="text-sunsetOrange text-base font-bold">1x</span>
            <span className="text-deepBlack text-opacity-50 text-base font-medium">
              Headphone Unit
            </span>
          </li>
          <li className="flex gap-6 ">
            <span className="text-sunsetOrange text-base font-bold">1x</span>
            <span className="text-deepBlack text-opacity-50 text-base font-medium">
              Headphone Unit
            </span>
          </li>
          <li className="flex gap-6 ">
            <span className="text-sunsetOrange text-base font-bold">1x</span>
            <span className="text-deepBlack text-opacity-50 text-base font-medium">
              Headphone Unit
            </span>
          </li>
          <li className="flex gap-6 ">
            <span className="text-sunsetOrange text-base font-bold">1x</span>
            <span className="text-deepBlack text-opacity-50 text-base font-medium">
              Headphone Unit
            </span>
          </li>
        </ul>
      </div>
      <div className="px-6 md:px-10 lg:px-40 flex flex-col gap-5 pt-20">
        <img
          src="/assets/product-yx1-earphones/mobile/image-gallery-1.jpg"
          alt="Mobile Header"
          className=" w-auto h-auto object-cover rounded-lg md:hidden"
        />
        <img
          src="/assets/product-yx1-earphones/mobile/image-gallery-2.jpg"
          alt="Mobile Header"
          className=" w-auto h-auto object-cover rounded-lg md:hidden"
        />
        <img
          src="/assets/product-yx1-earphones/mobile/image-gallery-3.jpg"
          alt="Mobile Header"
          className=" w-auto h-auto object-cover rounded-lg md:hidden"
        />
      </div>
      <div className="flex flex-col gap-14 pb-20 mt-20">
        <h1 className="md:text-4xl text-2xl text-deepBlack font-bold lg:text-left uppercase text-center">
          you may also like
        </h1>
        <div className="px-6 md:px-10 lg:px-40 flex lg:grid lg:grid-cols-2 flex-col gap-8 lg:gap-36 text-center">
          <img
            src="/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg md:hidden"
          />

          <div className="flex flex-col gap-6 lg:justify-center lg:items-start items-center">
            <h1 className="md:text-4xl text-2xl text-deepBlack font-bold lg:text-left text-center">
              XX99 Mark II Headphones
            </h1>

            <div className="w-fit ">
              <Button1 color={"orange"} content={"See Product"} />
            </div>
          </div>
        </div>
        <div className="px-6 md:px-10 lg:px-40 flex lg:grid lg:grid-cols-2 flex-col gap-8 lg:gap-36 text-center">
          <img
            src="/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg md:hidden"
          />

          <div className="flex flex-col gap-6 lg:justify-center lg:items-start items-center">
            <h1 className="md:text-4xl text-2xl text-deepBlack font-bold lg:text-left text-center">
              XX99 Mark II Headphones
            </h1>

            <div className="w-fit ">
              <Button1 color={"orange"} content={"See Product"} />
            </div>
          </div>
        </div>
        <div className="px-6 md:px-10 lg:px-40 flex lg:grid lg:grid-cols-2 flex-col gap-8 lg:gap-36 text-center">
          <img
            src="/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"
            alt="Mobile Header"
            className=" w-auto h-auto object-cover rounded-lg md:hidden"
          />

          <div className="flex flex-col gap-6 lg:justify-center lg:items-start items-center">
            <h1 className="md:text-4xl text-2xl text-deepBlack font-bold lg:text-left text-center">
              XX99 Mark II Headphones
            </h1>

            <div className="w-fit ">
              <Button1 color={"orange"} content={"See Product"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
