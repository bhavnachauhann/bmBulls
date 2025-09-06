'use client'
import React, { useEffect, useState, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface TimelineStep {
  number: string
  title: string
  description: string
}

const timelineSteps: TimelineStep[] = [
  { number: '01', title: 'Step 1', description: 'Register your account' },
  { number: '02', title: 'Step 2', description: 'Deposit your funds' },
  { number: '03', title: 'Step 3', description: 'KYC' },
  { number: '04', title: 'Step 4', description: 'Start Trading & Earn Profits' },
]

const HeroAndTimeline = () => {
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: false })

    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const scrollProgress =
        (windowHeight / 2 - rect.top) / (rect.height + windowHeight / 2)
      setProgress(Math.max(0, Math.min(1, scrollProgress)))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative mantope pt-6">
      {/* Background only for this section */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://framerusercontent.com/images/DluJryXGyTqDXiRnDpJdmkoSbOU.png)',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <section
        ref={containerRef}
        className="relative min-h-[100vh] flex flex-col items-center justify-center pt-20"
      >
        {/* Heading */}
        <div className="max-w-4xl text-center px-6 relative z-10 mx-auto mb-16">
          <button className="px-6 py-2 mb-4 rounded-full bg-black border border-white/10  hover:bg-white/10 transition">
  <span className="bg-gradient-to-r from-[#C7B8E8] from-[20%] to-[#A189D8] bg-clip-text text-transparent text-[14px] font-medium">
    Our Process
  </span>
</button>


          <h1 className="text-3xl sm:text-3xl md:text-6xl font-normal  text-white mantope">
            Become a{' '}
            <span className="bg-gradient-to-r from-[#A35CA2] to-[#A35CA2] bg-clip-text text-transparent">
              Abcd Pro{' '}
            </span>
            in sec...
          </h1>
          <p className="mt-2 text-[16px]  text-[#b1b0b4] flex items-center justify-center gap-2 font-extralight">
            🚀 Sign up. Fund. Trade.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative w-full max-w-6xl px-6 z-10">
          {/* Center vertical line container */}
        {/* Center vertical line container */}
<div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px] bg-white/20">
  {/* Animated progress line */}
  <div
    className="absolute left-0 w-full bg-gradient-to-b from-[#D5C5FA] to-[#A35CA2]"
    style={{
      height: `calc(${progress * 100}% + 3.5rem)`,
    }}
  />
</div>


          {/* Steps */}
          {timelineSteps.map((step, index) => {
            const isLeft = index % 2 === 1
            return (
              <div
                key={index}
                className="relative flex items-start justify-between md:h-[250px] h-[200px] mb-16"
              >
                {/* Step content */}
                <div
                  className={`absolute top-1 w-1/2 ${
                    isLeft
                      ? 'left-0 text-right pr-20'
                      : 'right-0 text-left pl-20'
                  }`}
                  data-aos="fade-up"
                >
                  <h3 className="text-[20px] font-light text-gray-400">
                    {step.title}
                  </h3>
                  <p className="text-[22px] font-medium text-white">
                    {step.description}
                  </p>
                </div>

                {/* Step number */}
                <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center font-semibold text-[40px] rounded-full text-white bg-black z-20 shadow-lg p-4">
                  {step.number}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default HeroAndTimeline
