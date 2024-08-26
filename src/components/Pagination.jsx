import React from "react";

export default function Pagination({
  pagination,
  paginationPage,
  setPaginationPage,
}) {
  const paginationList = pagination?.pagination;

  const handlePage = (id) => {
    setPaginationPage(id);
  };
  return (
    <ol className="flex justify-center gap-1 text-xs font-medium mt-10">
      <li className={`${paginationPage === 1 ? "cursor-not-allowed" : "cursor-pointer"} inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180`} onClick={() => {
        if(paginationPage !== 1) setPaginationPage(paginationPage-1)
      }}>
        <span className="sr-only">Prev Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </li>

      {Array.from({ length: paginationList?.pageCount }).map((_, index) => {
        return (
          <li
            key={index + 1}
            id={index + 1}
            className={`${
              paginationList?.page == index + 1
                ? "border-primary bg-primary text-white"
                : "border-gray-100 bg-white text-gray-900"
            } block size-8 rounded border cursor-pointer text-center leading-8 `}
            onClick={(e) => {
              handlePage(Number(e.target.id));
            }}
          >
            {index + 1}
          </li>
        );
      })}

      <li className={`${paginationPage === paginationList?.pageCount ? "cursor-not-allowed": "cursor-pointer"} inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180`} onClick={() => {
        if(paginationPage != paginationList?.pageCount) {
          setPaginationPage(paginationPage+1);
        }
      }}>
        <span className="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </li>
    </ol>
  );
}
