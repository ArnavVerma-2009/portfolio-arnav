import React from "react";
import photo from "./../assets/photo.webp";
function About() {
  return (
    <>
      <div className="mt-20 sm:mt-0 flex h-[120vh] md:h-screen md:justify-between flex-col md:flex-row items-center gap-x-2 gap-y-8  md:px-[10vh] md:py-[6vh] px-[4vh] py-[2vh]">
        <div
          style={{
            backgroundImage: `url(${photo})`,
          }}
          className=" h-full text-white md:w-[37%] w-full flex justify-center items-center bg-cover bg-center rounded-xl"
        ></div>
        <div className="h-full text-white w-full md:w-[60%]  rounded-xl grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="bg-neutral-950 hover:bg-neutral-800 transition hover:border-[#ffffff30] hover:shadow-xl duration-500 text-black border-[0.13vw] flex-col overflow-hidden p-[2vh] border-[#ffffff10] flex justify-center items-center rounded-xl">
            <div className=" flex text-[#ffffff40] items-center justify-center text-[2.5vw] h-[30%] w-full benzin uppercase">
              NAME
            </div>
            <div className="text-white uppercase  text-center text-[7vh] benzin h-[70%] w-full">
              ARNAV VERMA{" "}
            </div>
          </div>
          <div className="bg-neutral-950 hover:bg-neutral-800 transition hover:border-[#ffffff30] hover:shadow-xl duration-500 text-black border-[0.13vw] flex-col overflow-hidden p-[2vh] border-[#ffffff10] flex justify-center items-center rounded-xl">
            <div className=" flex text-[#ffffff40] items-center justify-center text-[2.5vw] h-[30%] w-full benzin uppercase">
              AGE
            </div>
            <div className="text-white uppercase  text-center text-[14vh] benzin h-[70%] w-full">
              14{" "}
            </div>
          </div>
          <div className="bg-neutral-950 hover:bg-neutral-800 transition hover:border-[#ffffff30] hover:shadow-xl duration-500 text-black border-[0.13vw] flex-col overflow-hidden p-[2vh] border-[#ffffff10] flex justify-center items-center rounded-xl">
            <div className=" flex text-[#ffffff40] items-center justify-center text-[2.5vw] h-[30%] w-full benzin uppercase">
              hOBBY
            </div>
            <div className="text-white uppercase  text-center text-[7vh] benzin h-[70%] w-full">
              CODING <br /> studying{" "}
            </div>
          </div>
          <div className="bg-neutral-950 hover:bg-neutral-800 transition hover:border-[#ffffff30] hover:shadow-xl duration-500 text-black border-[0.13vw] flex-col overflow-hidden p-[2vh] border-[#ffffff10] flex justify-center items-center rounded-xl">
            <div className=" flex text-[#ffffff40] items-center justify-center text-[2.5vw] h-[30%] w-full benzin uppercase">
              Experience
            </div>
            <div className="text-white uppercase  text-center text-[12vh] benzin h-[70%] w-full">
              2Yr
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default About;
