import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import Button3 from "@/components/buttons/button3";

function hamburgerMenu({ hamburgerIsOpen, setHamburgerIsOpen }) {
  return (
    <Dialog
      open={hamburgerIsOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => setHamburgerIsOpen(false)}
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
  );
}

export default hamburgerMenu;