import React from 'react'
import Navbar from '../Components/Navbar'
import logo from "../../assets/logo.png"
import Image from 'next/image'

function page() {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <p>About Us</p>
          <p>Research and Development for Conservation in the Indian Subcontinent.</p>
          <p>As a dedicated research and development company, our focus lies in the realm of conservation across the Indian subcontinent. Our core services encompass data analysis, advanced modelling, and in-depth policy research. Our objective is to optimise carbon removal and avoidance strategies through the implementation of nature-based solutions.</p>
          <p>Our proficiency in handling intricate datasets and our prowess in predictive modelling play a crucial role in facilitating effective planning and implementation of conservation strategies. Additionally, our comprehensive policy research is designed to inform and assist policymakers at the forefront of the carbon market.</p>
          <p>We are committed to conducting thorough research and due diligence on Voluntary Carbon Market (VCM) projects. This forms the foundation of our support to partners, aiding them in making informed decisions backed by robust research.</p>
        </div>
        <Image src={logo} alt="" />
      </div>
      <div>
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