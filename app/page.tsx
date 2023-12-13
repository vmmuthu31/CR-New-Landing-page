import Image from 'next/image'
import Navbar from './Components/Navbar'
import hero from "../assets/hero.png";
import model from "../assets/model.png";
import skew from "../assets/skew.png";
import tech1 from "../assets/tech1.png";
import tech2 from "../assets/tech2.png";
import tech3 from "../assets/tech3.png";
import tech4 from "../assets/tech4.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";

export default function Home() {
  return (
    <main className=" bg-[#000821]  min-h-screen  pb-10">
      <Navbar />
      <div>
      <Image className='w-full  h-auto' src={hero} alt="" />
      <p className="absolute md:top-60 top-[121px] text-[8.8px] right-[46.5px] text-center md:right-[185px] md:font-semibold md:text-[30px]"> Carbon Credit Origination <br/>  Models in Compliance with<br/> International Standards  </p>
      </div>     
      <div className='flex md:flex-row flex-col-reverse justify-between my-4 md:my-8'>
        <div className='text-[#FFF] mt-8'>
          <p className='md:text-6xl text-3xl font-normal mt-5 md:mt-0 mx-10 md:mx-20'>REDD+ Models <br/> Aligned with Global Standards</p>
          <p className='md:text-3xl text-lg font-light mt-5 md:mt-10 mx-10 md:mx-20 mr-32'>Rapid Modeling of Nature Based Solutions at Scale, Speed and Accuracy</p>
<p className='mx-10 md:mx-20 mt-5 md:mt-10'>Our digital platform, revolutionizes forest carbon analysis using satellite technology and AI/ML models. It deciphers Earth's subtle and extensive ecological changes, offering precise carbon data. This enables users to effectively navigate the complexities of environmental conservation.</p>
<div className='mx-10 md:mx-20 flex justify-center mt-5 md:mt-10'>
        <button className='border border-white px-6 py-3'> CONTACT US</button>
        </div>
        </div>
        <Image src={model} alt="" className='md:my-10 mt-5' />
      </div>
      <div className='border-white mt-10 md:mt-20 border-t'></div>
      <div>
        <p className='text-center md:text-5xl text-xl font-normal text-white mt-8 md:mt-16'>Use our REDD+ Models to transition to VM0048</p>
        <div className='md:ml-60 mt-5 ml-8'>
        <Image src={skew} alt="" />
        </div>
      </div>
      <div className='border-white mt-10 border-t'></div>
      <div className=' mt-10 md:mt-24'>
        <p className='md:text-6xl text-3xl ml-10 md:ml-40 text-white'>Our <span className='font-bold'>Technology</span></p>
        <div className='flex md:mx-40 mt-8 md:mt-20 mx-5 justify-between flex-col md:flex-row md:space-x-24'>
          <div className='flex my-5 md:my-0 space-x-3'>
              <Image className='h-16 w-auto' src={tech1} alt="" />
              <div><p className='text-white text-xl'>Global Satellite Data</p>
              <p className='text-white mt-2 font-thin text-sm'>Our approach incorporates worldwide satellite data, which is updated on an average every 15 days. This data is sourced from various providers and includes different types such as SAR and Lidar technologies, ensuring a comprehensive and integrated dataset.</p></div>
          </div>
          <div className='flex space-x-3 '>
              <Image className='h-16 w-auto' src={tech2} alt="" />
              <div><p className='text-white text-xl'>Fusion of Data, Research & Ground Observation</p>
              <p className='text-white mt-2 font-thin text-sm'>We combine data from sensors with on-the-ground observations and insights from research publications to create comprehensive and well-rounded models.</p></div>
          </div>
        </div>
        <div className='flex md:mx-40 mx-5 md:mt-20 justify-between flex-col md:flex-row md:space-x-10'>
          <div className='flex my-10  md:my-0  space-x-3'>
              <Image className='h-16 w-auto' src={tech3} alt="" />
              <div><p className='text-white text-xl'>Proprietary ML & AI</p>
              <p className='text-white mt-2 font-thin text-sm'> We utilize custom-developed AI and ML technologies to rapidly analyze large datasets. Our approach facilitates the detection of key patterns, shifts, and irregularities, essential for analyzing and forecasting the behavior of nature based solutions. </p></div>
          </div>
          <div className='flex space-x-3 '>
              <Image className='h-16 w-auto' src={tech4} alt="" />
              <div><p className='text-white text-xl'>Robust Predictions</p>
              <p className='text-white mt-2 font-thin text-sm'>We deliver accurate predictions of potential risks in specific areas, like the likelihood of deforestation within a conservation zone. This information empowers our users to make informed decisions.</p></div>
          </div>
        </div>
        {/* <div className='border-white mt-10 md:mt-20 border-t'></div>
        <div className='md:ml-40 mx-5 mt-10'>
          <p className='text-white font-light '>OUR PARTNERS</p>
          <div className='flex items-center  flex-wrap flex-grow md:space-x-5 mt-5'>
              <Image src={p1} alt="" />
              <Image src={p2} alt="" />
              <Image src={p3} alt="" />
              <Image src={p4} alt="" />
              <Image src={p5} alt="" />
              <Image src={p6} alt="" />
              <Image src={p7} alt="" />
              <Image src={p8} alt="" />
          </div>
          <div className='flex items-center  flex-wrap md:space-x-5 mt-5'>
              <Image src={p9} alt="" />
              <Image src={p10} alt="" />
              <Image src={p11} alt="" />
          </div>
        </div> */}
        <div className='border-white mt-10  border-t'></div>
        <div className='md:mx-20 space-x-4 mx-5 mt-10 flex justify-between text-white'>
          <div className=' flex flex-col-reverse'><p>  Copyright © 2023. All rights reserved.</p></div>
         
        </div>
      </div>
    </main>
  )
}
