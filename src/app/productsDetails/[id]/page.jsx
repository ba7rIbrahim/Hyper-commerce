"use client";
import BreadCrumb from "../../../components/BreadCrumb";
import ProductInfo from "./_components/ProductInfo";
import ProductBanner from "./_components/ProductBanner";
import SimilarProduct from "./_components/SimilarProduct";
// .. \\
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProductDetails() {
  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`https://hyper-commerce-dashboard.onrender.com/api/products/${params?.id}?populate=*`)
      .then((res) => {
        setProducts(res.data.data);
      });
  }, []);

  return (
    <div className="container">
      <div className="px-10 py-8 md:px-28">
        <BreadCrumb id={params.id} />
        <div className="mt-10">
          <div className="grid items-center justify-around grid-cols-1 md:gap-4 mt-10 md:grid-cols-2">
            <ProductBanner
              banner={products?.attributes?.Banner?.data[0]?.attributes?.url}
            />
            <ProductInfo products={products} />
          </div>
          <SimilarProduct products={products} />
        </div>
      </div>
    </div>
  );
}
