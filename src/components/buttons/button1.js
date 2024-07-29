import React from "react";

function button1({ content }) {
  return (
    <button className="py-3 px-8 border bg-sunsetOrange border-transparent text-pureWhite font-bold text-sm uppercase font-sans hover:bg-peachy w-full">
      {content}
    </button>
  );
}

export default button1;
