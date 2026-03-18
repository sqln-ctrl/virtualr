import React from 'react'
import { platformLinks } from '../constants'
import { communityLinks } from '../constants'
import { resourcesLinks } from '../constants'

const Footer = () => {
  return (
    <div className='mt-20 border-t border-t-neutral-500 py-10 flex sm:flex-col md:flex-wrap bg-neutral'>
          <div className='w-full flex justify-between mt-10'>
                <div className='ml-40 '>
                    <h6 className='text-lg font-semibold'>Platform</h6>
                    <ul className='mt-5'>
                        {platformLinks.map((link,index)=>(
                            <li className='m-1'>
                                <a href="#"  className="text-sm text-neutral-500">{link.text}</a>
                            </li>
                        ))}
                    </ul>
               </div>
                <div className="mx-50">
                    <h6 className='text-lg font-semibold'>Resources</h6>
                    <ul className='mt-5'>
                        {resourcesLinks.map((link,index)=>(
                            <li className=''>
                                <a href="#" className="text-sm text-neutral-500">{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mr-40'>
                    <h6 className='text-lg font-semibold'>Community</h6>
                    <ul className='mt-5'>
                        {communityLinks.map((link,index)=>(
                            <li className=''>
                                <a href="#" className="text-sm text-neutral-500">{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
          </div>
    </div>
  )
}

export default Footer
                        

