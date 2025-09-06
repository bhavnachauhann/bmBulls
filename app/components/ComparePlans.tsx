'use client'
import React, { useEffect, useRef } from 'react';
import './compare.css';
import { MdArrowOutward } from "react-icons/md";
import Cards from './Cards';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ComparePlans = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const text = heading.textContent!;
    const gradientWord = "Abcd";

    let newHTML = "";
    let i = 0;

    while (i < text.length) {
      if (text.slice(i, i + gradientWord.length) === gradientWord) {
        // Wrap entire word "Abcd" in one gradient span
        newHTML += `<span class="wave gradient-text">${gradientWord}</span>`;
        i += gradientWord.length;
      } else {
        const char = text[i];
        newHTML += char === " " ? " " : `<span class="wave">${char}</span>`;
        i++;
      }
    }

    heading.innerHTML = newHTML;

    // GSAP animation
    gsap.fromTo(
      ".wave",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );
  }, []);

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center bg-black text-center px-6 md:pt-28 md:pb-12 py-6">
        <div className="max-w-3xl w-full flex flex-col items-center">

          {/* Centered Button */}
          <button className="bg-[#6242a5] rounded-2xl upsale-button text-base px-8 mb-20 flex">
            <span className="flex items-center gap-2 text-white">
              Open FREE Account
              <MdArrowOutward className='text-lg' />
            </span>
          </button>

          {/* Compare Plans text */}
          <div className="mb-4 mt-6">
            <span className="bg-gradient-to-r from-gray-300 to-purple-500 bg-clip-text text-transparent text-[15px] font-medium">
              Compare Plans
            </span>
          </div>

          {/* Main Heading with wave animation */}
          <h1
            ref={headingRef}
            className="text-3xl sm:text-3xl md:text-6xl font-normal text-white mantope"
          >
            Compare your Abcd plan
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-[16px] text-[#b1b0b4] flex items-center justify-center gap-2 font-extralight">
            Flexible Deposits for Every Trader
          </p>
        </div>
      </section>

      <Cards />
    </>
  );
};

export default ComparePlans;
