import React from 'react'

const Navigation = () => {
  return (
    <div className="flex items-center justify-between flex-grow md:pl-12 py-3">
        <div className="flex items-center space-x-6 capitalize">
            <a href="index.html" className="text-gray-200 hover:text-white transition">Home</a>
            <a href="pages/shop.html" className="text-gray-200 hover:text-white transition">Shop</a>
            <a href="#" className="text-gray-200 hover:text-white transition">About us</a>
            <a href="#" className="text-gray-200 hover:text-white transition">Contact us</a>
        </div>
        <a href="pages/login.html" className="text-gray-200 hover:text-white transition">Login</a>
    </div>
  )
}
export default Navigation