'use client';
import React, { useState, useEffect } from 'react';
import { AiFillApple } from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";
import { useSpring, animated } from "@react-spring/web"; // For hover animation

const Trade = () => {
  const services = [
    { 
      name: 'Trade Anytime, Anywhere', 
      description: 'We create modern, responsive websites that look great on any device.',
      image: 'https://randomqr.com/assets/images/randomqr-256.png',
    },
  ];

  const activeService = services[0];
  const [offset, setOffset] = useState(0); // in px
  const maxOffset = typeof window !== 'undefined' ? window.innerWidth * 0.2 : 0; // 20% of screen width

  // Hover animation for image
  const [props, set] = useSpring(() => ({
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    config: { mass: 1, tension: 200, friction: 20 },
  }));

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight ? scrollTop / docHeight : 0;

      // Calculate offset: 0 → maxOffset
      setOffset(scrollPercent * maxOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxOffset]);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center gap-12 text-center">

        {/* Image with background text */}
        <div className="relative w-[100px] md:w-[250px] lg:w-[250px]">
          {/* Background Text */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translateX(${offset}px)`,
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <span className="md:text-[9vw] text-[12vw] font-normal text-white select-none">
              Trade Anytime, <span className='text-[#A35CA2]'>Anywhere</span>
            </span>
          </div>

          {/* Animated Image */}
          <animated.img
            src={activeService.image}
            alt={activeService.name}
            className="relative w-full rounded-3xl shadow-2xl object-cover z-10 cursor-pointer"
            onMouseEnter={() => set({ scale: 1.05, rotateX: 2, rotateY: 2 })}
            onMouseLeave={() => set({ scale: 1, rotateX: 0, rotateY: 0 })}
            style={{
              transform: props.scale.to(
                (s) =>
                  `perspective(600px) rotateX(${props.rotateX.get()}deg) rotateY(${props.rotateY.get()}deg) scale(${s})`
              ),
            }}
          />
        </div>

        {/* Description */}
        <div className="space-y-6 animate-fade-in max-w-2xl">
          <p className="text-sm md:text-base font-light text-gray-400">
            {activeService.description}
          </p>
        </div>

        {/* App Store / Google Play badges */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
          {/* App Store Badge */}
          <div className="bg-black rounded-xl p-3 hover:bg-gray-900 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="text-white">
                <AiFillApple className='text-white text-xl'/>
              </div>
              <div className="text-white text-left">
                <div className="text-xs">Available on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </div>
          </div>

          {/* Google Play Badge */}
          <div className="bg-black rounded-xl p-3 hover:bg-gray-900 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="text-white">
                <BiLogoPlayStore className='text-white text-xl' />
              </div>
              <div className="text-white text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Trade;
