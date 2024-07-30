import React from "react";

function button1({ content, bgColor, textColor, borderColor }) {
  return (
    <button
      className={`py-3 px-8 border font-bold text-sm uppercase font-sans  w-full ${
        bgColor
          ? `bg-${bgColor} text-${textColor} border-${borderColor}`
          : "bg-sunsetOrange hover:bg-peachy text-pureWhite border-transparent"
      }`}
    >
      {content}
    </button>
  );
}

export default button1;
