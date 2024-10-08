"use client";
import { useState } from "react";
import Image from "next/image";
import Basket from "@/components/basket";
import HamburgerMenu from "@/components/hamburgerMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  const colorVariants = {
    black: "bg-midnightBlack ",
    transparent: "bg-transparent ",
  };
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const [basketIsOpen, setBasketIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navigation = [
    { name: "Home", href: "/" },
    { name: "HEADPHONES", href: "/category/headphones" },
    { name: "SPEAKERS", href: "/category/speakers" },
    { name: "EARPHONES", href: "/category/earphones" },
  ];
  return (
    <div
      className={`flex justify-between items-center py-8 px-6 md:px-10 lg:px-40 absolute top-0 w-full lg:grid lg:grid-cols-12 z-50 ${
        basketIsOpen ? "lg:pr-44" : ""
      } ${isHomePage ? colorVariants.transparent : colorVariants.black}`}
    >
      {/* Header Menu */}
      <div className="flex items-center space-x-6 md:space-x-8 lg:space-x-0 lg:col-span-2">
        <button onClick={() => setHamburgerIsOpen(true)} className="lg:hidden">
          <Image
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="Hamburger Icon"
            width={16}
            height={16}
          />
        </button>
        <Link href={"/"}>
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="Logo"
            width={143}
            height={25}
            className="hidden md:block"
          />
        </Link>
      </div>
      <div className="lg:col-span-8 lg:flex lg:justify-center">
        <Link href={"/"}>
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="Logo"
            width={143}
            height={25}
            className="md:hidden"
          />
        </Link>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[13px] font-bold text-pureWhite uppercase"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <button
        onClick={() => setBasketIsOpen(true)}
        className="md:ml-auto lg:ml-0 lg:col-span-2 lg:flex lg:justify-end"
      >
        <div className="relative">
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="Cart Icon"
            width={23}
            height={20}
          />
          <span className="-top-2 left-4 absolute  w-5 h-5 bg-white border-2 border-white text-deepBlack flex justify-center items-center font-bold text-sm rounded-full">
            {typeof window !== "undefined" && localStorage?.getItem("basket")
              ? JSON.parse(localStorage.getItem("basket")).length
              : 0}
          </span>
        </div>
      </button>
      <span className="w-[90%] lg:w-[78%] h-[1px] bg-cloudGray opacity-50 absolute translate-y-1/2 translate-x-1/2 bottom-0 right-1/2"></span>
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

export default Header;
