import React from "react";
import { ScrollParallax } from "react-just-parallax";
function Hero() {
  return (
    <ScrollParallax>
      <div className="flex h-[calc(100vh-100px)] justify-center mt-[100px] flex-col px-20 uppercase">
        <div>
          {" "}
          <div className="flex text-[7vw] italic md:leading-[12vh]  benzin">
            Arnav Verma
          </div>
          <div className=" italic flex text-[7vw] md:leading-[12vh] justify-center benzin">
            Website dev
          </div>
          <div className="flex text-[7vw] md:leading-[12vh] italic justify-end benzin pr-8">
            Designer
          </div>
        </div>
        <div className=" flex justify-center items-center mt-[7.407vh] geist">
          <button className="bg-[#00000020] text-[1.3vw] hover:bg-white hover:text-black transition duration-500 tracking-wider border-[2px] border-white uppercase px-[0.833vw] py-[0.417vw] rounded-full">
            Available for commisions
          </button>
        </div>
      </div>
    </ScrollParallax>
  );
}

export default Hero;
