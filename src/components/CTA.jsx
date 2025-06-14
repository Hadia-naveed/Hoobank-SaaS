import React from 'react'

const CTA = () => {
  return (
    <section className='flex items-start mt-7 px-6 md:px-20 py-8'>
      <div className='flex flex-col md:flex-row md:justify-between items-center bg-black-gradient-2 rounded-2xl w-full px-5 py-7 md:px-7 md:py-8'>
      <div className='flex flex-col text-center'>
        <h1 className='font-bold text-4xl'>Let's try our service now!</h1>
        <p className='font-normal text-gray-300 leading-[24px] mt-6 max-w-[470px]'>Everything you need to accept card payments and <br  className="hidden md:block" />grow your business anywhere on the planet.</p>
      </div>
      <div className='mt-10'>
         <button className="bg-cyan-400 text-black px-6 py-3 rounded-lg hover:bg-cyan-500 transition font-semibold">
      Get Started
    </button>
      </div>
      </div>
    </section>
  )
}

export default CTA
