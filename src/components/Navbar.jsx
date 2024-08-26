"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ClerkProvider, useClerk, UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";

import { cartContext } from "../context/cartContext";
import Cart from "./Cart";
import SideMenu from "./SideMenu";

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const { cart, setCart } = useContext(cartContext);
  const { user } = useUser();
  const [openSideMenu, setOpenSideMenu] = useState("hidden");
  const token = process.env.NEXT_PUBLIC_API_KEY;


  function handleShowCart() {
    setOpenCart(!openCart);
  }

  const handleShowMenu = () => {
    if (openSideMenu === "hidden") setOpenSideMenu("show");
    else setOpenSideMenu("hidden");
  };

  useEffect(() => {
    user && getCartItems();
  }, [user]);

  const getCartItems = () => {
    axios
      .get(
        `https://hyper-commerce-dashboard.onrender.com/api/carts?populate[products][populate]=Banner&filters[email][$eq]=${user.primaryEmailAddress.emailAddress}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        res?.data?.data.forEach((citem) => {
          return setCart((oldCart) => [
            ...oldCart,
            {
              id: citem?.id,
              products: citem?.attributes?.products?.data[0],
            },
          ]);
        });
      })
      .catch((error) => Error(error));
  };

  return (
    user && (
      <header className="bg-white">
        <div className="mx-auto w-full flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-sm">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-hover"
                    href="/"
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-hover"
                    href="#"
                  >
                    {" "}
                    Explore{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-hover"
                    href="#"
                  >
                    {" "}
                    Projects{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-hover"
                    href="#"
                  >
                    {" "}
                    About Us{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-hover"
                    href="#"
                  >
                    {" "}
                    Contact Us{" "}
                  </Link>
                </li>

                <li></li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-hover"
                    href="#"
                  >
                    Login
                  </Link>

                  <a
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:hover sm:block"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              ) : (
                <div className="flex gap-3">
                  <h2
                    className="flex gap-1 cursor-pointer items-center  active:bg-slate-50 duration-400 rounded-[50%] w-[50px] h-[50px]"
                    onClick={handleShowCart}
                  >
                    <ShoppingCart />({cart?.length})
                  </h2>
                  <UserButton />
                  {openCart && (
                    <Cart cart={cart} handleShowCart={handleShowCart} />
                  )}
                </div>
              )}

              <button
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                onClick={handleShowMenu}
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {openSideMenu == "show" && <SideMenu />}
      </header>
    )
  );
}
