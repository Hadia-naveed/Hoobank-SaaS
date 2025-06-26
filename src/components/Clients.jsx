import React from 'react'
import { clients } from '../constraints/index.js'

const Clients = () => {
  return (
    <section  className='flex items-start px-4 md:px-20 py-8 '>
      <div className='flex flex-wrap justify-center items-center gap-8 w-full'>
        {
          clients.map((img)=>(
          <div key={img.id} className='flex justify-center items-center'>
            <img src={img.logo} alt="img"  className='w-[165px]  hover:scale-110 transition-transform duration-300 '/>
          </div>
          ))
        }
      </div>
    </section>
  )
}

export default Clients
