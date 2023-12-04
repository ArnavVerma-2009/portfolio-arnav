import { ScrollParallax } from "react-just-parallax";
import "./App.css";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        innerAlpha={1}
        outerAlpha={1}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#ffffff",
        }}
        outerStyle={{
          border: "3px solid #ffffff80",
          background: "transparent",
          backdropFilter: "blur(3px)"
        }}
      />
      <ReactLenis root wrapper duration={1.4} orientation="vertical">
        <div className="landingPage">
          {" "}
          <Navbar />
          {/* <ScrollParallax lerpEase={2}> */}
          <Hero />
          {/* </ScrollParallax> */}
        </div>

        <Intro />
        <Banner />
        <About />
        <Projects />
        <div className="h-[20vh]"></div>
      </ReactLenis>
    </>
  );
}

export default App;
