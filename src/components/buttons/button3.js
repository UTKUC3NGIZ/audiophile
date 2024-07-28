import Image from "next/image";
import React from "react";

function button2() {
  return (
    <button className="py-4 px-8 bg-transparent text-deepBlack text-opacity-50 font-bold text-sm uppercase font-sans hover:text-sunsetOrange hover:text-opacity-100 ">
      Shop
      <span className="inline-block ml-2">
        <Image
          src="/assets/shared/desktop/icon-arrow-right.svg"
          alt="Arrow Right Icon"
          width={8}
          height={8}
        />
      </span>
    </button>
  );
}

export default button2;
