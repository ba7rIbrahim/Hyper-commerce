"use client";
import ProductsList from "./ProductsList";
import SkeletonProductsList from "./SkeletonProductsList";
import Pagination from "./Pagination";
import FilterProducts from "./FilterProducts";
// .. \\
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [productsResult, setProductsResult] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [paginationPage, setPaginationPage] = useState(1);
  const [filterProducts, setFilterProducts] = useState('ALL');
  const token = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://hyper-commerce-dashboard.onrender.com/api/products?filters${filterProducts !== 'ALL' ? `[Category][$eq]=${filterProducts}` : ''}&pagination[page]=${paginationPage}&pagination[pageSize]=12&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setProductsResult(response.data.data);
        setPagination(response.data.meta);
      })
      .catch((error) => {
        Error(error);
      });
  }, [paginationPage, filterProducts]);

  return (
    <div className="px-10 md:px-20">
      <h2 className="text-primary text-3xl font-medium my-5">
        Our Latest Product
      </h2>
      <FilterProducts product={productsResult} filterProducts={filterProducts} setFilterProducts={setFilterProducts}/>
      {productsResult.length > 0 ? (
        <ProductsList product={productsResult} />
      ) : (
        <div className="grid gap-10 place-items-center md:place-items-start gird-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <SkeletonProductsList />
          <SkeletonProductsList />
          <SkeletonProductsList />
          <SkeletonProductsList />
          <SkeletonProductsList />
          <SkeletonProductsList />
        </div>
      )}
      <Pagination pagination={pagination} paginationPage={paginationPage} setPaginationPage={setPaginationPage} />
    </div>
  );
}
