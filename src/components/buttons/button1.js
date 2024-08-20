import React from "react";

function button1({ content, color }) {
  const colorVariants = {
    black:
      "bg-midnightBlack hover:bg-[#4C4C4C] text-pureWhite border-transparent",
    orange:
      "bg-sunsetOrange hover:bg-[#FBAF85] text-pureWhite border-transparent",
    transparent:
      "bg-transparent hover:bg-midnightBlack text-midnightBlack border-black hover:text-pureWhite",
  };
  return (
    <button
      className={` py-3 px-8 border font-bold text-sm uppercase font-sans  w-full ${colorVariants[color]}`}
    >
      {content}
    </button>
  );
}

export default button1;
