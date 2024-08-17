import React from "react";
import ClientComponent from "@/app/product-detail/client";
import { promises as fs } from "fs";
import Content from "@/components/content";
import Menu from "@/components/menu";
export default async function Page({ params }) {
  const file = await fs.readFile(process.cwd() + "/src/data.json", "utf8");
  const data = JSON.parse(file);
  const product = data.find((item) => item.id === Number(params.productId));

  return (
    <div className="pt-[88px] ">
      <ClientComponent product={product} />
      <Menu />
      <Content />
    </div>
  );
}
