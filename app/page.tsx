import Image from 'next/image'
import Navbar from './Components/Navbar'
import hero from "../assets/hero.png";

export default function Home() {
  return (
    <main className=" bg-[#000821]  min-h-screen  pb-10">
      <Navbar />
      <div>
      <Image className='w-full  h-auto' src={hero} alt="" />
      <p className='absolute md:top-52 top-[109px] text-[12px] right-14 text-center md:right-48 md:font-bold md:text-5xl'> REDD+ Models <br/> Aligned with <br/> Global <br/> Standards</p>
      </div>     
    </main>
  )
}
