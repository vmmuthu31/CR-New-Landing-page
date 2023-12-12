import React from 'react'
import logo from "../../assets/logo.png"
import Image from 'next/image'

function Navbar() {
  return (
        <div className="bg-[#F3F8F4]">
        <div className='flex items-center justify-between py-1 px-10'>
            <Image src={logo} alt="" />
            <div>
            <button className='text-[#000821] border-2 px-7 py-2  border-[#000821]'>LOGIN</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar