import React from "react";
import photo from "./../assets/photo.webp";
function About() {
  return (
    <>
      {/* <div className="mt-20 sm:mt-0 flex h-[120vh] md:h-screen md:justify-between flex-col md:flex-row items-center gap-x-2 gap-y-8  md:px-[10vh] md:py-[6vh] px-[4vh] py-[2vh]">
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
      </div>{" "} */}

      <section className=" sm:mt-0 mt-20 AboutDiv lg:p-12 ">
        <div className="AboutContainer">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:py-16 lg:px-6">
            <div className="grid grid-cols-1 gap-4 mt-8">
              <img
                className="w-full rounded-lg "
                src={photo}
                alt="office content 1"
              />{" "}
              <div className="absolute z-10 lg:bg-gradient-to-l bg-gradient-to-t from-[#005fc4] from-20% via-15% via-[#005fc4] h-full" />
            </div>{" "}
            <div className="font-light text-white sm:text-lg ">
              <h2 className="uppercase benzin my-12   sm:text-4xl text-3xl tracking-tight font-extrabold  z-[1000]  text-white">
                It IS MY WORld and you all are living in it
              </h2>
              <p className="mb-4 text-justify geist-para font-bold ">
                I am Arnav Verma, currently studying in high school. I show a
                keen interest in frontend web development and graphic designing.
                <br />
                <br />
                I am a young lad in the field, expressing my creative and modern
                designs through my work, I am currently working with wartex, the
                biggest interschool techfest in new Delhi. I have made several
                game changing contributions to the functioning and popularity of
                the event constantly making the website & posters with my fellow
                colleagues. I show a great spirit in work and encourage
                communication among my fellow mates.
                <br />
                <br />I am looking forward to do some commision work to improve
                my skills, gain experience in the industry and be introduced to
                work culture in companies giving me knowledge of the latest
                trends in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
