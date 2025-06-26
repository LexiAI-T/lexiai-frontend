// src/pages/LandingPage/components/Hero.jsx

import React from "react"
export default function Hero() {
  return (
    <div className="py-0 flex h-full flex-col items-center justify-center px-32">
      {/* Gradient Border Container */}
      <div className="p-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 leading-tight">
            Justice On Demand
            <br />
            No Lawyers, No Delay.
          </h1>
        </div>

       
       <div className="rounded-2xl  overflow-hidden w-full h-[500px] bg-gradient-to-b from-white to-purple-400 p-[20px]">
      
        <img
          src="/hero.png" // ✅ make sure this path and filename are 100% correct
          alt="Hero Visual"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}
