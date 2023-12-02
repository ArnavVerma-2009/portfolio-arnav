import { ScrollParallax } from "react-just-parallax";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function App() {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <>
      <ReactLenis root wrapper duration={1.4} orientation="vertical">
        <div className="landingPage">
          {" "}
          <Navbar />
          <ScrollParallax>
            <Hero /> 
          </ScrollParallax>
        </div>

        <About />
        <Banner />
      </ReactLenis>
    </>
  );
}

export default App;
