import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboared = () => {
  return (
    <div className='w-full h-full flex'>
      <div className='w-[20%] h-full bg-violet-400'>
        <ul className='w-full h-full  font-bold'>
          <li className='w-full text-center p-3 hover:bg-slate-400 cursor-pointer'><NavLink to="/dashboared/allusers">All Users</NavLink></li>
          <li className='w-full text-center p-3 hover:bg-slate-400 cursor-pointer'><NavLink to="/dashboared/allproducts">All Product</NavLink></li>
          <li className='w-full text-center p-3 hover:bg-slate-400 cursor-pointer'><NavLink to="/dashboared/cart">Cart</NavLink></li>
          <li className='w-full text-center p-3 hover:bg-slate-400 cursor-pointer'><NavLink to="/dashboared/profile">Profile</NavLink></li>
          <li className='w-full text-center p-3 hover:bg-slate-400 cursor-pointer'><NavLink to="/dashboared/settings">Settings</NavLink></li>
        </ul>
      </div>
      <div className='w-[80%] h-full bg-amber-400'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboared
