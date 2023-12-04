import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

function Intro() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: "chars/words" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.3,
        transformOrigin: "top",
        duration: 2,
        color: "#fff",
      });
    });
  }, []);

  return (
    <>
      <div className="flex h-screen justify-center items-center w-screen">
        <div className="text-[#fff] reveal-type uppercase md:text-[5vw] 3xl:text-[9vh] geist mt-[100px] benzin leading-[50px] md:leading-[10vh] text-[9vw]     ">
          Hi, I am Arnav Verma, a web developer and graphic designer based in
          India. Currently available for commisions.
        </div>
      </div>
    </>
  );
}

export default Intro;
