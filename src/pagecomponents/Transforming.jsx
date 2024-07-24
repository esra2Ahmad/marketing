import React from "react";
import Image from "next/image";

const Transforming = () => {
  return (
    <div className=" mx-[120px] h-[654px] rounded-[30px]">
      <div className="flex">
        <div className="w-[830px] h-[396px] bg-white rounded-[30px] relative top-[-40px] z-50 left-[-1px] rounded-bl-none">
          <div className="flex gap-2 items-center mt-[10px]">
            <div className=" w-[122px] bg-green h-[1px]"></div>
            <p className="text-[24px] font-semibold text-black">About Us</p>
          </div>
          <h1 className="text-[60px] font-bold text-black mt-4 leading-[80px]">
            Transforming Digital
            <br /> Visions into Reality
          </h1>
          <p className=" text-[20px] text-neutral-700 w-[800px] mt-[40px] leading-[30px]">
            At ElevateSphere, we are not just another digital marketing agency;
            <br /> we are your dedicated partner in transforming your digital
            vision into <br /> reality.
          </p>
        </div>
        <div className="w-[530px] h-[380px] bg-blue rounded-[30px]  relative top-[-22px] z-50 rounded-br-none">
          <Image
            src="/images/Rectangle 3.png "
            width={478}
            height={322}
            alt="wave"
            className="relative left-[10px] top-[14px] z-10"
          />
        </div>
      </div>
      <div className="bg-white  h-[500px] relative top-[-160px] rounded-[30px] ">
        <div className="bg-blue w-[80px] h-[40px] relative z-10 left-[730px] top-[80px]"></div>
        <div className=" bg-blue rounded-[30px] h-[325px] z-10 relative top-[80px] rounded-tr-none ml-[-30px]">
          <div className="flex flex-col gap-6">
            <div className="w-[820px] h-[74px] bg-white rounded-[30px] mt-[20px] ml-[20px]">
              <div className="flex  gap-6 mt-[12px] mx-[12px]">
                <button className="w-[400px] h-[51px]  text-[16px] font-medium text-center text-neutral-800 border border-neutral-800 bg-white rounded-[100px] hover:bg-black hover:text-white">
                  Contact us{" "}
                </button>
                <button className="w-[400px] h-[51px]  text-[16px] text-center font-medium text-neutral-800 border border-neutral-800 bg-white rounded-[100px] hover:bg-black hover:text-white">
                  Our Services
                </button>
              </div>
            </div>
            <div className=" flex">
              <div className="w-[820px] h-[187px] bg-white rounded-[30px] mt-[-2px] ml-[20px]">
                <p className="mt-4 mx-6 text-neutral-700 text-[22px] tracking-wider">
                  Our mission is simple yet powerful: to empower businesses of
                  all
                  <br />
                  sizes to excel in the digital world. We strive to bring
                  cutting-edge
                  <br /> solutions and a deep understanding of the digital
                  sphere to every <br /> project, ensuring our clients achieve
                  their goals.
                </p>
              </div>
              <div className=" flex gap-4 mt-[-90px] ml-[16px]">
                <div className=" bg-white h-[277px] w-[220px] rounded-[30px]">
                  <Image
                    src="/images/frame 1.png"
                    width={122}
                    height={122}
                    alt="frame"
                    className="mx-[50px] mt-[20px]"
                  />
                  <h1 className=" text-[24px] font-semibold text-black text-center">
                    Planning
                  </h1>
                  <p className="text-[12px] text-center text-neutral-700 mt-3">
                    We are dedicated to <br/> planning, designing, and  <br/>constructing
                    captivating<br/> brands specifically catered <br/>to the needs of
                    startup.
                  </p>
                </div>
                <div className=" bg-white h-[277px] w-[220px] rounded-[30px]">
                  <Image
                    src="/images/frame.png"
                    width={82}
                    height={82}
                    alt="frame"
                    className="mx-[60px] mt-[20px]"
                  />
                  <h1 className=" text-[24px] font-semibold text-black text-center mt-3">
                    Planning
                  </h1>
                  <p className="text-[12px] text-center text-neutral-700 mt-3">
                    We are dedicated to <br/> planning, designing, and  <br/>constructing
                    captivating<br/> brands specifically catered <br/>to the needs of
                    startup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transforming;
