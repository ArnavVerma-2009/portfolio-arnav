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
          <Navbar />
          <Hero />
        </div>

        <About />
        <Banner />
        <div className="h-screen"></div>
      </ReactLenis>
    </>
  );
}

export default App;
