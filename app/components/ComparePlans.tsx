'use client'
import React from 'react'
import './compare.css'
import { MdArrowOutward } from "react-icons/md";
import Cards from './Cards';



const ComparePlans = () => {
    return (
        <>
        <section className=" w-full min-h-screen flex items-center justify-center bg-black text-center px-6 md:py-20 py-6">
            <div className="max-w-3xl mx-auto ">

                <button className="  upsale-button text-lg px-6 mb-20">
                    <span className="">
                        Open FREE Account
                        <MdArrowOutward className='m-2 text-lg' />

                    </span>

                </button>



                {/* Compare Plans text */}
                <div className="mb-4 mt-10">
                    <span className="bg-gradient-to-r from-gray-400 to-purple-500 bg-clip-text text-transparent text-lg font-medium">
                        Compare Plans
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-4xl font-medium  mb-8">
                    <span className="text-white block">Start Small,</span>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Scale Big
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-base text-gray-400 max-w-md mx-auto">
                    Flexible Deposits for <br />Every Trader
                </p>
            </div>
        </section>
                    <Cards/>
                </>

    )
};

export default ComparePlans;