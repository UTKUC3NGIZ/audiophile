import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import Button1 from "@/components/buttons/button1";
import Link from "next/link";

function basket({ basketIsOpen, setBasketIsOpen }) {
  return (
    <Dialog
      open={basketIsOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => setBasketIsOpen(false)}
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
                    <div className="relative flex items-center max-w-[6rem] max-h-[2rem] overflow-hidden">
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
                        placeholder="1"
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
                    <div className="relative flex items-center max-w-[6rem] max-h-[2rem] overflow-hidden">
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
                    <div className="relative flex items-center max-w-[6rem] max-h-[2rem] overflow-hidden">
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
                        placeholder="1"
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
              <Link href={"/checkout"} onClick={() => setBasketIsOpen(false)}>
                <Button1 content={"Checkout"} color={"orange"} />
              </Link>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default basket;
