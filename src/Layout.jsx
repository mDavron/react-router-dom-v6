import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import './Layout.css'


const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='content'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout