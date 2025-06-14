import React from 'react';
import { features } from '../constraints/index.js'

const FeatureCard = ({ icon, title, content }) => (
  <div className="flex flex-row p-4 rounded-xl feature-card shadow-md transition-all duration-300">
    <div className="w-[64px] h-[64px] flex justify-center items-center ">
      <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <div className="ml-3">
      <h4 className="text-white font-poppins font-semibold text-[18px] leading-[23px]">{title}</h4>
      <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[23px]">{content}</p>
    </div>
  </div>
);


const Business = () => {
  return (
    <section id='features' className="flex flex-col md:flex-row justify-between items-start gap-8 px-4 md:px-20 py-10 mt-10">
  {/* Left Section */}
  <div className="flex-1 mx-3 md:0">
    <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-8">
      You do the business, <br className="hidden md:block" /> we’ll handle the money.
    </h2>
    <p className="text-gray-300 max-w-md mb-8">
      With the right credit card, you can improve your financial life by building credit, earning rewards, and saving money.
    </p>
    <button className="bg-cyan-400 text-black px-6 py-3 rounded-lg hover:bg-cyan-500 transition">
      Get Started
    </button>
  </div>

  {/* Right Section: Feature Cards */}
  <div className="flex-1 w-full flex justify-center md:justify-end">
    <div className="flex flex-col gap-6 w-full max-w-[500px]">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </div>
</section>

  );
};

export default Business;
