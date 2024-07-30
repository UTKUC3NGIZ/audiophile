"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Basket from "@/components/basket";
import HamburgerMenu from "@/components/hamburgerMenu";

function header() {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const [basketIsOpen, setBasketIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "HEADPHONES", href: "#" },
    { name: "SPEAKERS", href: "#" },
    { name: "EARPHONES", href: "#" },
  ];

  return (
    <div className="flex justify-between items-center py-8 px-6 lg:px-20 bg-deepBlack ">
      {/* Header Menu */}
      <div className="flex items-center space-x-6 md:space-x-8 lg:space-x-0">
        <button onClick={() => setHamburgerIsOpen(true)} className="lg:hidden">
          <Image
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="Hamburger Icon"
            width={16}
            height={16}
          />
        </button>
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="Logo"
          width={143}
          height={25}
          className="hidden md:block"
        />
      </div>
      <div>
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="Logo"
          width={143}
          height={25}
          className="md:hidden"
        />
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-bold text-pureWhite uppercase"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <button
        onClick={() => setBasketIsOpen(true)}
        className="md:ml-auto lg:ml-0"
      >
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="Cart Icon"
          width={23}
          height={20}
        />
      </button>
      {/* Hamburger Menu */}
      <HamburgerMenu
        hamburgerIsOpen={hamburgerIsOpen}
        setHamburgerIsOpen={setHamburgerIsOpen}
      />
      {/* Basket */}
      <Basket basketIsOpen={basketIsOpen} setBasketIsOpen={setBasketIsOpen} />
    </div>
  );
}

export default header;
