import React from 'react'
import express from '..//files/express-handbook.pdf'
import grid from '..//files/simple-grid-layouts.pdf'
import sql from '..//files/sql-handbook.pdf'
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Mongo from '../assets/mongo.png';
import { useAuth } from '../Auths/auth';
import { useNavigate } from 'react-router';


const Resources = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const handleLogout = ()=>{
    auth.logout()
    navigate('/')
  }
  return (
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
          <p className='text-4xl my-5 font-bold inline border-b-4 border-pink-600 '>Resources</p>     
      </div>

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
              <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
              <a href={express}>Express</a>
              <h1 className='my-4'>Express JavaScript for backend API's</h1>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
              <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
              <a href={grid}>CSS for beginners</a>
              <h1 className='my-4'>CSS related cheatsheet</h1>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
              <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
              <a href={sql}>SQL for beginners</a>
              <h1 className='my-4'>SQL basic comands</h1>
          </div>
          
         
      </div><div><button type="" onClick={handleLogout} className='border-2 border-black p-1 rounded-md hover:text-orange-700 hover:bg-purple-800'>Logout</button></div>
  
  </div>
  )
}

export default Resources