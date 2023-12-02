import { ReactLenis } from "@studio-freight/react-lenis";
import "./../assets/styles/nav.css";
import { useState } from "react";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="nav">
        <div className="nav-container">
          <div className="navbar">
            <div className="logo">Arnav</div>
            <div
              className="menu-toggle"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            >
              <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                <span
                  className={navOpen ? "lineBottom spin" : "lineBottom"}
                ></span>
              </div>
            </div>
          </div>
          <ReactLenis root wrapper duration={1.4} orientation="vertical">
            <div
              className="nav-overlay"
              style={{
                top: navOpen ? "0" : "-100%",
                transitionDelay: navOpen ? "0s" : "0s",
              }}
            >
            <div>
            <div
              className="menu-toggle flex justify-end  translate-x-10 -translate-y-10"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            >
              <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                <span
                  className={navOpen ? "lineBottom spin" : "lineBottom"}
                ></span>
              </div>
            </div>
            </div>
              <ul className="nav-links">
                <li className="nav-item">
                  <a
                    href="#"
                    onClick={() => setNavOpen(!navOpen)}
                    style={{
                      top: navOpen ? "0px" : "120px",
                      color: navOpen ? "white" : "#00000000",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1s" : "0s",
                    }}
                  >
                    Home
                  </a>
                  <div className="nav-item-wrapper"></div>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    onClick={() => setNavOpen(!navOpen)}
                    style={{
                      top: navOpen ? "0px" : "120px",
                      color: navOpen ? "white" : "#00000000",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "0.8s" : "0s",
                    }}
                  >
                    About
                  </a>
                  <div className="nav-item-wrapper"></div>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    onClick={() => setNavOpen(!navOpen)}
                    style={{
                      top: navOpen ? "0px" : "120px",
                      color: navOpen ? "white" : "#00000000",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "0.6s" : "0s",
                    }}
                  >
                    Projects
                  </a>
                  <div className="nav-item-wrapper"></div>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    onClick={() => setNavOpen(!navOpen)}
                    style={{
                      top: navOpen ? "0px" : "120px",
                      color: navOpen ? "white" : "#00000000",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "0.4s" : "0s",
                    }}
                  >
                    Contact
                  </a>
                  <div className="nav-item-wrapper"></div>
                </li>
              </ul>
              <div className="nav-footer">
                <div
                  className="location mr:0 md:mr-8"
                  style={{
                    bottom: navOpen ? "0px" : "120px",
                    color: navOpen ? "white" : "#00000000",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "0.8s" : "0s",
                    fontSize : "1.3vw"
                  }}
                >
                  <span>Delhi, IN</span>
                </div>
                <div className="nav-social-media">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="mr:0 md:mr-8 socialLinks hidden sm:block"
                        style={{
                          bottom: navOpen ? "0px" : "120px",
                          color: navOpen ? "white" : "#00000000",
                          opacity: navOpen ? "1" : "0",
                          transitionDelay: navOpen ? "0.8s" : "0s",
                          fontSize : "1.3vw",
                        }}
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                      className="socialLinks hidden sm:block"
                        href="#"
                        style={{
                          bottom: navOpen ? "0px" : "120px",
                          color: navOpen ? "white" : "#00000000",
                          opacity: navOpen ? "1" : "0",
                          transitionDelay: navOpen ? "0.8s" : "0s",
                          fontSize : "1.3vw",

                        }}
                      >
                        Youtube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ReactLenis>
        </div>
      </div>
    </>
  );
}

export default Navbar;
