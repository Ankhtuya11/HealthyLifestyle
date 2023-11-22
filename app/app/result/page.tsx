"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation';


export default function page() {
    const searchParams = useSearchParams();
    const engTxt = searchParams.get("data") ?? "";
  return (
    <div>page
 
        {engTxt}
    </div>
  )
}
