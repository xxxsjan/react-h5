"use client"
import { useEffect, useState } from "react"

export default function Header() {
  const [title, setTitle] = useState<string>('')
  useEffect(() => {
    setTitle(document.title)
  },[])
  return <div className="w-full text-center text-lg font-bold h-12 leading-[48px] border-b bg-[#F9F9F9]">
    {title}
  </div>
}