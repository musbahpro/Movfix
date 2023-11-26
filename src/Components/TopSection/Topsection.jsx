import React from 'react'

export default function TopSection({name ,span}) {
  return (
    <div className="w-full h-[600px] bg-black movi-hero flex justify-center items-center">
    <h1 className="text-6xl font-bold">
      {name} <span className="text-yellow-500">{span}</span>
    </h1>
  </div>
  )
}
