import React, { useEffect } from "react";
// import styles from "./../assets/styles/eventPage.css"
import wartexImg from "./../assets/ss.png";
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
  ];

  return (
    <>
      {/* <Transition> */}
      <div className="p-4 md:pt-40 pt-20   ">
        <section className="">
          <div className=" h-[24em] md:h-[32em] ">
            <div className="container px-6  md:py-10 mx-auto">
              <h1
                className="mb-2 text-4xl text-[white] benzin   text-center font-semibold uppercase tracking-px heading"
                data-aos="fade-up"
              >
                THE stuff i cook
              </h1>

              <p
                className="mb-14 text-sm text-white text-center font-semibold uppercase tracking-px"
                data-aos="fade-up"
              >
                THE Mystical pieces of artwork
              </p>
            </div>
          </div>

          <div className=" relative px-6 py-10 -mt-72 sm:-mt-80 md:-mt-96">
            <div className=" md:grid-cols-1 grid-cols-1 place-items-center gap-y-12   grid mt-8 xl:mt-16">
              {EventsMetaData.map((data) => (
                <div
                  key={data.id}
                  className="relative z-[1] parent group EventMainCard  h-[40vh] w-full md:h-[100vh] md:mt-12 mt-4"
                >
                  <a
                    href={data.href}
                    data-aos="fade-up"
                    data-aos-duration={data.delay}
                    style={{
                      backgroundImage: `url(${data.imageLink})`,
                      backgroundSize: "cover",
                    //   backgroundPosition : "center  "
                    }}
                    className="bg-center group  h-full w-full  block bg-[#ffffff04] overflow-hidden drop-shadow-[0_0px_0px_#007bc4] sm:my-0 aspect-[1/1] rounded-xl   sm:border-[4px] border-[2px] border-[#007bc4] "
                  >
                    <div className="screen-overlay"></div>
                    
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* </Transition> */}
    </>
  );
};

export default EventPage;
