"use client";
import { List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// .. \\
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SimilarProduct({ products }) {
  const [productsResult, setProductsResult] = useState([]);
  const token = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    axios
      .get("https://hyper-commerce-dashboard.onrender.com/api/products?populate=*", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProductsResult(response.data.data);
      })
      .catch((error) => {
        Error(error);
      });
  }, []);

  return (
    <div className="mt-16">
      <h1 className="text-2xl mb-4 ">Similar Products</h1>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {productsResult.map((item) => {
          if (
            item?.attributes?.Category == products?.attributes?.Category
          ) {
            return (
              <Link
                href={`/productsDetails/${item?.id}`}
                key={item.id}
                className="shadow-lg bg-slate-50 border border-slate-100 hover:border-primary rounded-lg p-2 "
              >
                <Image
                  src={item?.attributes?.Banner?.data[0]?.attributes?.url}
                  alt="Image Similar Products"
                  width={250}
                  height={250}
                  className="rounded h-[173px] mb-3"
                />
                <div>
                  <h2 className="font-medium line-clamp-1">{item?.attributes?.Title}</h2>
                  <div>
                    <h2 className="text-[16px] text-gray-400 flex gap-1 items-center">
                      <List />
                      {item?.attributes?.Category}
                    </h2>
                    <h2 className="text-primary font-medium text-[18px] mt-2 pl-1">{item?.attributes?.Price}$</h2>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
