import { ScrollParallax } from "react-just-parallax";
import "./App.css";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
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
