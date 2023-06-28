import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Course from './Components/Course'
import { AuthProvider } from './Auths/auth'
import Resources from './Components/Resources'
import RequireAuth from './Auths/RequireAuth'
import Footer from './Components/Footer'

const App = () => {
  return (
    <AuthProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/signup' element={<Signup/>}>Signup</Route>
      <Route path='/signin' element={<Signin/>}>Signin</Route>
      <Route path ='/course' element={<RequireAuth><Course/></RequireAuth> }>Course</Route>
      <Route path='/resources' element={<Resources/>}>Resources</Route>
    </Routes>
    <Footer/>
    </AuthProvider>
  )
}

export default App