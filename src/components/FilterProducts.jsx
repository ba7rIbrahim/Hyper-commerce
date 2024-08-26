import { ChartNoAxesColumnDecreasing } from "lucide-react";
import React from "react";

export default function Products({ filterProducts, setFilterProducts }) {
  const categories = [
    "ALL",
    "PHONE",
    "IPAD",
    "WATCH",
    "AIRPOADS",
    "LAPTOP",
  ];
  function handleActive(category) {
    setFilterProducts(category);
  }

  return (
    <div className="mt-12 mb-2">
      <div className="sm:hidden border border-gray-200 rounded mx-3 flex items-center">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select onChange={(e) => {
          handleActive(e.target.value)
        }} id="Tab" className="w-full rounded-md m-2">
          {categories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-400/40">
          <nav className="-mb-px flex gap-6 justify-start mx-2">
            {categories.map((category, index) => {
              return (
                <li
                  key={index}
                  id={index}
                  value={category}
                  className={`${
                    category === filterProducts
                      ? "rounded-t-lg border border-gray-400/40 border-b-white text-primary hover:text-primary"
                      : "border-transparent"
                  } cursor-pointer block shrink-0 border p-3 text-sm font-medium text-gray-500 hover:text-gray-700`}
                  onClick={(e) => {
                    handleActive(e.target.innerHTML);
                  }}
                >
                  {category}
                </li>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
