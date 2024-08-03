import React from "react";
import Content from "@/components/content";
import Menu from "@/components/menu";

function page() {
  return (
    <div className="pt-28">
      <div>
        <img
          src="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
          alt="Mobile Header"
          class=" w-auto h-auto object-cover"
        />
      </div>
      <Menu />
      <Content />
    </div>
  );
}

export default page;
