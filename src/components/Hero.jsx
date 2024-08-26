import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-[url(https://www.apple.com/v/home/bp/images/heroes/macbook-air-m3/hero_macbook_air_m3__cp4t7pn8zqaa_medium.jpg)] bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 from-gray-900/95 to-gray-900/25 md:bg-gray-900/55 md:from-gray-900/75 md:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      {/* <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center md:text-left ltr:sm:text-center rtl:sm:text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
          All Your Digital Products 
            <strong className="block font-extrabold text-primary">
              {" "}
              Is One Click Away.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Start Expioring State of the Art Assets Now!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center justify-center md:justify-normal">
            <a
              href="#"
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-hover focus:outline-none focus:ring active:bg-active sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow hover:text-hover focus:outline-none focus:ring active:text-active sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
