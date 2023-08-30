import React from 'react'
import avatar from "@icons/user.png";
import cart from "@icons/shopping-cart.png";

export default function Account() {
  return (
    <div className='flex items-center'>
      <div className='flex justify-center items-center w-24 h-[80px] mx-10 border-l-[1px] border-r-[1px]'>
          <div className='relative w-10 h-1/2'> 
            <p className="absolute top-[-2px] right-[-6px]  bg-red-600 text-white text-center rounded-full text-xs w-5 h-5">
              0
            </p>
            <img 
              src={cart} alt="cart-icon"
              className='w-full h-full' 
            />
          </div>
      </div> 

      <div className='flex'>
        <img 
          src={avatar} 
          alt="avatar" 
          className='w-10'
        />  
        <div className='flex items-center'>
          {/* <p className='ml-4'>Login</p> */}
          <p className='ml-3'>Đức, <span className='hover:underline cursor-pointer'>Logout</span></p>
        </div>
      </div>
    
      
      

    </div>
  )
}
