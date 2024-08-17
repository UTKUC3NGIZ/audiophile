import React from "react";

function page() {
  return (
    <div className="pt-[88px] max-w-[1440px] m-auto px-6 md:px-10 lg:px-40 ">
      <div className=" flex justify-start pt-4 pb-6">
        <button className="text-base text-deepBlack text-opacity-50 font-medium">
          Go Back
        </button>
      </div>
      <h1 className="text-deepBlack text-3xl font-bold">CHECKOUT</h1>
      <div className="pt-8">
        <h2 className="text-sunsetOrange text-sm font-bold pb-4 uppercase">
          Billing details
        </h2>
        <div className="flex flex-col gap-6">
          <div className="sm:col-span-3">
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
          <div className="sm:col-span-3">
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
          <div className="sm:col-span-3">
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
          <div className="sm:col-span-3">
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
          <div className="sm:col-span-3">
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
        </div>
      </div>
      <div className="pt-8">
        <h2 className="text-sunsetOrange text-sm font-bold pb-4 uppercase">
          payment details
        </h2>
        <div className="flex flex-col gap-6">
          <div className="sm:col-span-3">
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
          <div className="sm:col-span-3">
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
  );
}

export default page;
