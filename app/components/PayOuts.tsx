'use client'
import React, { useEffect, useState, memo } from 'react'
import BlurText from './BlurText'
import Aurora from './Aurora'
import { GoArrowUpRight } from "react-icons/go";

// Memoized Counter component to avoid re-rendering parent
const Counter = memo(() => {
  const [count, setCount] = useState(999600);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000); // increment 1 every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-6xl sm:text-8xl md:text-9xl font-bold mb-4 tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
      ${count.toLocaleString()}
      <span className="ml-1 bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-gray-400">
        +
      </span>
    </div>
  )
});

const PayOuts = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!')
  }

  return (
   <section className="relative w-full min-h-screen flex items-center justify-center text-center px-6 py-20 overflow-hidden ">
  {/* Aurora Background */}
  <div className="absolute inset-0 -z-10 w-full h-full">
    <Aurora
      colorStops={["#BA56A3", "#BEBFC1", "#AB43A3"]}
      blend={0.5}
      amplitude={1.0}
      speed={0.5}
    />
  </div>

  {/* Gradient Glow Layer */}
  <div className="absolute inset-0 pointer-events-none -z-20">
    <div className="absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-pink-500/10 to-transparent rounded-full opacity-20 animate-pulse blur-3xl"></div>
    </div>
    <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="absolute inset-0 bg-gradient-radial from-pink-500/30 via-purple-600/20 to-transparent rounded-full opacity-30 animate-pulse blur-2xl"
        style={{ animationDelay: '1s' }}
      ></div>
    </div>
    <div className="absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="absolute inset-0 bg-gradient-radial from-purple-400/40 to-transparent rounded-full opacity-40 animate-pulse blur-xl"
        style={{ animationDelay: '2s' }}
      ></div>
    </div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-white">
    <div className="mb-8">
      <span className="text-sm uppercase tracking-wider text-gray-400">
        Payouts
      </span>
    </div>

    <div className="mb-8">
      <BlurText
        text="We've Paid Out Over"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={() => console.log('Animation completed!')}
        className="text-4xl sm:text-4xl md:text-6xl font-medium mb-4"
      />
      <BlurText
        text="$1M to Traders"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl sm:text-4xl md:text-6xl font-medium"
      />
    </div>

    <p className="text-base sm:text-base text-gray-400 mb-12">
      Your Trust is Our Fuel—Power Up with Abcd
    </p>

    <div className="mb-12">
      <Counter />
    </div>

    <button className="group px-6 py-3 bg-black text-white font-normal rounded-xl transition-all duration-300 flex items-center gap-2 mx-auto animated-border">
      Are you Next?
      <GoArrowUpRight className="text-xl transform transition-transform duration-300 group-hover:rotate-50" />
    </button>
  </div>
</section>

  )
}

export default PayOuts
