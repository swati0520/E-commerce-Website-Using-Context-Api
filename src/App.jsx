import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GithubOutlined } from '@ant-design/icons';
import GitHubIcon from '@mui/icons-material/GitHub';

import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbaar from './components/Navbaar'
import Cart from './pages/Cart'
import { Android } from '@mui/icons-material'
import Login from './pages/Login'
import Signup from './pages/Signup'
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from './context/UserContext'
import Contact from './pages/Contact'






function App() {



  let ctx = useContext(UserContext);
  // console.log(ctx);
  
let loginValue = ctx.user.login
console.log(loginValue)

  return (
    <>
    <BrowserRouter>
    <Navbaar  />
  <div className='mb-[75px]'>

  </div>
    <Routes>
      <Route path = '/' element={loginValue === true  ? <Home /> : <Navigate to= '/login'/>} />
      <Route path = '/about' element={loginValue === true ? <About />  : <Navigate to= '/login' />} />
      <Route path = '/cart' element={loginValue === true ? <Cart /> : <Navigate to= '/login' />} />
      <Route path = '/login' element={loginValue === false ? <Login/> : <Navigate to={'/'} />} />
      <Route path = '/register' element={<Signup />} />
      <Route path='/contact' element = {loginValue === true ? <Contact /> : <Navigate to= '/login' />} />

      
    


      
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  
    </>
  )
}

export default App
