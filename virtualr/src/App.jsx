import './index.css';
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
function App () {
  return (
     <>
         <Navbar/>
         <div className='max-w-7xl mx-auto pt-20 px-6'>
             <Hero/>
             <Features/>
          </div> 

     </>
  )
}

export default App;