"use client";
import Image from "next/image";
import React from "react";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Button3 from "@/components/buttons/button3";
import Button1 from "@/components/buttons/button1";
import { useState } from "react";

function header() {
  const [hamburgerIsOpen, hamburgerSetIsOpen] = useState(false);
  const [basketIsOpen, basketSetIsOpen] = useState(true);

  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];

  return (
    <div className="flex justify-between items-center py-8 px-6 lg:px-20 bg-deepBlack">
      <div className="flex items-center space-x-6 md:space-x-8 lg:space-x-0">
        <button onClick={() => hamburgerSetIsOpen(true)} className="lg:hidden">
          <Image
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="Hamburger Icon"
            width={16}
            height={16}
          />
        </button>

        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="Logo"
          width={143}
          height={25}
          className="hidden md:block"
        />
      </div>
      <div>
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="Logo"
          width={143}
          height={25}
          className="md:hidden"
        />
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-pureWhite"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={() => basketSetIsOpen(true)}
        className="md:ml-auto lg:ml-0"
      >
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="Cart Icon"
          width={23}
          height={20}
        />
      </button>
      {/* Hamburger Menu */}
      <Dialog
        open={hamburgerIsOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => hamburgerSetIsOpen(false)}
      >
        <DialogBackdrop className="fixed inset-0 md:bg-black/30" />

        <div className="fixed flex w-screen items-center justify-center p-4 pt-28 bg-pureWhite md:rounded-b-lg">
          <DialogPanel
            transition
            className="w-full max-w-md md:max-w-max rounded-xl  backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <div className="flex gap-12 md:gap-3 flex-col md:flex-row ">
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
          </DialogPanel>
        </div>
      </Dialog>

      {/* Basket */}

      <Dialog
        open={basketIsOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => basketSetIsOpen(false)}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 flex w-screen md:right-0 md:w-auto md:inset-auto md:top-0 md:px-6 lg:px-20 items-center justify-center mt-28 ">
          <DialogPanel className="w-auto space-y-4 bg-white p-8 rounded-lg">
            <div>
              <div className="flex justify-between">
                <h2 className="text-deepBlack text-lg font-bold uppercase">
                  Cart (3)
                </h2>
                <button className="text-deepBlack text-opacity-50 underline">
                  Remove All
                </button>
              </div>
              {/* basket product */}
              <div>
                <div>
                  <div className="flex justify-between mt-6 gap-4">
                    <div className="flex gap-4">
                      <div className="bg-cloudGray w-16 h-16 flex justify-center items-center rounded-lg">
                        <Image
                          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
                          alt=""
                          width={100}
                          height={100}
                          className="mt-4"
                        />
                      </div>
                      <div>
                        <h2 className="text-deepBlack text-base font-bold">
                          XX99 MK II
                        </h2>
                        <p className="text-deepBlack text-opacity-50 font-bold text-sm">
                          $ 2,999
                        </p>
                      </div>
                    </div>
                    <div>
                      <div class="relative flex items-center max-w-[6rem] max-h-[2rem] overflow-hidden">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="quantity-input"
                          class="p-3 h-11 bg-cloudGray"
                        >
                          <svg
                            class="w-2 h-2 text-deepBlack opacity-25"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          id="quantity-input"
                          data-input-counter
                          aria-describedby="helper-text-explanation"
                          class=" h-11 text-center block w-full py-2.5 bg-cloudGray text-deepBlack placeholder-deepBlack"
                          placeholder="1"
                          required
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="quantity-input"
                          class=" p-3 h-11 bg-cloudGray"
                        >
                          <svg
                            class="w-2 h-2 text-deepBlack opacity-25"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-6 gap-4">
                    <div className="flex gap-4">
                      <div className="bg-cloudGray w-16 h-16 flex justify-center items-center rounded-lg">
                        <Image
                          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
                          alt=""
                          width={100}
                          height={100}
                          className="mt-4"
                        />
                      </div>
                      <div>
                        <h2 className="text-deepBlack text-base font-bold">
                          XX59
                        </h2>
                        <p className="text-deepBlack text-opacity-50 font-bold text-sm">
                          $ 899
                        </p>
                      </div>
                    </div>
                    <div>
                      <div class="relative flex items-center max-w-[6rem] max-h-[2rem] overflow-hidden">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="quantity-input"
                          class="p-3 h-11 bg-cloudGray"
                        >
                          <svg
                            class="w-2 h-2 text-deepBlack opacity-25"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          id="quantity-input"
                          data-input-counter
                          aria-describedby="helper-text-explanation"
                          class=" h-11 text-center block w-full py-2.5 bg-cloudGray text-deepBlack placeholder-deepBlack"
                          placeholder="2"
                          required
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="quantity-input"
                          class=" p-3 h-11 bg-cloudGray"
                        >
                          <svg
                            class="w-2 h-2 text-deepBlack opacity-25"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-6 gap-4">
                    <div className="flex gap-4">
                      <div className="bg-cloudGray w-16 h-16 flex justify-center items-center rounded-lg">
                        <Image
                          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
                          alt=""
                          width={100}
                          height={100}
                          className="mt-4"
                        />
                      </div>
                      <div>
                        <h2 className="text-deepBlack text-base font-bold">
                          YX1
                        </h2>
                        <p className="text-deepBlack text-opacity-50 font-bold text-sm">
                          $ 599
                        </p>
                      </div>
                    </div>
                    <div>
                      <div class="relative flex items-center max-w-[6rem] max-h-[2rem] overflow-hidden">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="quantity-input"
                          class="p-3 h-11 bg-cloudGray"
                        >
                          <svg
                            class="w-2 h-2 text-deepBlack opacity-25"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          id="quantity-input"
                          data-input-counter
                          aria-describedby="helper-text-explanation"
                          class=" h-11 text-center block w-full py-2.5 bg-cloudGray text-deepBlack placeholder-deepBlack"
                          placeholder="1"
                          required
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="quantity-input"
                          class=" p-3 h-11 bg-cloudGray"
                        >
                          <svg
                            class="w-2 h-2 text-deepBlack opacity-25"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bashet Footer */}
              <div className="flex justify-between pt-8">
                <h2 className="text-deepBlack text-opacity-50 text-base font-bold uppercase">
                  Total
                </h2>
                <button className="text-deepBlack text-lg font-bold">
                  $ 5,396
                </button>
              </div>
              <div className="mt-6">
                <Button1 />
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

export default header;
