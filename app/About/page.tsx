import React from 'react'
import Navbar from '../Components/Navbar'
import logo from "../../assets/logo-1.png"
import Image from 'next/image'
import imgdata from "../../assets/image.png"
import linkedin from "../../assets/linkedin.png"
import twitter from "../../assets/twitter.png"
import dribble from "../../assets/dribble.png"


function page() {
  return (
    <div>
      <Navbar />
      <div className='flex md:justify-between md:flex-row flex-col-reverse md:space-x-10 md:py-20 px-10 py-5 md:px-20'>
        <div className=' md:w-[890px]'>
          <p className='md:text-4xl text-xl font-bold'>About Us</p>
          <p className='my-5'>Research and Development for Conservation in the Indian Subcontinent.</p>
          <p className='my-5'>As a dedicated research and development company, our focus lies in the realm of conservation across the Indian subcontinent. Our core services encompass data analysis, advanced modelling, and in-depth policy research. Our objective is to optimise carbon removal and avoidance strategies through the implementation of nature-based solutions.</p>
          <p className='my-5'>Our proficiency in handling intricate datasets and our prowess in predictive modelling play a crucial role in facilitating effective planning and implementation of conservation strategies. Additionally, our comprehensive policy research is designed to inform and assist policymakers at the forefront of the carbon market.</p>
          <p>We are committed to conducting thorough research and due diligence on Voluntary Carbon Market (VCM) projects. This forms the foundation of our support to partners, aiding them in making informed decisions backed by robust research.</p>
        </div>
        <Image className='md:w-[360px] hidden md:block md:h-[380px]'  src={logo} alt="" />
      </div>
      <div className=' md:py-20 md:mx-10 mx-10 py-5'> 
        <p className='md:text-4xl text-xl md:mx-20  font-bold'>Our Team</p>
        <div className='flex md:flex-row  items-start  space-x-0 md:space-x-5 flex-col justify-between space-y-8 md:space-y-0 my-10 md:mx-10'>
          <div className='flex flex-col  space-y-1 text-center item-center justify-center'>
            <div className='flex  justify-center'>
            <Image src={imgdata} alt="" />
            </div>
            <p className=' md:text-xl  font-bold' >Sujit Ghosh, Ph.D.</p>
            <p>CEO</p>
            <p className='md:w-[400px]'> REDD+ Specialist, experienced in Carbon Market and remote sensing applications in forestry with a Ph.D from IIT KGP</p>           
            <div className='flex justify-center space-x-2 pt-1'>
              <Image src={linkedin} alt="" />
              <Image src={twitter} alt="" />
              <Image src={dribble} alt="" />
            </div>
        </div>
        <div className='flex space-y-1 flex-col text-center item-center justify-center'>
        <div className='flex  justify-center'>
            <Image src={imgdata} alt="" />
            </div>
            <p className=' md:text-xl  font-bold' >Durga Prasad</p>
            <p>Lead Program Manager</p>
            <p className='md:w-[400px]'> Expert in carbon markets, with skills in ratings, remote sensing, team leadership, and stakeholder engagement.</p>      
            <div className='flex justify-center space-x-2 pt-1'>
              <Image src={linkedin} alt="" />
              <Image src={twitter} alt="" />
              <Image src={dribble} alt="" />
            </div>     
        </div>
        <div className='flex space-y-1 flex-col text-center item-center  justify-center'>
        <div className='flex  justify-center'>
            <Image src={imgdata} alt="" />
            </div>
            <p className=' md:text-xl  font-bold' >Pankaj kumar, Ph.D., IIT Kgp</p>
            <p>Atmospheric modelling expert</p>
            <p className='md:w-[400px]'> <span className=' font-bold'> Experience:</span> Expert in modelling the impact of climate mitigation activities through the use of atmospheric models and machine learning.
            <br/>
            <span className='my-2 font-bold'>Skills:</span> Ml, data analysis, modelling.
            </p>           
            <div className='flex justify-center space-x-2 pt-1'>
              <Image src={linkedin} alt="" />
              <Image src={twitter} alt="" />
              <Image src={dribble} alt="" />
            </div>
        </div>
        
      </div>
  
      <div className='flex md:flex-row items-start space-x-0 md:space-x-5 flex-col justify-center space-y-8 md:space-y-0 my-10 md:mx-10'>
       
        <div className='flex space-y-1 flex-col text-center item-center justify-center'>
        <div className='flex  justify-center'>
            <Image src={imgdata} alt="" />
            </div>
            <p className=' md:text-xl  font-bold' >M. Vairamuthu</p>
            <p>Full Stack Developer</p>
            <p className='md:w-[400px]'> <span className=' font-bold'> Experience:</span>  Passionate Full Stack Developer and Blockchain Enthusiast with a strong foundation in Computer Science. He thrive on solving complex challenges and creating innovative solutions that leverage cutting-edge technologies. 
            <br/>
            <span className=' my-2 font-bold'>Skills:</span> 
             Proficient with frameworks like Django, NextJS, and Flask, MySQL, SQLite, MongoDB.

            </p>           
            <div className='flex justify-center space-x-2 pt-1'>
              <Image src={linkedin} alt="" />
              <Image src={twitter} alt="" />
              <Image src={dribble} alt="" />
            </div>
        </div>
       
        
      </div>
      </div>
    </div>
  )
}

export default page