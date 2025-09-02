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
  { number: '02', title: 'Step 2', description: 'KYC' },
  { number: '03', title: 'Step 3', description: 'Deposit Funds' },
    { number: '04', title: 'Step 4', description: 'Deposit Funds' },

]

const HeroAndTimeline = () => {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: false })

    const handleScroll = () => {
      let current = 0
      stepRefs.current.forEach((step, index) => {
        if (step) {
          const rect = step.getBoundingClientRect()
          if (rect.top < window.innerHeight * 0.5) {
            current = index
          }
        }
      })
      setActiveStep(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
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

      <section className="relative min-h-[100vh] flex flex-col items-center justify-center py-20">
        {/* Heading */}
        <div className="max-w-4xl text-center px-6 relative z-10 mx-auto mb-16">
          <button className="px-6 py-2 mb-6 rounded-full bg-black border border-white/10 text-white text-sm hover:bg-white/10 transition">
            Our Process
          </button>
          
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-medium leading-tight text-white">
            Become a{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Abcd Pro
            </span>
            <br />
            in sec...
          </h1>
          <p className="mt-2 text-lg sm:text-lg text-gray-300 flex items-center justify-center gap-2 font-light">
            🚀 Sign up. Fund. Trade.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative w-full max-w-6xl px-6 z-10">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-white/20"></div>

          {timelineSteps.map((step, index) => {
            const isLeft = index % 2 === 0
            return (
              <div
                key={index}
ref={(el) => { stepRefs.current[index] = el ?? null }}
                className="relative flex items-start justify-between md:h-[250px] h-[200px] mb-12"
              >
                {/* Step content */}
                <div
                  className={`absolute top-0 w-1/2 ${
                    isLeft ? 'left-0 text-right pr-8' : 'right-0 text-left pl-8'
                  }`}
                  data-aos="fade-up"
                >
                  <h3
                    className={`text-xl font-semibold transition-colors duration-300 ${
                      activeStep === index ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-lg font-medium transition-colors duration-300 ${
                      activeStep === index ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Step number */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center font-semibold p-2  text-4xl rounded-full transition-colors duration-300 ${
                    activeStep === index ? 'text-white ' : 'text-gray-500 '
                  }`}
                >
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
