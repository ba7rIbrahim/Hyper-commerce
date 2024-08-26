'use client'
import { useUser } from "@clerk/nextjs";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CheckoutForm = () => {
  const { user } = useUser();
  const router = useRouter();

  const handleSubmit = async () => {
    console.log('true')
    const res = await fetch(`api/send`, {
      method: "POST",
      body: JSON.stringify({
        email: user.primaryEmailAddress.emailAddress,
        fullName: user.fullName
      })
    });
    router.push('/payment-confirm')
  };

  return (
    <div
      className="container w-full mx-auto min-h-[calc(100vh-283px)] mt-20 px-4"
    >
      <PaymentElement />
      <button className="bg-primary hover:bg-hover text-white rounded w-full mt-10 mb-2 py-3" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CheckoutForm;
