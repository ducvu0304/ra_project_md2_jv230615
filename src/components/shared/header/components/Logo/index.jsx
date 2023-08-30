import React from 'react'
import logo from "@images/logo.png";

export default function Logo() {
  return (
    <div className='flex items-center'>
        <img 
            src={logo} 
            alt="logo"
            className='w-[80px]' 
        />
        <p className='ml-4 text-3xl'>Luxe</p>
    </div>
  )
}
