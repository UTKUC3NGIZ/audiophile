import React from "react";

function button1({ content, bgColor }) {
  return (
    <button
      className={`py-3 px-8 border  border-transparent text-pureWhite font-bold text-sm uppercase font-sans  w-full ${
        bgColor ? `bg-${bgColor}` : "bg-sunsetOrange hover:bg-peachy"
      }`}
    >
      {content}
    </button>
  );
}

export default button1;
