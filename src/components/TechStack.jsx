import React from 'react'
import gsap from 'gsap'
const TechStack = () => {

    const marqueeInitialSet = () => {
        gsap.set(marqueeElements.current, {
          xPercent: -100,
          x: function (index) {
            return (screenWidth / 2) * index;
          },
        });
      };

  return (
   <>
        
   </>
  )
}

export default TechStack
