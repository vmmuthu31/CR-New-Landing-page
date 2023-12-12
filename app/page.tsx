import Image from 'next/image'
import Navbar from './Components/Navbar'
import hero from "../assets/hero.png";
import model from "../assets/model.png";

export default function Home() {
  return (
    <main className=" bg-[#000821]  min-h-screen  pb-10">
      <Navbar />
      <div>
      <Image className='w-full  h-auto' src={hero} alt="" />
      <p className='absolute md:top-52 top-[109px] text-[12px] right-14 text-center md:right-48 md:font-bold md:text-5xl'> REDD+ Models <br/> Aligned with <br/> Global <br/> Standards</p>
      </div>     
      <div className='flex justify-between my-8'>
        <div className='text-[#FFF]'>
          <p className='text-6xl font-normal mx-20'>REDD+ Models <br/> Aligned with Global Standards</p>
          <p className='text-3xl font-light mt-10 mx-20 mr-32'>Adopt<span className=' font-bold'> Nature-based <br/>
Solutions </span>with Speed, Scale 
& Integrity</p>
<p className='mx-20 mt-10'>Our web-based platform, Chloris, pioneers a new era in forest carbon intelligence. We harness the power of space to provide direct estimates of carbon stock and change. From massive deforestation to the subtle nuances of growth and regrowth, Chloris interprets the language of our planet. No site is too vast or too small — Chloris paints a comprehensive picture for effective climate and nature action. Our customers leverage Chloris insights and analytics to navigate the complex landscape of conservation</p>
<div className='mx-20 flex justify-center mt-10'>
        <button className='border border-white px-6 py-3'> CONTACT US</button>
        </div>
        </div>
        <Image src={model} alt="" className='mt-28' />
      </div>
    </main>
  )
}
