import React from 'react'
import Image from 'next/image'
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className='flex'>
          <div className='relative top-[90px] ml-[120px]'>
            <div className='flex gap-2 items-center'>
                <div className=' w-[122px] bg-green h-[1px]'></div>
                <p className='text-[24px] font-semibold text-black'>Marketing Agency</p>
            </div>
            
            <div className='w-[900px]'>
                <h1 className='text-[80px] font-bold text-black mt-4 leading-[110px]'>Elevating Your<br/> Digital Presence</h1>
                <Image src="/images/Highlight_10.png" width={87} height={52} alt="highlight" className='relative left-[600px] top-[-250px]'/>
                <Image src="/images/circle-1.png" width={331} height={115} alt="circle" className='relative top-[-170px] left-[-40px]'/>
               
            </div> <p className=' text-[20px] text-neutral-700 w-[800px] mt-[-140px] leading-[30px]'>At ElevateSphere, we're on a mission to transform your digital journey.<br/> We're not just another marketing agency; we're your strategic partners<br/> in achieving digital success.</p>
            <div className='flex  gap-6 mt-11'>
            <button className="w-[161px] h-[51px]  text-[16px] font-medium text-black border border-black bg-white rounded-[100px] hover:bg-black hover:text-white flex items-center px-6 gap-2" >Contact us <GoArrowRight /> </button>
            <button  className="w-[161px] h-[51px]  text-[16px] font-medium text-black border border-black bg-white rounded-[100px] hover:bg-black hover:text-white">Our Services</button>

            </div>
          </div>
         <Image src="/images/minimalistic_poster41.png" className=" relative top-[-130px]  z-[-1]" width={400} height={900} alt="minimalistic"/>
    
    </div>
  )
}

export default Hero