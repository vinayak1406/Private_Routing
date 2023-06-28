import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Typewriter from 'typewriter-effect'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Check the Courses</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          <Typewriter
            options={{ autoStart: true, loop: true, delay: 100, strings: ['React JS', 'DSA', 'Java', 'Python'] }}
          />
        </h1>

        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Get Access to all the resources by signing in
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Courses sample
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
          
          
        <div className='w-full  grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
              <p className='my-4 text-white text-2xl'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
              <p className='my-4 text-white text-2xl'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
              <p className='my-4 text-white text-2xl'>JAVASCRIPT</p>
          </div>
          
          
</div>

      </div>


    </div>
  )
}

export default Home