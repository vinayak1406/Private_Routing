import React from 'react'
import { useAuth } from '../Auths/auth'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import {useNavigate} from 'react-router-dom'
const Course = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const handleLogout = ()=>{
    auth.logout()
    navigate('/')
  }
  return( 
  <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    
 
  <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Courses</p>
          
      </div>

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <a href="https://www.youtube.com/watch?v=BsDoLVMnmZs">HTML video</a>
              <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                <a href="https://www.youtube.com/watch?v=Edsxf_NBFrw">CSS Video</a>
              <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
            <a href="https://www.youtube.com/watch?v=hKB-YGF14SY" className='text-white'>JavaScript Videos</a>
              <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                <a href="https://www.youtube.com/watch?v=EHTWMpD6S_0" className='text-white'>React Video</a>
              <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                <a href="https://www.youtube.com/watch?v=gwWKnnCMQ5c" className='text-white'>Git and Git Hub video</a>
              <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                <a href="https://www.youtube.com/watch?v=BLl32FvcdVM" className='text-white'>Node JS Video</a>
              <p className='my-4'>NODE JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                <a href="https://www.youtube.com/watch?v=oSIv-E60NiU" className='text-white'>Mongo DB Video</a>
              <p className='my-4'>MONGO DB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                <a href="https://www.youtube.com/watch?v=_9mTJ84uL1Q" className='text-white'>Tailwind Video</a>
              <p className='my-4'>TAILWIND</p>
          </div>
      </div>
  <div><button type="" onClick={handleLogout}>Logout</button></div>
  </div>
</div>
)
}

export default Course