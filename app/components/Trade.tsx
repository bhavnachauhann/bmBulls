'use client';
import React, { useState, useEffect } from 'react';
import { AiFillApple } from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";
import { useSpring, animated, to } from "@react-spring/web";

const Trade = () => {

  const services = [
    { 
      name: 'Trade Anytime, Anywhere', 
      image: 'https://randomqr.com/assets/images/randomqr-256.png',
    },
  ];

  const activeService = services[0];
  const [offset, setOffset] = useState(0); // in px
  const maxOffset = typeof window !== 'undefined' ? window.innerWidth * 0.1 : 0; // 20% of screen width

  // Hover animation for image
  const [props, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    config: { mass: 5, tension: 350, friction: 40 },
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
      <animated.div
  style={{
    transform: to(
      [props.rotateX, props.rotateY, props.scale],
      (rx, ry, s) =>
        `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${s})`
    ),
  }}
  onMouseMove={(e) => {
    const x = e.clientX - e.currentTarget.getBoundingClientRect().left;
    const y = e.clientY - e.currentTarget.getBoundingClientRect().top;
    const width = e.currentTarget.offsetWidth;
    const height = e.currentTarget.offsetHeight;

    // update tilt
    const rotateX = (y - height / 2) / 20;
    const rotateY = (x - width / 2) / 20;
    api.start({ rotateX, rotateY, scale: 1.1 });

    // update shine position
    e.currentTarget.style.setProperty("--shine-x", `${x}px`);
    e.currentTarget.style.setProperty("--shine-y", `${y}px`);
  }}
  onMouseLeave={(e) => {
    api.start({ rotateX: 0, rotateY: 0, scale: 1 });
    e.currentTarget.style.setProperty("--shine-x", `-9999px`);
    e.currentTarget.style.setProperty("--shine-y", `-9999px`);
  }}
  className="relative w-64 h-64 rounded-xl shadow-lg overflow-hidden cursor-pointer"
>
  {/* Image */}
  <img
    src="https://randomqr.com/assets/images/randomqr-256.png"
    alt="Trade Card"
    className="w-full h-full object-cover border-4 border-gray-300"
  />

  {/* Shine layer */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: `radial-gradient(circle at var(--shine-x, -9999px) var(--shine-y, -9999px), rgba(255,255,255,0.5), transparent 80%)`,
    }}
  />
</animated.div>


        </div>

        

        {/* App Store / Google Play badges */}
        <div className="flex flex-col sm:flex-col gap-2 justify-center items-center mt-2">
          {/* App Store Badge */}
          <div className="bg-black rounded-xl p-1 hover:bg-gray-900 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="text-white">
                <AiFillApple className='text-white text-2xl'/>
              </div>
              <div className="text-white text-left">
                <div className="text-xs">Available on the</div>
                <div className="text-lg font-medium">App Store</div>
              </div>
            </div>
          </div>

          {/* Google Play Badge */}
          <div className="bg-black rounded-xl p-1 hover:bg-gray-900 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="text-white">
                <BiLogoPlayStore className='text-white text-2xl' />
                             </div>
              <div className="text-white text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-medium">Google Play</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Trade;
