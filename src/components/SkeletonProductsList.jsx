import React from "react";

export default function SkeletonProductsList() {
  return (
    <div className="grid-cols-1 md:grid-cols-3 gap-5 rounded w-full">
      <div>
        <div className="h-[200px] rounded-lg bg-slate-200 animate-pulse"></div>
      </div>
      <div>
        <div className="h-[10px] my-1 ml-1 w-[60px] bg-slate-200 animate-pulse rounded"></div>
        <div className="h-[10px] my-1 ml-1 w-[50px] bg-slate-200 animate-pulse rounded"></div>
        <div className="h-[10px] my-1 ml-1 w-[60px] bg-slate-200 animate-pulse rounded"></div>
      </div>
    </div>
  );
}
