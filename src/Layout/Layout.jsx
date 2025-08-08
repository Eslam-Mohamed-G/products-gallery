import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main className='bg-white dark:bg-black min-h-screen transition-colors ease-in-out duration-1000'>
      <NavBar />
      <div className='content-center h-full pt-20'>
        <Outlet />
      </div>
    </main>
  )
}
