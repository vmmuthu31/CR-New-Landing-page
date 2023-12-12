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
      <p className='absolute md:top-52 top-[109px] text-[12px] right-14 text-center md:right-48 md:font-bold md:text-5xl'> REDD+ Models <br/> Aligned with <br/> Global <br/> Standards</p>
      </div>     
      <div className='flex md:flex-row flex-col-reverse justify-between my-4 md:my-8'>
        <div className='text-[#FFF]'>
          <p className='md:text-6xl text-3xl font-normal mt-5 md:mt-0 mx-10 md:mx-20'>REDD+ Models <br/> Aligned with Global Standards</p>
          <p className='md:text-3xl text-lg font-light mt-5 md:mt-10 mx-10 md:mx-20 mr-32'>Adopt<span className=' font-bold'> Nature-based <br/>
Solutions </span>with Speed, Scale 
& Integrity</p>
<p className='mx-10 md:mx-20 mt-5 md:mt-10'>Our web-based platform, Chloris, pioneers a new era in forest carbon intelligence. We harness the power of space to provide direct estimates of carbon stock and change. From massive deforestation to the subtle nuances of growth and regrowth, Chloris interprets the language of our planet. No site is too vast or too small — Chloris paints a comprehensive picture for effective climate and nature action. Our customers leverage Chloris insights and analytics to navigate the complex landscape of conservation</p>
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
              <div><p className='text-white text-xl'>Global Spaceborne LiDAR 
Measurements</p>
              <p className='text-white mt-2 font-thin text-sm'> Employing advanced LiDAR technology from space allows us to create high-resolution 3D maps of forests. This precise data enables accurate assessments of carbon density and structural changes</p></div>
          </div>
          <div className='flex space-x-3 '>
              <Image className='h-16 w-auto' src={tech2} alt="" />
              <div><p className='text-white text-xl'>Cutting-edge Sensor-Fusion 
Technology</p>
              <p className='text-white mt-2 font-thin text-sm'>Our innovative sensor-fusion technology seamlessly integrates data from various sources, providing a holistic view of forest ecosystems. By combining diverse datasets, we enhance the accuracy and reliability of our analyses</p></div>
          </div>
        </div>
        <div className='flex md:mx-40 mx-5 md:mt-20 justify-between flex-col md:flex-row md:space-x-10'>
          <div className='flex my-10  md:my-0  space-x-3'>
              <Image className='h-16 w-auto' src={tech3} alt="" />
              <div><p className='text-white text-xl'>Proprietary ML & AI</p>
              <p className='text-white mt-2 font-thin text-sm'> Chloris leverages proprietary Machine Learning (ML) and Artificial Intelligence (AI) algorithms to process vast amounts of data swiftly. This enables us to identify patterns, trends, and anomalies crucial for understanding and predicting forest carbon dynamics</p></div>
          </div>
          <div className='flex space-x-3 '>
              <Image className='h-16 w-auto' src={tech4} alt="" />
              <div><p className='text-white text-xl'>Robust Predictions</p>
              <p className='text-white mt-2 font-thin text-sm'>Our platform goes beyond mere data analysis; it generates robust predictions for future carbon trends. By assimilating historical data and real-time inputs, Chloris equips users with actionable insights to proactively address climate and conservation challenges.</p></div>
          </div>
        </div>
        <div className='border-white mt-10 md:mt-20 border-t'></div>
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
        </div>
      </div>
    </main>
  )
}
