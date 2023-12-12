import React from 'react'
import logo from "../../assets/logo.png"
import Image from 'next/image'

function Navbar() {
  return (
    <div className="bg-white">
        <div className='flex'>
            <Image src={logo} alt="" />
        </div>
    </div>
  )
}

export default Navbar