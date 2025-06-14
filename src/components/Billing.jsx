import React from 'react'
import {bill,google ,apple} from  "../assets/index.js"
import "../index.css"

const Billing = () => {
  return (
    <section id='product'className="flex flex-col md:flex-row justify-between items-start gap-8 px-4 md:px-20 py-10 mt-10 w-[100%] h-[100%]">
      
      <div className='md:w-1/2 mx-auto relative '>
  <div>
    <img src={bill} alt="" className='w-[100%] h-[100%] relative z-[5] mx-3 mb:m-0' />
  </div>

  {/* Gradient overlays */}
<div className="absolute z-[3] left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient2"></div>

  <div className='absolute z-[0] left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></div>
</div>

      <div className='md:w-1/2 flex-1 md:pl-15 mx:4 md:m-0'>
        <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-8 md:mt-15">
Easily Control Your <br  className="hidden md:block" /> Billing & Invoicing.
        </h1>
        <p className="text-gray-300 max-w-md mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni numquam quisquam iure accusamus in odit eos, porro excepturi quos veritatis sint. Aperiam quae ea obcaecati quidem optio ut.

        </p>
        <div className='flex flex-row gap-8 mt-4'>
          <span><img src={google} alt="" /></span>
          <span><img src={apple} alt="" /></span>
        </div>
      </div>
      

    </section>
  )
}

export default Billing
