import React from 'react'
import { pricingOptions } from '../constants';
import { CheckCircle2 } from 'lucide-react';
const Pricing = () => {
  return (
    <div>
        <h2 className='sm:text-3xl lg:text-5xl text-center mt-8 '>Pricing</h2>
        <div className='flex justify-center  py-7 sm:py-12 lg:py-20 flex-wrap'>
            {pricingOptions.map((option, index)=>(
                <div>
                   <div className='border border-neutral-500 p-10 mt-5 mx-2 rounded-xl'>
                        <h5 className='text-3xl ml-2 mt-8'>
                            {option.title}
                            {option.title === "Pro" && <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ml-2 text-sm'>( Most Popular )</span>}
                            </h5>
                        <p className='text-3xl ml-2 mt-3'>{option.price} <span className='text-sm text-neutral-500'>/Month</span></p>

                        <ul>
                            {option.features.map((feature, index)=>(
                                <li key={index} className='mt-8 flex items-center ml-2'>
                                      <CheckCircle2/>
                                      <span className='ml-2'>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className='inline-flex items-center justify-center text-center w-full h-10 p-5 mt-10 rounded-lg text-xl  border-orange-900 border hover:bg-orange-900 '>Subscribe</button>
                   </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing;

