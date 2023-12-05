import React, { useEffect } from "react";
// import styles from "./../assets/styles/eventPage.css"
import wartexImg from "./../assets/ss.png";
import regera from "./../assets/Regera.webp";
import shutter from "./../assets/shutter.webp";
import Aos from "aos";
// import { Link } from "react-router-dom";

const EventPage = () => {
  Aos.init();
  const EventsMetaData = [
    {
      //   Name: "Cryptic Hunt",
      id: 1,
      href: "https://wartex.co.in",
      imageLink: `${wartexImg}`,
    },
    {
      //   Name: "Cryptic Hunt",
      id: 1,
      href: "https://wartex.co.in",
      imageLink: `${regera}`,
    },
  ];

  return (
    <>
      {/* <Transition> */}
      <div className=" md:pt-10 pt-20   ">
        <section className="">
          <div className=" h-[34.54vh] md:h-[47.392vh] md:mb-28">
            <div className="container px-6  md:py-10 mx-auto">
              <h1
                className="mb-2 md:text-[3.125vw] text-[8vw] text-[white] benzin   text-center font-semibold uppercase tracking-px heading"
                data-aos="fade-up"
              >
                THE stuff i cook
              </h1>

              <p
                className="mb-14 md:text-[1vw] text-[3vw] text-white text-center font-semibold uppercase tracking-px"
                data-aos="fade-up"
              >
                THE work
              </p>
            </div>
          </div>

          <div className="relative  py-10 -mt-52 sm:-mt-80 md:-mt-76">
            <div className=" md:grid-cols-1 grid-cols-1 place-items-center grid mt-8 xl:mt-16">
              <div className="sm:border-b-4 relative z-[1] parent group EventMainCard  h-[40vh] w-[100vw] md:h-[100vh]">
                <a
                  href="https://www.wartex.co.in"
                  style={{
                    backgroundImage: `url(${wartexImg})`,
                    backgroundSize: "cover",
                    // backgroundPosition : "center  "
                  }}
                  className={`bg-center group  h-full w-screen  block bg-[#ffffff04] overflow-hidden drop-shadow-[0_0px_0px_#007bc4] sm:my-0 aspect-[1/1]`}
                >
              
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div
                  className="relative z-[1] sm:border-r-4 sm:border-b-4 overflow-hidden col-span-2 parent group EventMainCard  h-auto md:h-[100vh] w-screen md:w-[70%] bg-red-100 "
                  style={{
                    // backgroundPosition : "center  ",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <img src={regera} alt="regera" className="h-auto md:h-full w-[100vw] md:w-full" />
                </div>
                <div
                  className="relative z-[1]  sm:border-b-4  overflow-hidden parent group EventMainCard  h-[auto] md:h-[100vh]  flex justify-end"
                  style={{
                    // backgroundPosition : "center  ",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <img src={shutter} alt="regera" className="h-auto md:h-[100vh]" />
                </div>
              </div>
          </div>
        </section>
      </div>
      {/* </Transition> */}
    </>
  );
};

export default EventPage;
