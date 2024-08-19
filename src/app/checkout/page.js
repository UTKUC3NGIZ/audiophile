"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Field,
  Label,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import Button1 from "@/components/buttons/button1";
import Image from "next/image";
import Link from "next/link";

const plans = ["e-money", "Cash on Delivery "];

function Page() {
  const [selected, setSelected] = useState(plans[0]);
  const [success, setSuccess] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [errors, setErrors] = useState({});
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    const fetchBasket = async () => {
      const storedBasket = JSON.parse(localStorage.getItem("basket"));
      setBasket(storedBasket);

      if (storedBasket === null || storedBasket.length === 0) {
        window.location.href = "/";
      }
    };

    fetchBasket();
  }, []);

  const totalPrice = basket?.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const validate = (data) => {
    const newErrors = {};

    if (!data.name) newErrors.name = "Name is required";
    if (!data.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(data.email))
      newErrors.email = "Email is invalid";
    if (!data.phone) newErrors.phone = "Phone number is required";
    if (!data.address) newErrors.address = "Address is required";
    if (!data.zip) newErrors.zip = "ZIP Code is required";
    if (!data.city) newErrors.city = "City is required";
    if (!data.country) newErrors.country = "Country is required";
    if (selected === "e-money") {
      if (!data.moneyNumber)
        newErrors.moneyNumber = "e-Money number is required";
      if (!data.moneyPin) newErrors.moneyPin = "e-Money PIN is required";
    }

    return newErrors;
  };

  const submit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      zip: e.target.zip.value,
      city: e.target.city.value,
      country: e.target.country.value,
      moneyNumber: e.target.moneyNumber?.value,
      moneyPin: e.target.moneyPin?.value,
    };

    const newErrors = validate(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      localStorage.removeItem("basket");
    }
  };
  return (
    <div className="bg-cloudGray">
      <div className="pt-[88px] max-w-[1440px] m-auto px-6 md:px-10 lg:px-40  pb-24">
        <div className=" flex justify-start pt-4 pb-6">
          <button
            className="text-base text-deepBlack text-opacity-50 font-medium hover:text-sunsetOrange"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
        <form
          onSubmit={submit}
          className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8"
        >
          <div className="p-6 bg-pureWhite rounded-lg mb-8 col-span-8">
            <h1 className="text-deepBlack text-3xl font-bold">CHECKOUT</h1>
            <div className="pt-8">
              <h2 className="text-sunsetOrange text-sm font-bold pb-4 uppercase">
                Billing details
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
                  <div className="sm:col-span-3 md:col-span-1">
                    <div className="flex flex-row justify-between">
                      <label
                        htmlFor="name"
                        className={`block text-sm font-medium  ${
                          errors.name ? "text-red-500" : "text-deepBlack"
                        }`}
                      >
                        Name
                      </label>
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Alexei Ward"
                        className={`block w-full rounded-lg py-5 px-6 text-deepBlack border ${
                          errors.name ? "border-red-500" : "border-[#CFCFCF]"
                        } outline-none sm:text-sm focus-visible:border-sunsetOrange`}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3 md:col-span-1">
                    <div className="flex flex-row justify-between">
                      <label
                        htmlFor="email"
                        className={`block text-sm font-medium  ${
                          errors.email ? "text-red-500" : "text-deepBlack"
                        }`}
                      >
                        Email Address
                      </label>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="alexei@mail.com"
                        className={`block w-full rounded-lg py-5 px-6 text-deepBlack border ${
                          errors.email ? "border-red-500" : "border-[#CFCFCF]"
                        } outline-none sm:text-sm focus-visible:border-sunsetOrange`}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3 md:col-span-1">
                    <div className="flex flex-row justify-between">
                      <label
                        htmlFor="phone"
                        className={`block text-sm font-medium  ${
                          errors.phone ? "text-red-500" : "text-deepBlack"
                        }`}
                      >
                        Phone Number
                      </label>
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+1 202-555-0136"
                        className={`block w-full rounded-lg py-5 px-6 text-deepBlack border ${
                          errors.phone ? "border-red-500" : "border-[#CFCFCF]"
                        } outline-none sm:text-sm focus-visible:border-sunsetOrange`}
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
                  <div className="flex flex-row justify-between">
                    <label
                      htmlFor="address"
                      className={`block text-sm font-medium  ${
                        errors.address ? "text-red-500" : "text-deepBlack"
                      }`}
                    >
                      Your Address
                    </label>
                    {errors.address && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>
                  <div className="mt-2">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="address-level1"
                      placeholder="1137 Williams Avenue"
                      className={`block w-full rounded-lg py-5 px-6 text-deepBlack border ${
                        errors.address ? "border-red-500" : "border-[#CFCFCF]"
                      } outline-none sm:text-sm focus-visible:border-sunsetOrange`}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
                  <div className="sm:col-span-3 md:col-span-1">
                    <div className="flex flex-row justify-between">
                      <label
                        htmlFor="zip"
                        className={`block text-sm font-medium  ${
                          errors.zip ? "text-red-500" : "text-deepBlack"
                        }`}
                      >
                        ZIP Code
                      </label>
                      {errors.zip && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.zip}
                        </p>
                      )}
                    </div>
                    <div className="mt-2">
                      <input
                        id="zip"
                        name="zip"
                        type="number"
                        autoComplete="postal-code"
                        placeholder="10001"
                        className={`block w-full rounded-lg py-5 px-6 text-deepBlack border ${
                          errors.zip ? "border-red-500" : "border-[#CFCFCF]"
                        } outline-none sm:text-sm focus-visible:border-sunsetOrange`}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3 md:col-span-1">
                    <div className="flex flex-row justify-between">
                      <label
                        htmlFor="city"
                        className={`block text-sm font-medium  ${
                          errors.city ? "text-red-500" : "text-deepBlack"
                        }`}
                      >
                        City
                      </label>
                      {errors.city && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.city}
                        </p>
                      )}
                    </div>
                    <div className="mt-2">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        placeholder="New York"
                        className={`block w-full rounded-lg py-5 px-6 text-deepBlack border ${
                          errors.city ? "border-red-500" : "border-[#CFCFCF]"
                        } outline-none sm:text-sm focus-visible:border-sunsetOrange`}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3 md:col-span-1">
                    <div className="flex flex-row justify-between">
                      <label
                        htmlFor="country"
                        className={`block text-sm font-medium  ${
                          errors.country ? "text-red-500" : "text-deepBlack"
                        }`}
                      >
                        Country
                      </label>
                      {errors.country && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.country}
                        </p>
                      )}
                    </div>
                    <div className="mt-2">
                      <input
                        id="country"
                        name="country"
                        type="text"
                        autoComplete="country"
                        placeholder="United States"
                        className={`block w-full rounded-lg py-5 px-6 text-deepBlack border ${
                          errors.country ? "border-red-500" : "border-[#CFCFCF]"
                        } outline-none sm:text-sm focus-visible:border-sunsetOrange`}
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
                      className={`flex flex-row gap-4 items-center w-full rounded-lg py-5 px-6 text-deepBlack ${
                        selected === plan
                          ? "border-sunsetOrange"
                          : "border-[#CFCFCF]"
                      } border outline-none sm:text-sm md:w-1/2 hover:border-sunsetOrange`}
                    >
                      <Radio
                        value={plan}
                        className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-sunsetOrange"
                      >
                        <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                      </Radio>
                      <Label className="text-deepBlack">{plan}</Label>
                    </Field>
                  ))}
                </RadioGroup>
                {selected === "e-money" ? (
                  <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
                    <div className="sm:col-span-3 md:col-span-1">
                      <div className="flex flex-row justify-between">
                        <label
                          htmlFor="moneyNumber"
                          className={`block text-sm font-medium  ${
                            errors.moneyNumber
                              ? "text-red-500"
                              : "text-deepBlack"
                          }`}
                        >
                          e-Money Number
                        </label>
                        {errors.moneyNumber && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.moneyNumber}
                          </p>
                        )}
                      </div>
                      <div className="mt-2">
                        <input
                          id="moneyNumber"
                          name="moneyNumber"
                          type="number"
                          autoComplete="cc-number"
                          placeholder="238521993"
                          className={`block w-full rounded-lg py-5 px-6 text-deepBlack border ${
                            errors.moneyNumber
                              ? "border-red-500"
                              : "border-[#CFCFCF]"
                          } outline-none sm:text-sm focus-visible:border-sunsetOrange`}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 md:col-span-1">
                      <div className="flex flex-row justify-between">
                        <label
                          htmlFor="moneyPin"
                          className={`block text-sm font-medium  ${
                            errors.moneyPin ? "text-red-500" : "text-deepBlack"
                          }`}
                        >
                          e-Money PIN
                        </label>
                        {errors.moneyPin && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.moneyPin}
                          </p>
                        )}
                      </div>
                      <div className="mt-2">
                        <input
                          id="moneyPin"
                          name="moneyPin"
                          type="number"
                          autoComplete="cc-csc"
                          placeholder="6891"
                          className={`block w-full rounded-lg py-5 px-6 text-deepBlack border ${
                            errors.moneyPin
                              ? "border-red-500"
                              : "border-[#CFCFCF]"
                          } outline-none sm:text-sm focus-visible:border-sunsetOrange`}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row gap-8 items-center">
                    <Image
                      src="/assets/checkout/icon-cash-on-delivery.svg"
                      alt=""
                      width={48}
                      height={48}
                      className=" pb-2 hidden md:block lg:w-[32px] lg:h-[32px]"
                    />
                    <p className="text-deepBlack text-base text-opacity-50">
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="p-6 bg-pureWhite rounded-lg col-span-4 lg:h-fit">
            <h1 className="text-deepBlack text-3xl font-bold uppercase">
              summary
            </h1>
            <div>
              {/* basket product */}

              <div>
                {basket?.map((item, index) => (
                  <div className="flex justify-between mt-6 gap-4" key={index}>
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
                      <div className="flex flex-col mt-2">
                        <h2 className="text-deepBlack text-base font-bold">
                          {item.name}
                        </h2>
                        <p className="text-deepBlack text-opacity-50 font-bold text-sm">
                          $ {item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <span className="text-deepBlack text-opacity-50 text-base font-bold mt-2">
                      x{item.quantity}
                    </span>
                  </div>
                ))}
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
                  $ {(totalPrice * 0.2).toLocaleString()}
                </button>
              </div>
              <div className="flex justify-between pt-6">
                <h2 className="text-deepBlack text-opacity-50 text-base font-bold uppercase">
                  GRAND TOTAL
                </h2>
                <button className="text-sunsetOrange text-lg font-bold">
                  $ {(totalPrice * 1.2 + 50).toLocaleString()}
                </button>
              </div>
              <div className="mt-6">
                <Button1 content={"CONTINUE & PAY"} color={"orange"} />
              </div>
            </div>
          </div>
        </form>

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
              <div className="grid grid-cols-12 w-full">
                <div className="bg-cloudGray p-6 rounded-lg rounded-b-none md:rounded-r-none md:rounded-l col-span-12 md:col-span-7">
                  {basket
                    ?.slice(0, showAll ? basket.length : 1)
                    .map((item, index) => (
                      <div
                        className="flex justify-between mt-6 gap-4 border-b pb-2"
                        key={index}
                      >
                        <div className="flex gap-4">
                          <div className="bg-cloudGray w-16 h-16 flex justify-center items-center rounded-lg">
                            <Image
                              src={`/assets/cart/image-${item.slug}.jpg`}
                              alt=""
                              width={64}
                              height={64}
                              className="mt-4"
                            />
                          </div>
                          <div className="flex flex-col mt-2 max-w-20">
                            <h2 className="text-deepBlack text-base font-bold">
                              {item.name}
                            </h2>
                            <p className="text-deepBlack text-opacity-50 font-bold text-sm">
                              $ {item.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <span className="text-deepBlack text-opacity-50 text-base font-bold mt-2">
                          x{item.quantity}
                        </span>
                      </div>
                    ))}
                  {basket?.length > 1 && (
                    <button
                      className="text-xs font-bold text-deepBlack opacity-50  pt-6 w-full text-center"
                      onClick={() => setShowAll(!showAll)}
                    >
                      {showAll
                        ? "View less"
                        : `and ${basket.length - 1} other item(s)`}
                    </button>
                  )}
                </div>
                <div
                  className={`bg-deepBlack rounded-lg rounded-t-none px-6 py-4 !m-0 md:rounded-l-none md:rounded-r col-span-12 md:col-span-5 flex flex-col ${
                    showAll ? "md:justify-end" : "md:justify-center"
                  }`}
                >
                  <h2 className="text-base text-snowWhite opacity-50 font-medium">
                    GRAND TOTAL
                  </h2>
                  <span className="text-snowWhite text-lg font-bold">
                    $ {(totalPrice * 1.2 + 50).toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex gap-4 ">
                <div onClick={() => setSuccess(false)} className="w-full">
                  <Link href={"/"}>
                    <Button1 content={"BACK TO HOME"} color={"orange"} />
                  </Link>
                </div>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default Page;
