import Image from 'next/image'
import Navbar from './Components/Navbar'
import hero from "../assets/hero.png";
import model from "../assets/model.png";
import skew from "../assets/skew.png";

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
        <p className='md:text-6xl text-xl ml-10 md:ml-40 text-white'>Our <span className='font-bold'>Technology</span></p>
      </div>
    </main>
  )
}
