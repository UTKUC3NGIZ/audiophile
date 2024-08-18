import React from "react";
import ClientComponent from "@/app/category/client";
import { promises as fs } from "fs";
import Content from "@/components/content";
import Menu from "@/components/menu";
export default async function Page({ params }) {
  const file = await fs.readFile(process.cwd() + "/src/data.json", "utf8");
  const data = JSON.parse(file);
  const product = data.filter((item) => item.category === params.itemName);
  return (
    <div className="pt-[88px]">
      <ClientComponent product={product} />
      <Menu />
      <Content />
    </div>
  );
}
