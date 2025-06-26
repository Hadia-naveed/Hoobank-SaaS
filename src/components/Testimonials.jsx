import React from 'react'
import { feedback } from '../constraints'
import {quotes} from  "../assets/index.js"

const Testimonials = () => {
  return (
    
  <section id='clients' className='w-full flex flex-col mt-10 justify-center px-4 md:px-20 py-10 relative'>
    <div className='absolute z-[0] w-[60%] h-[60%] rounded-full'/>
    <h1 className='text-center md:text-5xl text-3xl font-semibold leading-[38px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white '> What People Are Saying About Us</h1>

    
     
    <div className='mt-6 md:mt-15 flex flex-col md:flex-row gap-10 w-full justify-center relative z-[1]'>
  {feedback.map((card, index) => (
    <div
      key={card.id}
      className='flex flex-col justify-between rounded-[20px] feedback-card p-8 pt-9 w-full md:max-w-[370px] min-h-[350px] bg-[#1f1f1f] shadow-lg'
    >
      <img src={quotes} alt="quotes" className='w-[42px] h-[27px] object-contain mb-4' />
      
      <p className='font-poppins font-normal text-gray-400 leading-[32px] mt-4 text-[18px] flex-1'>
        {card.content}
      </p>

      <div className='flex flex-row items-center gap-4 mt-auto'>
        <img src={card.img} alt={card.name} className='w-[48px] h-[48px] rounded-full' />
        <div className='flex flex-col'>
          <h4 className='font-poppins font-semibold text-[18px] leading-[32px] text-gray-100'>{card.name}</h4>
          <p className='font-poppins font-normal text-[16px] text-gray-300 leading-[20px]'>{card.title}</p>
        </div>
      </div>
    </div>
  ))}
</div>


  </section>
  )
}

export default Testimonials
