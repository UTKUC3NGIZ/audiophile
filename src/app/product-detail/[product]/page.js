import React from "react";
import ClientComponent from "@/app/product-detail/client";
import { promises as fs } from "fs";
import path from "path";
import Content from "@/components/content";
import Menu from "@/components/menu";

export default async function Page({ params }) {
  const file = await fs.readFile(
    path.join(process.cwd(), "src/data.json"),
    "utf8"
  );
  const data = JSON.parse(file);
  const product = data.find((item) => item.slug === params.product);

  return (
    <div className="pt-[88px] max-w-[1440px] m-auto">
      <ClientComponent product={product} />
      <Menu />
      <Content />
    </div>
  );
}
