import React from 'react'
import Image from 'next/image'
import { GoArrowRight } from "react-icons/go";

const Contact = () => {
  return (
    <div>
    <div className=' mt-[200px] w-[1170px] h-[518px] bg-green3 mx-auto flex '>
        <Image src="/images/Frame 32.png" width={446} height={518} alt="contact"/>
        <div>
        <div className="flex gap-2 items-center mt-11 mx-[70px]">
        <div className=" w-[122px] bg-green h-[1px]"></div>
        <p className="text-[24px] font-semibold text-black">Contact</p>
      </div>
      <h1 className='text-[72px] text-black font-bold leading-[80px] ml-[60px] mt-8'>Ready to grow <br/>your startup? Get<br/> in touch today!</h1>
        </div>
       
    </div>
    <button className="w-[190px] h-[51px]  text-[16px] font-medium text-green border border-green bg-white rounded-[100px] hover:bg-green hover:text-white flex items-center px-6 gap-2 ml-[680px] mt-[-100px]" >Get in Touch <GoArrowRight /> </button>
    </div>
  )
}

export default Contact