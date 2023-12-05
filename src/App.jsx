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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import image from "./../src/assets/background-hero.webp";
function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <ReactLenis root wrapper duration={1.4} orientation="vertical">
          {" "}
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
              backdropFilter: "blur(3px)",
            }}
          />
          <Routes>
            {" "}
            <Route
              index
              element={
                <>
                  {" "}
                  <div className="landingPage">
                    <ScrollParallax>
                      <div
                        className="h-screen w-screen"
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: "cover",
                          backgroundPosition : "center center"
                        }}
                      >
                      {/* <img src={image} alt="bg-image" className="absolute h-screen w-screen" /> */}
                        {" "}
                        <Navbar />
                        <Hero />
                      </div>
                    </ScrollParallax>
                  </div>
                  <Intro />
                  <Banner />
                  <About />
                  <Projects />
                  <div className="h-[20vh]"></div>
                </>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <>
                  <About />

                  <div className="h-[20vh]"></div>
                </>
              }
            ></Route>
          </Routes>{" "}
        </ReactLenis>{" "}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
