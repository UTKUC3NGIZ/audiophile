import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import Button3 from "@/components/buttons/button3";
import Link from "next/link";

function hamburgerMenu({ hamburgerIsOpen, setHamburgerIsOpen }) {
  return (
    <Dialog
      open={hamburgerIsOpen}
      as="div"
      className="relative focus:outline-none"
      onClose={() => setHamburgerIsOpen(false)}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      <div className="fixed   overflow-y-auto md:overflow-hidden flex w-screen h-4/5 md:h-auto items-center justify-center p-4 pt-28 bg-pureWhite rounded-b-lg top-[89px] min-h-[600px] md:min-h-0 ">
        <DialogPanel
          transition
          className="w-full max-w-screen-md md:max-w-max rounded-xl  backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
        >
          <div className="flex gap-12 md:gap-3 flex-col md:flex-row ">
            <Link
              href={"/category/headphones"}
              className="bg-cloudGray flex items-center flex-col rounded-lg relative md:w-screen group/item"
              onClick={() => setHamburgerIsOpen(false)}
            >
              <div className="absolute -top-10 ">
                <img
                  src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
                  alt=""
                  className="w-[130px]"
                />
              </div>
              <div className="pt-12 text-center font-bold uppercase mt-9 flex flex-col">
                <span className="text-deepBlack text-sm">Headphones</span>
                <Button3 />
              </div>
            </Link>
            <Link
              href={"/category/speakers"}
              className="bg-cloudGray flex items-center flex-col rounded-lg relative md:w-screen group/item"
              onClick={() => setHamburgerIsOpen(false)}
            >
              <div className="absolute -top-10 ">
                <img
                  src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
                  alt=""
                  className="w-[130px]"
                />
              </div>
              <div className="pt-12 text-center font-bold uppercase mt-9 flex flex-col">
                <span className="text-deepBlack text-sm">SPEAKERS</span>
                <Button3 />
              </div>
            </Link>
            <Link
              href={"/category/earphones"}
              className="bg-cloudGray flex items-center flex-col rounded-lg relative md:w-screen group/item"
              onClick={() => setHamburgerIsOpen(false)}
            >
              <div className="absolute -top-10 ">
                <img
                  src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
                  alt=""
                  className="w-[130px]"
                />
              </div>
              <div className="pt-12 text-center font-bold uppercase mt-9 flex flex-col">
                <span className="text-deepBlack text-sm">EARPHONES</span>
                <Button3 />
              </div>
            </Link>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default hamburgerMenu;
