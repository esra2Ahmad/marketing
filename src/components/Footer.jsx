import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=' bg-black w-full h-full mt-[200px]'>
        <div className='flex gap-[100px] mx-[160px] '>
            <div>
              <Image src="/images/Logo.png" width={200} height={40} alt=""  className=' mt-[80px]'/>
              <p className='text-white text-[14px] tracking-wide mt-9'>ElevateSphere is your gateway to elevating your<br/> digital presence and reaching new heights.</p>
              <div className='flex gap-4 mt-9'>
              <FaFacebookF  className='text-white'/>
              <FaTwitter  className='text-white'/>
              <GrInstagram  className='text-white'/>

              </div>

            </div>
            <div className='flex flex-col gap-4 mt-[80px] '>
                <p className='text-[24px] text-white font-semibold'>Menu</p>
                <p className='text-16 text-gray-500'>Home</p>
                <p className='text-16 text-gray-500'>About</p>
                <p className='text-16 text-gray-500'>Services</p>
                <p className='text-16 text-gray-500'>Blog</p>
                <p className='text-16 text-gray-500'>Contact</p>
                
            </div>
            <div className='flex flex-col gap-4 mt-[80px] ml-[50px]'>
                <p className='text-[24px] text-white font-semibold'>Services</p>
                <p className='text-16 text-gray-500'>Web Development</p>
                <p className='text-16 text-gray-500'>Web Development</p>
                <p className='text-16 text-gray-500'>Brand Identity</p>
                <p className='text-16 text-gray-500'>Digital Marketing</p>
                
            </div>
            <div className='flex flex-col gap-4 mt-[80px] ml-[90px]'>
                <p className='text-[24px] text-white font-semibold'>Contact Us</p>
                <div className='flex gap-4 items-center'> <HiOutlineLocationMarker  className='text-gray-500 w-6 h-6'/><p className='text-16 text-gray-500'>Old Port<br/> Mouseio, Mykonos, Greece</p></div>
                <div className='flex gap-4'> <MdPhone  className='text-gray-500 w-6 h-6' /> <p className='text-16 text-gray-500'>+10 (239) 555-0108</p></div>
                <div className='flex gap-4'><MdOutlineMail  className='text-gray-500 w-6 h-6'/><p className='text-16 text-gray-500'>Brand Identity</p></div>
             
             
            </div>
        </div>
        <div className='w-[1300px] h-[1px] bg-gray-500 mt-[40px] ml-[100px] '></div> 
        <p className='text-center text-gray-500 mt-[40px] pb-[40px]'>@2023 SpineEdge ALL RIGHTS REVERSED</p>

    </div>
  )
}

export default Footer