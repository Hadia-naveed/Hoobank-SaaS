import React from 'react'
import {stats} from '../constraints/index.js'

const Stats = () => {
  return (
    <div className='mt-15'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-6 justify-items-center text-white uppercase">

        {/*boxes*/}
        {stats.map((stat)=>(
          <div key={stat.id}> <span className='font-semibold text-2xl'>{stat.value}</span><span className='text-transparent bg-gradient-to-r from-cyan-400 to-white bg-clip-text'>{stat.title}</span> </div>



        ))}

      </div>
      
    </div>
  )
}

export default Stats
