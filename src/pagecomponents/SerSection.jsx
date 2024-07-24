'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";


const SerSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 1) {
      newIndex = 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="mt-[120px]  w-full">
      <h1 className="text-[64px] font-bold text-black mt-4 leading-[80px] mx-[120px]">
        Transforming Digital
        <br /> Visions into Reality
      </h1>
      <div className="  flex  gap-11 ml-[1100px] mt-[-20px]">
        <button
          className="h-12  text-black hover:text-white hover:bg-black  text-[30px] px-2 w-12  z-40  rounded-full bg-white border border-black duration-300 "
          onClick={() => {
            updateIndex(0);
          }}
        >
          <BsArrowLeft />
        </button>

        <button
           className="h-12  text-black hover:text-white hover:bg-black  text-[30px] px-2 w-12  z-40  rounded-full bg-white border border-black duration-300 "
          onClick={() => {
            updateIndex(1);
          }}
        >
          <BsArrowRight />
        </button>
      </div>
      <div className="flex gap-2 items-center mt-8 mx-[120px]">
        <div className=" w-[122px] bg-green h-[1px]"></div>
        <p className="text-[24px] font-semibold text-black">Services</p>
      </div>
      <div className="  overflow-hidden  ml-[120px]">
        <div className="whitespace-nowrap  duration-1000"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}>
        <div className="inline-flex  gap-6  ">
          <div className="w-[370px] h-[411px] rounded-[30px] bg-green1 mt-11">
            <Image
              src="/images/Frame 2.png"
              width={138}
              height={138}
              alt="frame2"
              className="mt-5 ml-6"
            />
            <h1 className="text-[34px] font-semibold text-black ml-6">
              Web Development
            </h1>
            <p className="text-[14px] text-black mt-6 ml-6">
              From web applications to complex systems, our<br/> development team
              creates robust, scalable, and <br/>tailor-made solutions that resonate
              with your <br/>business objectives.
            </p>
            <div className="flex items-center  gap-2 mt-11 ml-6">
            <p className="text-[16px] font-medium text-black">Learn More</p>
            <Link href="#/" className=" text-[16px]"><GoArrowRight /></Link>
            </div>
          </div>
          
          <div className="w-[370px] h-[411px] rounded-[30px] bg-blue1 mt-11">
            <Image
              src="/images/Frame3.png"
              width={98}
              height={98}
              alt="frame2"
              className=" mt-11 ml-6"
            />
            <h1 className="text-[34px] font-semibold text-black ml-6 mt-4">
            UI/UX Design
            </h1>
            <p className="text-[14px] text-black mt-6 ml-6">
              From web applications to complex systems, our<br/> development team
              creates robust, scalable, and <br/>tailor-made solutions that resonate
              with your <br/>business objectives.
            </p>
            <div className="flex items-center  gap-2 mt-11 ml-6">
            <p className="text-[16px] font-medium text-black">Learn More</p>
            <Link href="#/" className=" text-[16px]"><GoArrowRight /></Link>
            </div>
          </div>
          <div className="w-[370px] h-[411px] rounded-[30px] bg-green2 mt-11">
            <Image
              src="/images/Frame 24.png"
              width={128}
              height={128}
              alt="frame2"
              className=" mt-4 ml-4"
            />
            <h1 className="text-[34px] font-semibold text-black ml-6 mt-4">
            Brand Identity
            </h1>
            <p className="text-[14px] text-black mt-6 ml-6">
              From web applications to complex systems, our<br/> development team
              creates robust, scalable, and <br/>tailor-made solutions that resonate
              with your <br/>business objectives.
            </p>
            <div className="flex items-center  gap-2 mt-11 ml-6">
            <p className="text-[16px] font-medium text-black">Learn More</p>
            <Link href="#/" className=" text-[16px]"><GoArrowRight /></Link>
            </div>
          </div>
          <div className="w-[370px] h-[411px] rounded-[30px] bg-purble mt-11">
            <Image
              src="/images/Frame 25.png"
              width={98}
              height={98}
              alt="frame2"
              className=" mt-4 ml-4"
            />
            <h1 className="text-[34px] font-semibold text-black ml-6 mt-4">
            Brand Identity
            </h1>
            <p className="text-[14px] text-black mt-6 ml-6">
              From web applications to complex systems, our<br/> development team
              creates robust, scalable, and <br/>tailor-made solutions that resonate
              with your <br/>business objectives.
            </p>
            <div className="flex items-center  gap-2 mt-11 ml-6">
            <p className="text-[16px] font-medium text-black">Learn More</p>
            <Link href="#/" className=" text-[16px]"><GoArrowRight /></Link>
            </div>
          </div>
          
        </div>
      </div>
      </div>
      <button className="w-[161px] h-[51px]  text-[16px] font-medium text-black border border-black bg-white rounded-[100px]  hover:bg-black hover:text-white flex items-center px-[40px] gap-2 mt-[55px] ml-[700px]" >See All <GoArrowRight /> </button>
    </div>
  );
};

export default SerSection;
