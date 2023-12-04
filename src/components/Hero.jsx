import React from "react";
import { ScrollParallax } from "react-just-parallax";
function Hero() {
  return (
  
      <div className="flex h-[calc(100vh-100px)] justify-center mt-[100px] flex-col px-20 uppercase">
        <div>
          {" "}
          <div className="flex md:text-[7vw] text-[17vw] geist md:justify-normal justify-center  md: md:leading-[12vh] leading-2 benzin">
            Arnav <span className="md:block hidden ml-2"> Verma</span> 
          </div>
          <div className=" md: flex md:text-[7vw] geist text-[9.4vw] -translate-x-1 md:translate-y-0 -translate-y-8 md:leading-[12vh] justify-center benzin">
            <span className="hidden md:block">
              Website dev
            </span>
            <span className="block md:hidden">
              Developer 
            </span>
          </div>
          <div className="flex md:text-[7vw] geist -translate-y-[3.2rem] md:-translate-y-0 translate-x-2 text-[11vw] md:leading-[12vh] md: md:justify-end justify-center benzin pr-8">
            Designer
          </div>
        </div>
        <div className=" flex justify-center items-center mt-[7.407vh] geist">
          <button className="bg-[#00000020] backdrop-blur-xl gap-x-2 md:text-[1.3vw] flex items-center text-[5vw] hover:bg-[#ffffff40] hover:text-black transition duration-500 tracking-wider border-[2px] border-white uppercase md:px-[0.833vw] md:py-[0.417vw] px-[2vw] py-[2vw] rounded-full">
        Available for commisions
          </button>
        </div>
      </div>
  );
}

export default Hero;
