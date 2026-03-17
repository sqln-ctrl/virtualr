import React from 'react'
import logo from "./../assets/logo.png";
import {navItems} from "../constants/index.jsx";
import {Menu, X} from "lucide-react";
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <nav className="flex items-center justify-between z-50 py-3 sticky top-0 backdrop-blur-lg border-b border-gray-700/80">
      <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex justify-between items-center'>
          
          <div className='flex items-center shrink'>
            <img src={logo} alt="logo" className='h-10 w-10' />
            <span className='text-xl tracking-tight'>VirtualR</span>
          </div>

          <ul className='hidden lg:flex ml-14 space-x-12'>
            {navItems.map((item, index)=>(
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className='hidden lg:flex justify-center space-x-6 items-center'>
            <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white">
              Create an Account
            </a>
          </div>
          <div className='lg:hidden md:flex flex-col justify-end'>
                <button className="" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
          </div>

        </div>
        {isOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12
            flex flex-col items-center justify-center lg:hidden">
                <ul>
                    {navItems.map((item, index)=>(
                    <li key={index} className="py-4">
                        <a href={item.href} onClick={toggleMenu}>{item.label}</a>
                    </li>
                    ))}
                </ul>
                <div className='flex space-x-6'>
                    <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                     <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white">
                             Create an Account
                     </a>
                </div>
            </div>
            
            )}
      </div>
    </nav>
  )
}

export default Navbar