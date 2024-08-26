import React from "react";
import Image from "next/image";
export default function ProductBanner({ banner }) {
  return (
    <div>
      {banner ? (
        <Image
          src={banner}
          alt="Product Details Banner"
          width={400}
          height={400}
          className="rounded-lg h-full bg-cover w-[100%]"
        />
      ) : (
        <div className=" h-[400px] rounded-lg bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
}
