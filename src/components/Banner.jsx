import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";
import SplitType from "split-type";
import jQuery from "jquery";

function Banner() {
  
  
  function letterCarousel(parent_cls, child_cls) {
    var e = jQuery(parent_cls + " " + child_cls),
      t = jQuery(window).height();
    jQuery(window).on("scroll", function () {
      if (jQuery(parent_cls).length) {
        var t = jQuery(document).scrollTop() + jQuery(window).height(),
          n = jQuery(parent_cls).offset().top;

        if (n <= t) {
          var i = jQuery(document).scrollTop() - n + jQuery(window).height();
          var scroll = i - 150;
          var scroll_slow = scroll + scroll / 70 / 100;
          var img_scroll = (scroll_slow * 33) / 100;
          e.css({
            transform: "translateX(" + -1 * img_scroll + "px)",
          });
        }
      }
    });
  }
  function letterCarouselrtl(parent_cls, child_cls) {
    var e = jQuery(parent_cls + " " + child_cls),
      t = jQuery(window).height();
    jQuery(window).on("scroll", function () {
      if (jQuery(parent_cls).length) {
        var t = jQuery(document).scrollTop() + jQuery(window).height(),
          n = jQuery(parent_cls).offset().top;

        if (n <= t) {
          var i = jQuery(document).scrollTop() - n + jQuery(window).height();
          var scroll = i - 150;
          var scroll_slow = scroll + scroll / 70 / 100;
          var img_scroll = (scroll_slow * 33) / 100;
          e.css({
            transform: "translateX(" + img_scroll + "px)",
          });
        }
      }
    });
  }

  letterCarousel(".Frist", ".big-title");
  letterCarouselrtl(".Frists", ".big-title");
  letterCarousel(".Fristss", ".big-title");
  letterCarouselrtl(".Fristsss", ".big-title");
  letterCarousel(".Fristssss", ".big-title");

  return (
    <div
      className="flex md:h-screen flex-col leading-tight items-center md:justify-center h-auto"
    >
      <div className="md:text-[15vh] text-[10vh] reveal-banner benzin uppercase md:w-[300vw] w-[1000vw]">
        <section className="Fristssss">
          <h1 className="big-title">
            Web Developer Web Developer Web Developer
          </h1>
        </section>
      </div>
      <div className="md:text-[15vh] text-[10vh] reveal-banner benzin uppercase md:w-[310vw] w-[1000vw]">
        <section className="Fristsss">
          <h1 className="big-title">
            Graphic Designer Graphic Designer Graphic Designer 
          </h1>
        </section>
      </div>
      <div className="md:text-[15vh] text-[10vh] reveal-banner benzin uppercase md:w-[350vw] w-[1000vw]">
      <section className="Fristss">
          <h1 className="big-title">
            Frontend developer  Frontend developer  Frontend dev 
          </h1>
        </section>
      </div>
      <div className="md:text-[15vh] text-[10vh] reveal-banner benzin uppercase md:w-[300vw] w-[1000vw]">
      <section className="Frists">
          <h1 className="big-title">
            Web GEEK 
            Web GEEK 
            Web GEEK 
            Web GEEK 
            Web GEEK 
          </h1>
        </section>
      </div>
    </div>
  );
}

export default Banner;