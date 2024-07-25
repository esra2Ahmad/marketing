import NavBar from "@/pagecomponents/NavBar";
import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Contact from "@/pagecomponents/Contact";
import Footer from "@/components/Footer";

const about = () => {
  return (
    <div className="1170px] mx-auto">
      <NavBar />
      <div className="flex  items-center justify-center gap-4 mt-[90px]">
        <div className="w-[50px] h-[2px] bg-green"></div>
        <h1 className="text-black font-semibold text-[24px]">About The Team</h1>
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
        Transforming Digital
        <br /> Visions into Reality
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
        width={295}
        height={80}
        alt="circle"
        className="ml-[920px] mt-[-180px]"
      />
      <p className="text-[20px] text-center text-neutral-700 mt-[170px] tracking-wide ">
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
      <div className="flex mt-[90px] gap-11 mx-auto w-[1170px]">
        <div className="w-[300px] h-[230px] rounded-[30px] bg-blue1">
          <h1 className="text-center font-medium text-black text-[52px] mt-[70px]">
            {" "}
            85M+
          </h1>
          <p className="text-[20px] font-medium text-center  text-black">
            Revenue Generated
          </p>
        </div>
        <div className="w-[300px] h-[230px] rounded-[30px]  bg-green2">
          {" "}
          <h1 className="text-center font-medium text-black text-[52px] mt-[70px]">
            {" "}
            50+
          </h1>
          <p className="text-[20px] font-medium text-center  text-black">
            Team Members
          </p>
        </div>
        <div className="w-[300px] h-[230px] rounded-[30px] bg-red">
          {" "}
          <h1 className="text-center font-medium text-black text-[52px] mt-[70px]">
            {" "}
            500+
          </h1>
          <p className="text-[20px] font-medium text-center  text-black">
            Project Completed
          </p>
        </div>
        <div className="w-[300px] h-[230px] rounded-[30px] bg-green1">
          {" "}
          <h1 className="text-center font-medium text-black text-[52px] mt-[70px]">
            {" "}
            250+
          </h1>
          <p className="text-[20px] font-medium text-center  text-black">
            Clients Worldwide
          </p>
        </div>
      </div>
      <Image
        src="/images/Frame 1000010027.png"
        width={1170}
        height={700}
        className="mt-[100px] mx-auto -z-10 "
      />
      <div className=" w-[1170px] mx-auto">
        <div className="flex  gap-4 mt-[-500px] items-center">
          <div className="w-[50px] h-[2px] bg-green"></div>
          <h1 className="text-black font-semibold text-[24px]">Our Misson </h1>
        </div>
        <h1 className=" text-[64px] font-bold text-black leading-[90px] mt-2">
          Empowering Your
          <br /> Digital Success
        </h1>
        <p className="text-neutral-700 text-[20px] mt-4">
          At ElevateSphere, our mission is clear: to empower businesses to
          <br />
          thrive in the digital landscape. We are dedicated to providing
          <br />
          tailored, innovative solutions that propel our clients towards their
          <br />
          goals.
        </p>

        <button className=" w-[190px] h-[51px]  text-[16px] mt-[40px] font-medium text-green  border border-green bg-white rounded-[100px] hover:bg-green hover:text-white flex items-center px-6 gap-2 z-50">
          Get in Touch <GoArrowRight />{" "}
        </button>
        <Image
          src="/images/Rectangle 4.png"
          width={470}
          height={433}
          className="ml-[698px] mt-[-450px]"
        />
      </div>
      <div className="flex  items-center justify-center gap-4 mt-[120px]">
        <div className="w-[50px] h-[2px] bg-green"></div>
        <h1 className="text-black font-semibold text-[24px]">Our Vision</h1>
        <div className="w-[50px] h-[2px] bg-green"></div>
      </div>
      <h1 className="font-bold text-black text-[64px] text-center mt-8 leading-[70px]">
        Why Choose
        <br /> ElevateSphere?
      </h1>
      <p className="text-center text-[20px] text-neutral-700 mt-6">
        Empowering businesses to effortlessly transform ideas into
        <br /> successful digital ventures.
      </p>
      <div className="flex flex-col gap-8 mt-[60px] w-[1170px] mx-auto ">
        <div className="flex gap-8 mx-auto">
          <div className="w-[570px] h-[190px]  bg-purble rounded-[30px] flex gap-[30px]">
            <Image
              src="/images/girl.png"
              width={90}
              height={120}
              className="ml-[30px] py-[30px]"
            />
            <div className=" flex flex-col gap-3 mt-[30px]">
              <h1 className="text-[36px] font-semibold text-black">
                Experience
              </h1>
              <p className="text-[16px] text-neutral-700">
                With years of experience, we have a proven
                <br /> track record of success.
              </p>
            </div>
          </div>
          <div className="w-[570px] h-[190px] bg-pink rounded-[30px] flex gap-[30px]">
            <Image
              src="/images/group11.png"
              width={90}
              height={120}
              className="ml-[30px] py-[30px]"
            />
            <div className=" flex flex-col gap-2 mt-[30px]">
              <h1 className="text-[36px] font-semibold text-black">
                Expert Team
              </h1>
              <p className="text-[16px] text-neutral-700 ">
                Our talented team of developers, designers
                <br />, branding experts, and marketing strategists
                <br /> work together to deliver outstanding results.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-8 mx-auto">
          <div className="w-[570px] h-[190px]  bg-green2 rounded-[30px] flex gap-[30px]">
            <Image
              src="/images/lampe.png"
              width={90}
              height={120}
              className="ml-[30px] py-[30px]"
            />
            <div className=" flex flex-col gap-3 mt-[30px]">
              <h1 className="text-[36px] font-semibold text-black">
                Innovation
              </h1>
              <p className="text-[16px] text-neutral-700">
                We stay at the forefront of industry trends and<br/> technology to
                provide the best solutions for <br/> our clients..
              </p>
            </div>
          </div>
          <div className="w-[570px] h-[190px] bg-green1 rounded-[30px] flex gap-[30px]">
          <Image
              src="/images/hand.png"
              width={90}
              height={120}
              className="ml-[30px] py-[30px]"
            />
            <div className=" flex flex-col gap-3 mt-[30px]">
              <h1 className="text-[36px] font-semibold text-black">
              Client-Centric
              </h1>
              <p className="text-[16px] text-neutral-700">
              Your success is our success, and we are <br/> dedicated to your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default about;
