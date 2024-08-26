import React from 'react'

export default function SkeletonProductInfo() {
  return (
    <div className='flex flex-col gap-5 rounded'>
      <div className='h-[20px] my-1 w-[150px] bg-slate-200 animate-pulse rounded'></div>
      <div className='h-[20px] my-1 w-[70px] bg-slate-200 animate-pulse rounded'></div>
      <div className='h-[20px] my-1 bg-slate-200 animate-pulse rounded'></div>
      <div className='h-[20px] my-1 bg-slate-200 animate-pulse rounded'></div>
      <div className='h-[20px] my-1 bg-slate-200 animate-pulse rounded'></div>
      <div className='h-[20px] my-2 w-[100px] bg-slate-200 animate-pulse rounded'></div>
      <div className='h-[20px] my-2 w-[200px] bg-slate-200 animate-pulse rounded'></div>
    </div>
  )
}
