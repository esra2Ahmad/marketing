import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="mt-[150px] mx-auto w-[1170px]">
      <div className="flex gap-2 items-center">
        <div className=" w-[122px] bg-green h-[1px]"></div>
        <p className="text-[24px] font-semibold text-black">Blog</p>
      </div>
      <div className="flex gap-[350px] items-start mt-4">
        <h1 className="text-[64px] font-bold text-black">
          Navigating the Digital
          <br /> Sphere
        </h1>
        <button className="w-[151px] h-[51px]  text-[16px] font-medium text-black border border-black bg-white rounded-[100px]  hover:bg-black hover:text-white  px-[40px] ">
          See All{" "}
        </button>
      </div>
      <div className="flex gap-8 mt-20">
        <div className=" w-[420px] h-[553px] flex flex-col gap-6">
          <Image
            src="/images/Frame 1000010014.png"
            width={410}
            height={320}
            alt="blog"
          />
          <div className=" flex gap-4">
            <button className="w-[160px] h-[51px]  text-[20px] font-medium text-center  rounded-[100px] bg-green text-white">
              Social Media
            </button>
            <button className="w-[160px] h-[51px]  text-[20px] text-center font-medium  bg-white rounded-[100px] text-neutral-600">
              Sep 8, 2023
            </button>
          </div>
          <h1 className="font-semibold text-black text-[24px] tracking-wide">
            Harmonizing Your Digital
            <br /> Presence
          </h1>
          <p className="text-[16px] text-neutral-700 tracking-wide">
            In the ever-evolving symphony of social media
            <br />, orchestrating a compelling and harmonious
            <br /> digital presence is key to capturing your
            <br />
            audience's attention...
            <span className="text-black">Learn More</span>
          </p>
        </div>
        <div className=" w-[420px] h-[553px] flex flex-col gap-6">
          <Image
            src="/images/Frame 1000010015.png"
            width={410}
            height={320}
            alt="blog"
          />
          <div className=" flex gap-4">
            <button className="w-[160px] h-[51px]  text-[20px] font-medium text-center rounded-[100px] bg-green text-white">
              Growth
            </button>
            <button className="w-[160px] h-[51px]  text-[20px] text-center font-medium  bg-white rounded-[100px] text-neutral-600">
              Sep 8, 2023
            </button>
          </div>
          <h1 className="font-semibold text-black text-[24px] tracking-wide">
            Strategies for Scaling Your
            <br /> Online Presence
          </h1>
          <p className="text-[16px] text-neutral-700 tracking-wide">
            In today's competitive digital landscape, <br />
            achieving growth is not just a goal—it's a <br />
            necessity..
            <span className="text-black">Learn More</span>
          </p>
        </div>
        <div className=" w-[420px] h-[553px] flex flex-col gap-6">
          <Image
            src="/images/Frame 1000010016.png"
            width={410}
            height={320}
            alt="blog"
          />
          <div className=" flex gap-4">
            <button className="w-[160px] h-[51px]  text-[20px] font-medium text-center  rounded-[100px] bg-green text-white">
              Marketing
            </button>
            <button className="w-[160px] h-[51px]  text-[20px] text-center font-medium  bg-white rounded-[100px] text-neutral-600">
              Sep 8, 2023
            </button>
          </div>
          <h1 className="font-semibold text-black text-[24px] tracking-wide">
            5 Trends Reshaping Marketing <br />
            Strategies
          </h1>
          <p className="text-[16px] text-neutral-700 tracking-wide">
            In the ever-evolving landscape of marketing,<br/> adaptation is the key
            to survival. As digital <br/> frontiers continue.
            <span className="text-black">Learn More</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
