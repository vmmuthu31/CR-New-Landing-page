import React from 'react'
import Navbar from '../Components/Navbar'
import logo from "../../assets/logo-1.png"
import Image from 'next/image'

function page() {
  return (
    <div>
      <Navbar />
      <div className='flex md:justify-between md:flex-row flex-col-reverse md:space-x-10 md:py-20 px-10 py-5 md:px-20'>
        <div className=' md:w-[890px]'>
          <p className='md:text-4xl  font-bold'>About Us</p>
          <p className='my-5'>Research and Development for Conservation in the Indian Subcontinent.</p>
          <p className='my-5'>As a dedicated research and development company, our focus lies in the realm of conservation across the Indian subcontinent. Our core services encompass data analysis, advanced modelling, and in-depth policy research. Our objective is to optimise carbon removal and avoidance strategies through the implementation of nature-based solutions.</p>
          <p className='my-5'>Our proficiency in handling intricate datasets and our prowess in predictive modelling play a crucial role in facilitating effective planning and implementation of conservation strategies. Additionally, our comprehensive policy research is designed to inform and assist policymakers at the forefront of the carbon market.</p>
          <p>We are committed to conducting thorough research and due diligence on Voluntary Carbon Market (VCM) projects. This forms the foundation of our support to partners, aiding them in making informed decisions backed by robust research.</p>
        </div>
        <Image className='md:w-[360px] hidden md:block md:h-[380px]'  src={logo} alt="" />
      </div>
      <div className=' md:py-20 md:px-20'> 
        <p>Our Team</p>
        <div>
          <div>
            <img src="" alt="" />
            <p>Sujit Ghosh, Ph.D.</p>
            <p>CEO</p>
            <p> REDD+ Specialist, experienced in Carbon Market and remote sensing applications in forestry with a Ph.D from IIT KGP</p>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page