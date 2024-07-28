"use client";
import Image from "next/image";
import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Button3 from "@/components/buttons/button3";
import { useState } from "react";

function header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between py-8 px-6 bg-deepBlack">
      <button onClick={() => setIsOpen(true)}>
        <Image
          src="/assets/shared/tablet/icon-hamburger.svg"
          alt="Arrow Right Icon"
          width={16}
          height={16}
        />
      </button>
      <div>
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="Arrow Right Icon"
          width={143}
          height={25}
        />
      </div>
      <button>
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="Arrow Right Icon"
          width={23}
          height={20}
        />
      </button>
      {/* Modal Dialog */}
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto mt-28">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl p-6  backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex gap-12 flex-col ">
                <div className="bg-cloudGray flex items-center flex-col rounded-lg relative">
                  <div className="absolute -top-10 ">
                    <Image
                      src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
                      alt=""
                      width={130}
                      height={160}
                    />
                  </div>
                  <div className="pt-12 text-center font-bold uppercase mt-9">
                    <span className="text-deepBlack text-sm">Headphones</span>
                    <Button3 />
                  </div>
                </div>
                <div className="bg-cloudGray flex items-center flex-col rounded-lg relative">
                  <div className="absolute -top-10 ">
                    <Image
                      src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
                      alt=""
                      width={130}
                      height={160}
                    />
                  </div>
                  <div className="pt-12 text-center font-bold uppercase mt-9">
                    <span className="text-deepBlack text-sm">SPEAKERS</span>
                    <Button3 />
                  </div>
                </div>
                <div className="bg-cloudGray flex items-center flex-col rounded-lg relative">
                  <div className="absolute -top-10 ">
                    <Image
                      src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
                      alt=""
                      width={130}
                      height={160}
                    />
                  </div>
                  <div className="pt-12 text-center font-bold uppercase mt-9">
                    <span className="text-deepBlack text-sm">EARPHONES</span>
                    <Button3 />
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default header;
