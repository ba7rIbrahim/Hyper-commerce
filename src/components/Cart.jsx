"use client";
import { cartContext } from "../context/cartContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";

export default function Cart({ handleShowCart }) {
  const { cart, setCart } = useContext(cartContext);
  const [showCart, setShowCart] = useState("block");
  const router = useRouter();

  return (
    <div
      className={`${showCart} absolute z-50 top-[64px] right-0 w-screen max-w-sm border border-primary bg-gray-100 px-4 py-8 sm:px-6 lg:px-8`}
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
    >
      <button
        className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
        onClick={() => {
          setShowCart("hidden");
        }}
      >
        <span className="sr-only">Close cart</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart.map((citem) => {
            return (
              <li key={citem.id} className="flex items-center gap-4">
                <img
                  src={
                    citem?.products?.attributes?.Banner?.data[0]?.attributes
                      ?.url
                  }
                  alt=""
                  className="size-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-gray-900">
                    {citem?.products?.attributes?.Title}
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">
                        Category: {citem?.products?.attributes?.Category}
                      </dt>
                    </div>

                    <div>
                      <dd className="inline">
                        Price: {citem?.products?.attributes?.Price} $
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="space-y-4 text-center">
          <Link
            href="/carts"
            className="block rounded border bg-primary hover:bg-hover text-white border-primary px-5 py-3 text-sm transition hover:ring-1 hover:ring-primary/70"
            onClick={handleShowCart}
          >
            View my cart ({cart.length})
          </Link>
          <button
            className="inline-block text-sm text-primary underline underline-offset-4 transition hover:primary-hover"
            onClick={() => {
              router.push("/checkout");
            }}
          >
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
}
