import React from 'react'
import { robot,discount } from "../assets/index.js"
import GetStarted from './GetStarted.jsx'

const Hero = () => {
  return (
    <section id='home' className=' flex flex-col md:flex-row w-full items-start top-0'>
   
      
        <div className='flex flex-col md:w-1/2 mt-8 md:mt-25 ml-10'>
          {/*div for discount */}
        <div className='flex flex-row bg-neutral-800 rounded-[10px] items-center px-1.5 pr-3 max-w-[275px] mb-3'>
          <span><img src={discount} alt=""  className='h-[32px] w-[32px]'/></span>
          <p className='text-gray-300 text-sm'>
            <span className='text-white'>20% </span>Discount for <span className='text-white'>1Month </span>Account
          </p>

          </div>
        <div className="flex flex-row items-center w-full">
          
        <h1 className='text-bold text-white flex-1 md:text-[72px] text-[52px] leading-tight' >The Next <br /> <span className='text-transparent bg-gradient-to-r from-cyan-400 to-white bg-clip-text'>Generation</span></h1>
        
        </div>
    

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white sm:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        
        

        <div> 
         
        <p className='text-gray-400 max-w-[475px] mt-4'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.We examine annual percentage rates,annual fees.</p>
     
      </div> 
      <div className='hidden md:block md:mt-6 md:justify-center'><GetStarted/></div>
      </div>
      <div className='flex-1 flex md:my-0 my-10 relative'>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className='md:hidden flex justify-center items-center text-center ml-30'>
  <GetStarted />
</div>


    
      
    
    </section>
  )
}

export default Hero
