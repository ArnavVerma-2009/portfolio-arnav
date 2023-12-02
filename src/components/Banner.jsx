import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";
import SplitType from "split-type";

function Banner() {

  return (
    <div
      data-scroll-container
      className="flex h-screen flex-col leading-tight items-center justify-center"
    >
      <div className="text-[12vh] reveal-banner benzin uppercase w-[100vw]">
        Web Developer
      </div>
      <div className="text-[12vh] reveal-banner benzin uppercase w-[100vw]">
        Graphic Designer
      </div>
      <div className="text-[12vh] reveal-banner benzin uppercase w-[100vw]">
        Frontend Developer
      </div>
      <div className="text-[12vh] reveal-banner benzin uppercase w-[100vw]">
        WEB Designer
      </div>
    </div>
  );
}

export default Banner;
