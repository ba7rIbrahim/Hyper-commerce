"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { List } from "lucide-react";

export default function ProductItem({ product }) {
  return (
    <div>
        <Link
          href={`/productsDetails/${product?.id}`}
          className="m-3 bg-slate-50 border border-slate-100 shadow-lg p-2 flex flex-col  rounded-lg  hover:border hover:border-primary hover:shadow-md hover:cursor-pointer"
        >
          <Image
            src={product?.attributes?.Banner?.data[0]?.attributes?.url}
            alt="banner-card"
            width={400}
            height={350}
            className="rounded-t-lg w-full h-[170px] object-contain"
          />
          <div className="p-3">
            <h2 className="text-[15px] font-medium line-clamp-1">
              {product?.attributes?.Title}
            </h2>
            <h2 className="text-[14px] text-gray-400 flex gap-1 items-center">
              <List />
              {product?.attributes?.Category}
            </h2>
          </div>
          <h2 className="text-primary pl-3 font-medium text-lg">
            {product?.attributes?.Price}$
          </h2>
        </Link>
    </div>
  );
}
