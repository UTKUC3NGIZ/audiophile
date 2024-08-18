import React, { Suspense } from "react";
import Client from "@/app/checkout/client";

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Client />
    </Suspense>
  );
}

export default Page;
