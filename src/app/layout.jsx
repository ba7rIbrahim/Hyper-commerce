"use client";
import { useState } from "react";
import { cartContext } from "../context/cartContext";
// Google Font
import { Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
// Clerk Auth
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <ClerkProvider>
      <cartContext.Provider value={{ cart, setCart }}>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/logo.svg" type="image/x-icon" />
            <title>HYPER</title>
          </head>
          <body className={poppins.className}>
            <header className="text-right mx-6">
              <div className="flex justify-between items-center">
                <SignedOut>
                  <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={40} height={40} />
                  </Link>
                  <SignInButton className="bg-primary text-white rounded p-2 my-3 "></SignInButton>
                </SignedOut>
              </div>
              <SignedIn></SignedIn>
            </header>
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </cartContext.Provider>
    </ClerkProvider>
  );
}
