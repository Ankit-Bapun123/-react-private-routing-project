import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
  return (
    <div className='w-full h-[100vh] bg-slate-300'>
       <Navbar/>
       <Outlet/>
       <ToastContainer/>
    </div>
  )
}
export default Layout
