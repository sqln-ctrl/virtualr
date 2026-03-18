import React from 'react'
import { testimonials } from '../constants'
const Testimonials = () => {
  return (
    <div className='mt-20 tracking-wide'>
       <h1 className='text-center text-3xl sm:text-5xl lg:text-6xl my-8
       lg:my-20'>What People are saying</h1>
         <div className='flex flex-wrap justify-center'>
            {testimonials.map((testimonial, index)=>(
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className="rounded-md p-6 text-md border border-neutral-800 font-thin">
                           <p>{testimonial.text}</p>
                           <div className='flex mt-8 items-center'>
                               <img className='h-12 w-12 rounded-full mr-6 border border-neutral-300' src={testimonial.image} alt="" />
                                <div>
                                     <h6>{testimonial.user}</h6>
                                     <span className='text-sm font-normal italic text-neutral-500'>{testimonial.company}</span>
                                </div>
                           </div>
                           
                    </div>
                </div>
            ))}
         </div>
      
    </div>
  )
}

export default Testimonials
