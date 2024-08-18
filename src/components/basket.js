"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import Button1 from "@/components/buttons/button1";
import Link from "next/link";

function Basket({ basketIsOpen, setBasketIsOpen }) {
  const [basket, setBasket] = useState([]);

  // useEffect(() => {
  //   setBasket(JSON.parse(localStorage.getItem("basket")));
  // }, [basketIsOpen]);
  const removeAll = () => {
    localStorage.removeItem("basket");
    setBasket([]);
  };

  const totalPrice = basket?.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const updateBasket = (newBasket) => {
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  const incrementQuantity = (index) => {
    const newBasket = [...basket];
    newBasket[index].quantity += 1;
    updateBasket(newBasket);
  };

  const decrementQuantity = (index) => {
    const newBasket = [...basket];
    if (newBasket[index].quantity > 1) {
      newBasket[index].quantity -= 1;
    } else {
      newBasket.splice(index, 1);
    }
    updateBasket(newBasket);
  };

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
          {basket.length > 0 ? (
            <div>
              <div className="flex justify-between">
                <h2 className="text-deepBlack text-lg font-bold uppercase">
                  Cart ({basket?.length})
                </h2>
                <button
                  className="text-deepBlack text-opacity-50 underline hover:text-sunsetOrange"
                  onClick={() => removeAll()}
                >
                  Remove All
                </button>
              </div>
              {/* basket product */}
              <div>
                <div>
                  {basket?.map((item, index) => (
                    <div
                      className="flex justify-between mt-6 gap-4"
                      key={index}
                    >
                      <div className="flex gap-4">
                        <div className="bg-cloudGray w-16 h-16 flex justify-center items-center rounded-lg">
                          <Image
                            src={`/assets/cart/image-${item.slug}.jpg`}
                            alt=""
                            width={100}
                            height={100}
                            className="mt-4"
                          />
                        </div>
                        <div>
                          <h2 className="text-deepBlack text-base font-bold">
                            {item.name}
                          </h2>
                          <p className="text-deepBlack text-opacity-50 font-bold text-sm">
                            $ {item.price}
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
                            onClick={() => decrementQuantity(index)}
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
                            placeholder={item.quantity}
                            required
                            readOnly
                          />
                          <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="quantity-input"
                            className=" p-3 h-11 bg-cloudGray"
                            onClick={() => incrementQuantity(index)}
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
                  ))}
                </div>
              </div>
              {/* Bashet Footer */}
              <div className="flex justify-between pt-8">
                <h2 className="text-deepBlack text-opacity-50 text-base font-bold uppercase">
                  Total
                </h2>
                <button className="text-deepBlack text-lg font-bold">
                  $ {totalPrice?.toLocaleString()}
                </button>
              </div>
              <div className="mt-6">
                <Link href={"/checkout"} onClick={() => setBasketIsOpen(false)}>
                  <Button1 content={"Checkout"} color={"orange"} />
                </Link>
              </div>
            </div>
          ) : (
            <h1 className="text-deepBlack text-sm font-bold uppercase">
              Basket is empty
            </h1>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default Basket;
