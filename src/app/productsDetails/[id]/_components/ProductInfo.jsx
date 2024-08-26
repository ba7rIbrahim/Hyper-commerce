"use client";
import { BadgeCheck, ShoppingCart, AlertOctagon, List } from "lucide-react";
import SkeletonProductInfo from "./SkeletonProductInfo";
// .. \\
import axios from "axios";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import React, { useContext } from "react";
import { cartContext } from "../../../../context/cartContext";

export default function ProductInfo({ products }) {
  const { cart, setCart } = useContext(cartContext);
  const { user } = useUser();
  const token = process.env.NEXT_PUBLIC_API_KEY;

  const handelAddToCart = (isDelivery) => {
    if(isDelivery) {
      if (!user) {
        location.assign("https://smart-gopher-63.accounts.dev/sign-in");
      } else {
        const data = {
          data: {
            username: user.fullName,
            email: user.primaryEmailAddress.emailAddress,
            products: [products?.id],
          },
        };
        axios
          .post("https://hyper-commerce-dashboard.onrender.com/api/carts?populate=*", data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setCart((oldCart) => [
              ...oldCart,
              {
                id: res?.data?.data?.id,
                products,
              },
            ]);
          })
          .catch((error) => Error(error));
      }
    }

  };
  return (
    <div className="my-4">
      {products.id ? (
        <>
          <h2 className="font-medium text-[22px]">
            {products?.attributes?.Title}
          </h2>
          <h2 className="text-[16px] text-gray-400 flex gap-1 items-center my-2">
            <List />
            {products?.attributes?.Category}
          </h2>
          <h2 className="flex gap-2 items-center mt-1 mb-5">
            {
              products?.attributes?.isDelivery ? <BadgeCheck className="text-primary" /> : <AlertOctagon className="text-red-500"/>
            }
            {!products?.attributes?.isDelivery ? "No " : ""}Eligible For Instant Delivery{" "}

          </h2>
          <p className="mb-10 text-base text-slate-600">{products?.attributes?.Description[0]?.children[0]?.text}</p>
          <span>
            <span className="text-xl">Price: </span>
            <span className="text-4xl text-primary">{products?.attributes?.Price}$</span>
            
          </span>
          <button
            className={`${products?.attributes?.isDelivery? 'bg-primary' : 'bg-slate-400/60 cursor-not-allowed hover:bg-slate-400/60'} text-white py-2 px-4 rounded text-lg flex gap-5 mt-6 hover:bg-hover`}
            onClick={() => {
              handelAddToCart(products?.attributes?.isDelivery);
            }}
          >
            <ShoppingCart />
            Add To Cart
          </button>
        </>
      ) : (
        <SkeletonProductInfo />
      )}
    </div>
  );
}
