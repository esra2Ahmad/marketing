import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className=" ">
      <div className="flex max-w-[1440px] mx-[120px]  my-[40px]  justify-between items-center">
        <div className=" flex gap-1 ">
          <Image src="/images/LogoMark.png" width={21} height={28} alt="" />
          <Image src="/images/Logo Typo.png" width={117} height={23} alt="" />
        </div>
        <div className="flex justify-between items-center gap-11">
          <Link className="text-[16px]  text-neutral-800 font-medium hover:text-black hover:font-bold" href="/#">Home</Link>
          <Link className="text-[16px]  text-neutral-800 font-medium hover:text-black hover:font-bold" href="/about">About</Link>
          <Link className="text-[16px]  text-neutral-800 font-medium hover:text-black hover:font-bold" href="/about">Services</Link>
          <Link  className="text-[16px]  text-neutral-800 font-medium hover:text-black hover:font-bold"href="/about">Blog</Link>

        </div>
        <div>
          <button className="w-[161px] h-[51px] bg-green text-[16px] font-medium text-white rounded-[100px]">Get in Touch</button>
        </div>
      </div>
     
    </div>
  );
};

export default NavBar;
