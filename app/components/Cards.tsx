'use client'
import React from 'react'
import "./card.css"; // custom CSS

const Cards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 pb-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Left column tags */}
        <div className="p-4 flex flex-col  ">
          <h2 className="text-lg font-bold text-center md:block hidden">Abcd Vintage</h2>
          <p className="text-black text-center mt-1 text-sm md:block hidden">
            Perfect for balanced, all-level traders looking for solid growth.
          </p>

          <div className="mt-6 flex flex-col gap-2 text-sm text-gray-400">
            <p className="border-b border-gray-500/30 pb-3">Who It’s For</p>
            <p className="border-b border-gray-500/30 pb-3">$10%</p>
            <p className="border-b border-gray-500/30 pb-3">from 0.2 pips</p>
            <p className="border-b border-gray-500/30 pb-3">No Commission</p>
            <p className="border-b border-gray-500/30 pb-3">1:Unlimited</p>
            <p className="border-b border-gray-500/30 pb-3">0.01</p>
            <p className="border-b border-gray-500/30 pb-3">200 trades during peak hours</p>
            <p className="border-b border-gray-500/30 pb-3">Unlimited</p>
            <p className="border-b border-gray-500/30 pb-3">0%</p>
            <p className="border-b border-gray-500/30 pb-3">30%</p>
            <p className="border-b border-gray-500/30 pb-3">0%</p>
            <p className="border-b border-gray-500/30 pb-3">Moderate</p>
            <p className="border-b border-gray-500/30 pb-3">Asset Options</p>
          </div>
        </div>

        {/* Cards */}
        {[1, 2, 3].map((card) => (
          <div
            key={card}
            className={`bg-gradient-to-b from-[#1A0A20] to-black text-white rounded-2xl shadow-lg p-4 flex flex-col relative ${
              card === 2 ? "animated-border" : ""
            }`}
          >
            {/* Card Header */}
            <h2 className="text-lg font-bold text-center">Abcd Vintage</h2>
            <p className="text-gray-300 text-center mt-1 text-sm">
              Perfect for balanced, all-level traders looking for solid growth.
            </p>

            {/* Values */}
            <div className="mt-6 flex flex-col gap-2 text-sm text-center">
              {[
                "All-level traders",
                "$10%",
                "from 0.2 pips",
                "No Commission",
                "1:Unlimited",
                "0.01",
                "200 trades during peak hours",
                "Unlimited",
                "0%",
                "30%",
                "0%",
                "Moderate",
                "Forex, Crypto, Stocks, Commodities, Indices",
              ].map((text, i) => (
                <p key={i} className="relative pb-3">
                  {text}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60"></span>
                </p>
              ))}
            </div>

            {/* Button */}
            <div className="mt-6 flex justify-center">
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-medium hover:opacity-90 transition text-sm">
                Start Trading
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
