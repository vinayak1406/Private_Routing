import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Auths/auth'

const Navbar = () => {
const auth = useAuth()  
  return (
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
     <div>
    <Link to='/'>Home</Link>
     </div>
      <ul className='hidden md:flex '>
        <li className='mx-3 hover:text-red-700'>
      <Link to='/course'>Course</Link>
        </li>
        {
          !auth.user &&(
            <li className='hover:text-red-700'>
              <Link to='/signin'>Sign-In</Link>
            </li>
          )}
           {
          auth.user && (
            <li className='hover:text-red-700'>
              <Link to='/resources'>Resources</Link>
            </li>
          )}
      </ul>
    </nav>
  )
}

export default Navbar