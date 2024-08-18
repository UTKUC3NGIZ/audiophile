"use client";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { useState } from "react";
import Button1 from "@/components/buttons/button1";
import Image from "next/image";

const plans = ["e-money", "Cash on Delivery"];

function page() {
  let [selected, setSelected] = useState(plans[0]);
  let [success, setSuccess] = useState(false);

  return (
    <div className="bg-cloudGray">
      <div className="pt-[88px] max-w-[1440px] m-auto px-6 md:px-10 lg:px-40  pb-24">
        <div className=" flex justify-start pt-4 pb-6">
          <button
            className="text-base text-deepBlack text-opacity-50 font-medium"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8">
          <div className="p-6 bg-pureWhite rounded-lg mb-8 col-span-8">
            <h1 className="text-deepBlack text-3xl font-bold">CHECKOUT</h1>
            <div className="pt-8">
              <h2 className="text-sunsetOrange text-sm font-bold pb-4 uppercase">
                Billing details
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
                  <div className="sm:col-span-3 md:col-span-1">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-deepBlack"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Alexei Ward"
                        className="block w-full rounded-lg  py-5 px-6 text-deepBlack border-[#CFCFCF] border outline-none sm:text-sm "
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3 md:col-span-1">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-deepBlack"
                    >
                      Email Address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        placeholder="alexei@mail.com"
                        className="block w-full rounded-lg  py-5 px-6 text-deepBlack border-[#CFCFCF] border outline-none sm:text-sm "
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3 md:col-span-1">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-deepBlack"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="tel"
                        placeholder="+1 202-555-0136"
                        className="block w-full rounded-lg  py-5 px-6 text-deepBlack border-[#CFCFCF] border outline-none sm:text-sm "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h2 className="text-sunsetOrange text-sm font-bold pb-4 uppercase">
                shipping info
              </h2>
              <div className="flex flex-col gap-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-deepBlack"
                  >
                    Your Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="address-level1"
                      placeholder="1137 Williams Avenue"
                      className="block w-full rounded-lg  py-5 px-6 text-deepBlack border-[#CFCFCF] border outline-none sm:text-sm "
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
                  <div className="sm:col-span-3 md:col-span-1">
                    <label
                      htmlFor="zip"
                      className="block text-sm font-medium text-deepBlack"
                    >
                      ZIP Code
                    </label>
                    <div className="mt-2">
                      <input
                        id="zip"
                        name="zip"
                        type="text"
                        autoComplete="postal-code"
                        placeholder="10001"
                        className="block w-full rounded-lg  py-5 px-6 text-deepBlack border-[#CFCFCF] border outline-none sm:text-sm "
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3 md:col-span-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-deepBlack"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        placeholder="New York"
                        className="block w-full rounded-lg  py-5 px-6 text-deepBlack border-[#CFCFCF] border outline-none sm:text-sm "
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3 md:col-span-1">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-deepBlack"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <input
                        id="country"
                        name="country"
                        type="text"
                        autoComplete="country"
                        placeholder="United States"
                        className="block w-full rounded-lg  py-5 px-6 text-deepBlack border-[#CFCFCF] border outline-none sm:text-sm "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h2 className="text-sunsetOrange text-sm font-bold pb-4 uppercase">
                payment details
              </h2>
              <div className="flex flex-col gap-6">
                <RadioGroup
                  value={selected}
                  onChange={setSelected}
                  aria-label="Server size"
                  className="flex flex-col gap-4 md:justify-end md:items-end"
                >
                  {plans.map((plan) => (
                    <Field
                      key={plan}
                      className="flex flex-row gap-4 items-center w-full rounded-lg  py-5 px-6 text-deepBlack border-[#CFCFCF] border outline-none sm:text-sm md:w-1/2"
                    >
                      <Radio
                        value={plan}
                        className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-sunsetOrange "
                      >
                        <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                      </Radio>
                      <Label className="text-deepBlack">{plan}</Label>
                    </Field>
                  ))}
                </RadioGroup>
                <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
                  <div className="sm:col-span-3 md:col-span-1">
                    <label
                      htmlFor="moneyNumber"
                      className="block text-sm font-medium text-deepBlack"
                    >
                      e-Money Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="moneyNumber"
                        name="moneyNumber"
                        type="text"
                        autoComplete="cc-number"
                        placeholder="238521993"
                        className="block w-full rounded-lg  py-5 px-6 text-deepBlack border-[#CFCFCF] border outline-none sm:text-sm "
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3 md:col-span-1">
                    <label
                      htmlFor="moneyPin"
                      className="block text-sm font-medium text-deepBlack"
                    >
                      e-Money PIN
                    </label>
                    <div className="mt-2">
                      <input
                        id="moneyPin"
                        name="moneyPin"
                        type="text"
                        autoComplete="cc-csc"
                        placeholder="6891"
                        className="block w-full rounded-lg  py-5 px-6 text-deepBlack border-[#CFCFCF] border outline-none sm:text-sm "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-pureWhite rounded-lg col-span-4 lg:h-fit">
            <h1 className="text-deepBlack text-3xl font-bold">summary</h1>
            <div>
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
                      <div className="flex flex-col mt-2">
                        <h2 className="text-deepBlack text-base font-bold">
                          XX99 MK II
                        </h2>
                        <p className="text-deepBlack text-opacity-50 font-bold text-sm">
                          $ 2,999
                        </p>
                      </div>
                    </div>
                    <span className="text-deepBlack text-opacity-50 text-base font-bold mt-2">
                      x1
                    </span>
                  </div>
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
                      <div className="flex flex-col mt-2">
                        <h2 className="text-deepBlack text-base font-bold">
                          XX99 MK II
                        </h2>
                        <p className="text-deepBlack text-opacity-50 font-bold text-sm">
                          $ 2,999
                        </p>
                      </div>
                    </div>
                    <span className="text-deepBlack text-opacity-50 text-base font-bold mt-2">
                      x1
                    </span>
                  </div>
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
                      <div className="flex flex-col mt-2">
                        <h2 className="text-deepBlack text-base font-bold">
                          XX99 MK II
                        </h2>
                        <p className="text-deepBlack text-opacity-50 font-bold text-sm">
                          $ 2,999
                        </p>
                      </div>
                    </div>
                    <span className="text-deepBlack text-opacity-50 text-base font-bold mt-2">
                      x1
                    </span>
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
              <div className="flex justify-between pt-2">
                <h2 className="text-deepBlack text-opacity-50 text-base font-bold uppercase">
                  SHIPPING
                </h2>
                <button className="text-deepBlack text-lg font-bold">
                  $ 50
                </button>
              </div>
              <div className="flex justify-between pt-2">
                <h2 className="text-deepBlack text-opacity-50 text-base font-bold uppercase">
                  VAT (INCLUDED)
                </h2>
                <button className="text-deepBlack text-lg font-bold">
                  $ 1,079
                </button>
              </div>
              <div className="flex justify-between pt-6">
                <h2 className="text-deepBlack text-opacity-50 text-base font-bold uppercase">
                  GRAND TOTAL
                </h2>
                <button className="text-sunsetOrange text-lg font-bold">
                  $ 5,446
                </button>
              </div>
              <div className="mt-6" onClick={() => setSuccess(true)}>
                <Button1 content={"CONTINUE & PAY"} color={"orange"} />
              </div>
            </div>
          </div>
        </div>
        <Dialog
          open={success}
          onClose={() => setSuccess(false)}
          className="relative z-50"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/30" />
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-[540px] md:w-screen space-y-4 border bg-white p-8 rounded-lg">
              <Image
                src="/assets/checkout/icon-order-confirmation.svg"
                alt=""
                width={64}
                height={64}
                className=" pb-2"
              />
              <h1 className="text-2xl font-bold text-deepBlack">
                THANK YOU FOR YOUR ORDER
              </h1>
              <p className="block text-base font-medium text-deepBlack text-opacity-50">
                You will receive an email confirmation shortly.
              </p>
              <div className="bg-cloudGray p-6 rounded-lg rounded-b-none">
                <div className="flex justify-between mt-6 gap-4 border-b ">
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
                    <div className="flex flex-col mt-2">
                      <h2 className="text-deepBlack text-base font-bold">
                        XX99 MK II
                      </h2>
                      <p className="text-deepBlack text-opacity-50 font-bold text-sm">
                        $ 2,999
                      </p>
                    </div>
                  </div>
                  <span className="text-deepBlack text-opacity-50 text-base font-bold mt-2">
                    x1
                  </span>
                </div>
                <p className="text-xs font-bold text-deepBlack opacity-50 text-center pt-3">
                  and 2 other item(s)
                </p>
              </div>
              <div className="bg-deepBlack rounded-lg rounded-t-none px-6 py-4 !m-0">
                <h2 className="text-base text-snowWhite opacity-50 font-medium">
                  GRAND TOTAL
                </h2>
                <span className="text-snowWhite text-lg font-bold">
                  $ 5,446
                </span>
              </div>
              <div className="flex gap-4 ">
                <div onClick={() => setSuccess(false)} className="w-full">
                  <Button1 content={"BACK TO HOME"} color={"orange"} />
                </div>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default page;
