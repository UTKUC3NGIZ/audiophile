import Image from "next/image";
import React from "react";

function header() {
  return (
    <div className="flex justify-between py-8 px-6 ">
      <button>
        <Image
          src="/assets/shared/tablet/icon-hamburger.svg"
          alt="Arrow Right Icon"
          width={16}
          height={16}
        />
      </button>
      <div>
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="Arrow Right Icon"
          width={143}
          height={25}
        />
      </div>
      <button>
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="Arrow Right Icon"
          width={23}
          height={20}
        />
      </button>
    </div>
  );
}

export default header;
