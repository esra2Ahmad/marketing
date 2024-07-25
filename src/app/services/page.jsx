import NavBar from "@/pagecomponents/NavBar";
import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Contact from "@/pagecomponents/Contact";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="">
      <NavBar />
      <div className="flex  items-center justify-center  gap-4 mt-[90px] w-[1170px]  mx-auto">
        <div className="w-[50px] h-[2px] bg-green"></div>
        <h1 className="text-black font-semibold text-[24px] text-center">
          Our Services
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
        Our marketing
        <br /> services
      </h1>
      <Image
        src="/images/Highlight_10.png"
        width={87}
        height={52}
        alt="highlight"
        className="ml-[1200px] mt-[-90px]"
      />
      <Image
        src="/images/circle-11.png"
        width={345}
        height={80}
        alt="circle"
        className="ml-[580px] mt-[-50px]"
      />
      <p className="text-[20px] text-center text-neutral-700 mt-[70px] tracking-wide ">
        At ElevateSphere, we are not just another digital marketing agency; we
        are your <br />
        dedicated partner in transforming your digital vision into reality.
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
      <button className="w-[161px] h-[51px]  text-[16px] font-medium text-black border border-black bg-white rounded-[100px] hover:bg-black hover:text-white flex items-center ml-[700px] mt-[50px] px-6 gap-2">
        Contact us <GoArrowRight />{" "}
      </button>
      <div className="flex flex-col gap-4 w-[1170px] mx-auto mt-[150px]">
        <div className="flex gap-4">
          <div className="w-[570px] h-[620px] bg-Frame28">
            <Image
              src="/images/Frame a.png"
              width={170}
              height={170}
              className="mt-[40px] ml-[60px]"
            />
            <h1 className="mt-[30px] text-black text-[48px] font-bold  ml-[30px]">
              Web Development
            </h1>
            <p className="text-[20px] text-neutral-700 ml-[30px] mt-[30px]">
              From cutting-edge web development to bespoke
              <br /> app solutions, our development team crafts
              <br /> robust, scalable, and tailored digital solutions that{" "}
              <br /> resonate with your business objectives.
            </p>
            <div className="flex gap-2  items-center text-[24px] font-semibold text-black mt-[60px] ml-[30px]">
              <p>Learn More</p>
              <GoArrowRight />
            </div>
          </div>
          <div className="w-[570px] h-[620px] bg-Frame29">
            <Image
              src="/images/Frame b.png"
              width={170}
              height={170}
              className="mt-[40px] ml-[60px]"
            />
            <h1 className="mt-[30px] text-black text-[48px] font-bold  ml-[30px]">
              UI/UX Design
            </h1>
            <p className="text-[20px] text-neutral-700 ml-[30px] mt-[30px]">
              Elevate user experiences with designs that
              <br /> seamlessly blend aesthetic appeal and functional
              <br /> efficiency, fostering engagement and brand
              <br /> loyalty.
            </p>
            <div className="flex gap-2  items-center text-[24px] font-semibold text-black mt-[60px] ml-[30px]">
              <p>Learn More</p>
              <GoArrowRight />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[570px] h-[620px] bg-Frame30">
            <Image
              src="/images/Frame c.png"
              width={170}
              height={170}
              className="mt-[40px] ml-[60px]"
            />
            <h1 className="mt-[30px] text-black text-[48px] font-bold  ml-[30px]">
              Brand Identity
            </h1>
            <p className="text-[20px] text-neutral-700 ml-[30px] mt-[30px]">
              Crafting identities that stand out in a crowded <br /> digital
              space, our branding solutions speak <br /> volumes and leave a
              lasting impact on your audience, ensuring your
               brand is unforgettable.
            </p>
            <div className="flex gap-2  items-center text-[24px] font-semibold text-black mt-[60px] ml-[30px]">
              <p>Learn More</p>
              <GoArrowRight />
            </div>
          </div>
          <div className="w-[570px] h-[620px] bg-Frame31">
            <Image
              src="/images/Frame d.png"
              width={170}
              height={170}
              className="mt-[40px] ml-[60px]"
            />
            <h1 className="mt-[30px] text-black text-[48px] font-bold  ml-[30px]">
              Digital Marketing
            </h1>
            <p className="text-[20px] text-neutral-700 ml-[30px] mt-[30px]">
              Our marketing strategies are designed to drive<br/> engagement,
              leveraging the latest trends and <br/> insights to position your brand
              at the forefront of<br/> the digital landscape.
            </p>
            <div className="flex gap-2  items-center text-[24px] font-semibold text-black mt-[60px] ml-[30px]">
              <p>Learn More</p>
              <GoArrowRight />
            </div>
          </div>
        </div>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default page;
