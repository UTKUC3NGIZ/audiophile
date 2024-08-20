import Image from "next/image";
import React from "react";

function button3() {
  return (
    <span className="py-4 px-8 bg-transparent text-deepBlack text-opacity-50 font-bold text-sm uppercase font-sans group-hover/item:text-sunsetOrange group-hover/item:text-opacity-100 ">
      Shop
      <span className="inline-block ml-2">
        <Image
          src="/assets/shared/desktop/icon-arrow-right.svg"
          alt="Arrow Right Icon"
          width={8}
          height={8}
        />
      </span>
    </span>
  );
}

export default button3;
