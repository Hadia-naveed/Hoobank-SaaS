import React from 'react';
import { card } from "../assets/index.js";

const Carddeal = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start gap-8 px-4 md:px-20 py-10 mt-10 w-full h-full ">

      {/* Left Section */}
      <div className="md:w-1/2 flex-1 mx-3 mb:m-0">
        <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-8 md:mt-15">
          Find a better card deal <br className="hidden md:block" /> in few easy steps
        </h1>
        <p className="text-gray-300 max-w-md mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor esse suscipit similique illum ducimus aliquid nam iure rerum provident cumque?
        </p>
        <button className="bg-cyan-400 text-black px-6 py-3 rounded-lg hover:bg-cyan-500 transition">
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mx-auto relative ">
        <img src={card} alt="Card Deal" className="w-full h-full relative z-[5]" />
      </div>

    </section>
  );
};

export default Carddeal;
