import NavBar from "@/pagecomponents/NavBar";
import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="flex  items-center justify-center  gap-4 mt-[90px] w-[1170px]  mx-auto">
        <div className="w-[50px] h-[2px] bg-green"></div>
        <h1 className="text-black font-semibold text-[24px] text-center">
          Our Blog
        </h1>
        <div className="w-[50px] h-[2px] bg-green"></div>
      </div>
      <Image
        src="/images/Group.png"
        width={25}
        height={24}
        alt="star"
        className="ml-[330px]"
      />
      <h1 className="text-[88px] font-bold text-black text-center leading-[110px]">
        Navigating the <br /> Digital Sphere
      </h1>
      <Image
        src="/images/Highlight_10.png"
        width={87}
        height={52}
        alt="highlight"
        className="ml-[1200px] mt-[-90px]"
      />
      <Image
        src="/images/circle-1.png"
        width={345}
        height={80}
        alt="circle"
        className="ml-[420px] mt-[-60px]"
      />
      <p className="text-[20px] text-center text-neutral-700 mt-[70px] tracking-wide ">
        Welcome to ElevateSphere's blog, where we dive into the ever-<br/>evolving
        world of digital innovation.
      </p>

      <Image
        src="/images/Group1.png"
        width={34}
        height={37}
        alt="circle"
        className="ml-[300px] mt-[-70px]"
      />
      <Image
        src="/images/vector.png"
        width={49}
        height={27}
        alt="circle"
        className="ml-[1050px] mt-[38px]"
      />
      <div className="flex justify-center items-center">
     <input placeholder="Search for articles.." className="w-[504px] h-[71px] bg-acete  border-acete rounded-[100px]  px-[30px] mt-[30px]">
     </input>
     <button className="w-[121px] h-[51px]  text-[16px] font-medium text-black border border-black bg-white rounded-[100px] hover:bg-black hover:text-white flex items-center  mt-[50px] px-6 gap-2 ml-[-130px] my-3">
       Search{" "}
      </button>
     </div>
     
     
    </div>
  );
};

export default page;
