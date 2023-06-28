import {useState} from 'react'
import { useAuth } from '../Auths/auth'
import { useNavigate,useLocation } from 'react-router'
const Signin = () => {
  const[user,setUser] = useState('')
  const auth = useAuth()
  const navigate=useNavigate()
  const location = useLocation()

  const redirect = location.state?.path || '/'
  const handleLogin = ()=>{
    auth.login(user)
    navigate(redirect,{replace: true}) 
  } 
  return (
    <div className='w-full h-screen  flex justify-center  items-center p-4'>
        <form action="" className='bg-orange-500 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>
          UserName:<input type="text" className='bg-[#ccd6f6]shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(e)=>setUser(e.target.value)}/>
          </label><br />
         <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>
             Email:<input type="text"  className=' bg-[#ccd6f6]shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(e)=>setUser(e.target.value)}/>
            </label><br/>
          <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>
              Password:<input type="text" className='bg-[#ccd6f6]shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(e)=>setUser(e.target.value)}/>
            </label><br />
       <button onClick={handleLogin} className='text-black border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-2 my-5 mx-auto flex items-center'>Sign In</button>
        </form>
    </div>
  )
}

export default Signin