'use client'
import React from "react";
import ProductItem from "./ProductItem";

export default function ProductsList({ product }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
      {product.map((item) => {
        return <ProductItem product={item} key={item.id} />
      })}
    </div>
  );
}
