import React, { useState } from "react";
import logo from "./mnnit.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
  const [isDropdown4Open, setIsDropdown4Open] = useState(false);
  const [isDropdown5Open, setIsDropdown5Open] = useState(false);
  const [isDropdown6Open, setIsDropdown6Open] = useState(false);
  const [isDropdown7Open, setIsDropdown7Open] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContentScrolled, setIsContentScrolled] = useState(false);

  const handleMouseEnter1 = () => {
    setIsDropdown1Open(true);
  };

  const handleMouseLeave1 = () => {
    setIsDropdown1Open(false);
  };

  const handleMouseEnter2 = () => {
    setIsDropdown2Open(true);
  };

  const handleMouseLeave2 = () => {
    setIsDropdown2Open(false);
  };

  const handleMouseEnter3 = () => {
    setIsDropdown3Open(true);
  };

  const handleMouseLeave3 = () => {
    setIsDropdown3Open(false);
  };

  const handleMouseEnter4 = () => {
    setIsDropdown4Open(true);
  };

  const handleMouseLeave4 = () => {
    setIsDropdown4Open(false);
  };

  const handleMouseEnter5 = () => {
    setIsDropdown5Open(true);
  };

  const handleMouseLeave5 = () => {
    setIsDropdown5Open(false);
  };

  const handleMouseEnter6 = () => {
    setIsDropdown6Open(true);
  };

  const handleMouseLeave6 = () => {
    setIsDropdown6Open(false);
  };

  const handleMouseEnter7 = () => {
    setIsDropdown7Open(true);
  };
  const handleMouseLeave7 = () => {
    setIsDropdown7Open(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollRight = () => {
    setIsContentScrolled(true);
  };

  const handleScrollReset = () => {
    setIsContentScrolled(false);
  };

  const navbarStyle = {
    position: "sticky",
    top: 0,
    left: 0,
    visibility: "inheret",
    overflowX: "visible",
    width: "100%",
    backgroundColor: "#ffffff", // Updated: Make navbar white
    borderBottom: "2px solid #4c51bf", // Updated: Add border color
    zIndex: 1,
    transition: 'all 0.3s ease-in-out',
  };

  const logoImageStyle = {
    width: "120px",
    height: "70px",
    marginRight: "8px",
    zIndex: 1,
  };

  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#4c51bf", // Updated: Use accent color
    zIndex: 1,
  };

  const primaryLinksStyle = {
    color: "#4c51bf", // Updated: Use accent color
    fontFamily: "Roboto,Montserrat,Open Sans",
    zIndex: 1,

  };

  const dropdownMenuStyle = {
    display: "none",
    backgroundColor: "#4c51bf", // Updated: Use accent color
    position: "absolute",
    fontFamily: "Roboto,Montserrat,Open Sans",
    zIndex: 1,
 
  };

  const dropdownLinkStyle = {
    display: "block",
    padding: "8px",
    color: "#ffffff",
    fontFamily: "Roboto,Montserrat,Open Sans",
    textDecoration: "none",
    zIndex: 1,
    scrollBehavior:" smooth"
  };

  if (isDropdown1Open) {
    dropdownMenuStyle.display = "block";
  }
  if (isDropdown2Open) {
    dropdownMenuStyle.display = "block";
  }
  if (isDropdown3Open) {
    dropdownMenuStyle.display = "block";
  }
  if (isDropdown4Open) {
    dropdownMenuStyle.display = "block";
  }
  if (isDropdown5Open) {
    dropdownMenuStyle.display = "block";
  }
  if (isDropdown6Open) {
    dropdownMenuStyle.display = "block";
  }
  if (isDropdown7Open) {
    dropdownMenuStyle.display = "block";
  }
  const linksContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    scrollBehavior:" smooth"
  };

  const offCanvasStyle = {
    transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.3s ease-in-out",
    backgroundColor: "#ffffff", // Updated: Make off-canvas white
    transition: 'all 0.3s ease-in-out',
  };

  const offCanvasContentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    marginLeft: "0",
    color: "#000000", // Updated: Make off-canvas content black
  };

  const closeIconStyle = {
    position: "absolute",
    top: "1rem", // Adjusted position
    right: "1rem", // Adjusted position
    cursor: "pointer",
    zIndex: 1,
    fontSize: "6rem", // Increased cross sign size
  };

  const hoverLinkStyle = {
    textDecoration: "none",
    color: "#4c51bf", // Updated: Use accent color for hover effect
    scrollBehavior:" smooth"
  };

  return (
    <nav style={navbarStyle} className="px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="http://www.mnnit.ac.in/" style={logoStyle}>
                <img src={logo} alt="Logo" style={logoImageStyle} />
              </a>
            </div>
          </div>
          <div className="md:hidden  ">
            {isContentScrolled ? (
              <button
                className="focus:outline-none transition-all duration-3000 "
                onClick={handleScrollReset}
              >
                <svg
                  className="h-6 w-6 transition-all duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path className="heroicon-ui" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            ) : (
              <button
                className={` ease-in-out focus:outline-none ${
                  isMobileMenuOpen ? "hidden" : "block"
                } transition-all duration-3000` }
                onClick={handleMobileMenuToggle}
              >
                <svg
                  className="h-6 w-6 transition-all duration-3000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path className="heroicon-ui" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
          </div>
          <div style={navbarStyle} className="hidden md:block ml-10 relative">
            <div
              className={`flex space-x-3 ${
                isContentScrolled ? "hidden" : "block"
              }`}
              style={primaryLinksStyle}
            >
              <a href="#" className="text-sm font-medium hover:text-black transition-colors duration-300"> 
                HOME
              </a>
              <a href="#about"  className="text-sm font-medium hover:text-black transition-colors duration-300">
                ABOUT
              </a>
              <a
                href="#confe"
                className="text-sm font-medium hover:text-black transition-colors duration-300"
                onMouseEnter={handleMouseEnter5}
                onMouseLeave={handleMouseLeave5}
              >
                CONFERENCE TOPICS
                {isDropdown5Open && (
                  <div className="transition-transform duration-300" style={dropdownMenuStyle}>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 1
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 2
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 3
                    </a>
                  </div>
                )}
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-black transition-colors duration-300"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                CONFERENCE PROGRAM
                {isDropdown1Open && (
                  <div className="transition-transform duration-300" style={dropdownMenuStyle}>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 1
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 2
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 3
                    </a>
                  </div>
                )}
              </a>
              <a
                href="#committee"
                className="text-sm font-medium hover:text-black transition-colors duration-300"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                COMMITTEE
                {isDropdown2Open && (
                  <div className="transition-transform duration-300" style={dropdownMenuStyle}>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 1
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 2
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 3
                    </a>
                  </div>
                )}
              </a>
              <a
                href="#sessions"
                className="text-sm font-medium hover:text-black transition-colors duration-300"
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
              >
                SPECIAL SESSIONS
                {isDropdown4Open && (
                  <div className="transition-transform duration-300" style={dropdownMenuStyle}>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 1
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 2
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 3
                    </a>
                  </div>
                )}
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-black transition-colors duration-300"
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                MISP HISTORY
                {isDropdown3Open && (
                  <div className="transition-transform duration-300" style={dropdownMenuStyle}>
                    <a
                      href="http://iiti.ac.in/people/~mlsp/index.html"
                      style={dropdownLinkStyle}
                    >
                      MISP-2017
                    </a>
                    <a
                      href="https://misp.iiita.ac.in/"
                      style={dropdownLinkStyle}
                    >
                      MISP-2019
                    </a>
                    <a
                      href="https://www.misp.nitap.ac.in/"
                      style={dropdownLinkStyle}
                    >
                      MISP-2021
                    </a>
                  </div>
                )}
              </a>
              <a href="#collab" className="text-sm font-medium hover:text-black transition-colors duration-300">
                COLLABORATORS
              </a>
              <a
                href="#contactus"
                className="text-sm font-medium hover:text-black transition-colors duration-300"
                onMouseEnter={handleMouseEnter6}
                onMouseLeave={handleMouseLeave6}
              >
                VENUE
                {isDropdown6Open && (
                  <div className="transition-transform duration-300" style={dropdownMenuStyle}>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 1
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 2
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 3
                    </a>
                  </div>
                )}
              </a>
              <a href="#contactus" className="text-sm font-medium hover:text-black transition-colors duration-300">
                CONTACT US
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-black transition-colors duration-300"
                onMouseEnter={handleMouseEnter7}
                onMouseLeave={handleMouseLeave7}
              >
                MORE
                {isDropdown7Open && (
                  <div className="transition-transform duration-300" style={dropdownMenuStyle}>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 1
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 2
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 3
                    </a>
                  </div>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="fixed right-0 top-0 h-full w-2/3 bg-gray-800 z-50 transform duration-300 ease-in-out"
          style={offCanvasStyle}
        >
          <div className="p-8" style={offCanvasContentStyle}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex-shrink-0">
                <a href="http://www.mnnit.ac.in/" style={logoStyle}>
                  <img src={logo} alt="Logo" style={logoImageStyle} />
                </a>
              </div>
              <button
                className="focus:outline-none transition-all duration-300"
                onClick={handleMobileMenuToggle}
                style={closeIconStyle}
              >
                <svg
                  className="h-6 w-6 transition-all duration-3000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4" style={primaryLinksStyle}>
            <a href="#" className="text-sm font-medium block hover:text-black transition-colors duration-300">
                HOME
              </a>
              <a href="#about" className="text-sm font-medium block hover:text-black transition-colors duration-300">
                ABOUT
              </a>
              <a
                href="#confe"
                className="text-sm font-medium block hover:text-black transition-colors duration-300"
                onMouseEnter={handleMouseEnter5}
                onMouseLeave={handleMouseLeave5}
              >
                CONFERENCE TOPICS
                {isDropdown5Open && (
                  <div className="transition-transform duration-300" style={dropdownMenuStyle}>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 1
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 2
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 3
                    </a>
                  </div>
                )}
              </a>
              <a
                href="#"
                className="text-sm font-medium block hover:text-black transition-colors duration-300"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                CONFERENCE PROGRAM
                {isDropdown1Open && (
                  <div className="transition-transform duration-300" style={dropdownMenuStyle}>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 1
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 2
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 3
                    </a>
                  </div>
                )}
              </a>
              <a
                href="#committee"
                className="text-sm font-medium block hover:text-black transition-colors duration-300"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                COMMITTEE
                {isDropdown2Open && (
                  <div className="transition-transform duration-300" style={dropdownMenuStyle}>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 1
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 2
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 3
                    </a>
                  </div>
                )}
              </a>
              <a
                href="#sessions"
                className="text-sm font-medium block hover:text-black transition-colors duration-300"
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
              >
                SPECIAL SESSIONS
                {isDropdown4Open && (
                  <div className="transition-transform duration-300" style={dropdownMenuStyle}>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 1
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 2
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 3
                    </a>
                  </div>
                )}
              </a>
              <a
                href="#"
                className="text-sm font-medium block hover:text-black transition-colors duration-300"
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                MISP HISTORY
                {isDropdown3Open && (
                  <div className="transition-transform duration-300" style={dropdownMenuStyle}>
                    <a
                      href="http://iiti.ac.in/people/~mlsp/index.html"
                      style={dropdownLinkStyle}
                    >
                      MISP-2017
                    </a>
                    <a
                      href="https://misp.iiita.ac.in/"
                      style={dropdownLinkStyle}
                    >
                      MISP-2019
                    </a>
                    <a
                      href="https://www.misp.nitap.ac.in/"
                      style={dropdownLinkStyle}
                    >
                      MISP-2021
                    </a>
                  </div>
                )}
              </a>
              <a href="#collab" className="text-sm font-medium block hover:text-black transition-colors duration-300">
                COLLABORATORS
              </a>
              <a
                href="#contactus"
                className="text-sm font-medium block hover:text-black transition-colors duration-300"
                onMouseEnter={handleMouseEnter6}
                onMouseLeave={handleMouseLeave6}
              >
                VENUE
                {isDropdown6Open && (
                  <div className="transition-transform duration-300" style={dropdownMenuStyle}>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 1
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 2
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 3
                    </a>
                  </div>
                )}
              </a>
              <a href="#contactus" className="text-sm font-medium block hover:text-black transition-colors duration-300">
                CONTACT US
              </a>
              <a
                href="#"
                className="text-sm font-medium block hover:text-black transition-colors duration-300"
                onMouseEnter={handleMouseEnter7}
                onMouseLeave={handleMouseLeave7}
              >
                MORE
                {isDropdown7Open && (
                  <div className="transition-transform duration-300" style={dropdownMenuStyle}>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 1
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 2
                    </a>
                    <a href="#" style={dropdownLinkStyle}>
                      Service 3
                    </a>
                  </div>
                )}
              </a>
                
            </div>
          </div>
        </div>
      )}
      {isContentScrolled && (
        <div className="fixed right-0 top-0 h-full bg-gray-800 z-50">
          <button
            className="focus:outline-none h-full w-12 flex items-center justify-center transition-all duration-300"
            onClick={handleScrollReset}
          >
            <svg
              className="h-8 w-8 fill-current text-white transform rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path className="heroicon-ui" d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <div className="h-full overflow-y-auto p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex-shrink-0">
                <a href="http://www.mnnit.ac.in/" style={logoStyle}>
                  <img src={logo} alt="Logo" style={logoImageStyle} />
                </a>
              </div>
              <div>
                <button
                  className="focus:outline-none"
                  onClick={handleScrollReset}
                  style={closeIconStyle}
                >
                  <svg
                    className="h-8 w-8 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path className="heroicon-ui" d="M20 12H4M20 6H4M20 18H4" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {/* <a
                href="/"
                className="text-base font-medium text-white block hover:text-black"
              >
                HOME
              </a> */}
              <a
                href="#"
                className="text-base font-medium text-white block hover:text-black"
              >
                ABOUT
              </a>
              <a
                href="#"
                className="text-base font-medium text-white block hover:text-black"
              >
                CONFERENCE TOPICS
              </a>
              <div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-base font-medium text-white hover:text-black"
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                    style={hoverLinkStyle} // Added: Hover style
                  >
                    CONFERENCE PROGRAM
                  </a>
                  {isDropdown1Open && (
                    <div style={dropdownMenuStyle}>
                      <a href="#" style={dropdownLinkStyle}>
                        Service 1
                      </a>
                      <a href="#" style={dropdownLinkStyle}>
                        Service 2
                      </a>
                      <a href="#" style={dropdownLinkStyle}>
                        Service 3
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-base font-medium text-white hover:text-black"
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                    style={hoverLinkStyle} // Added: Hover style
                  >
                    COMMITTEE
                  </a>
                  {isDropdown2Open && (
                    <div style={dropdownMenuStyle}>
                      <a href="#" style={dropdownLinkStyle}>
                        Service 1
                      </a>
                      <a href="#" style={dropdownLinkStyle}>
                        Service 2
                      </a>
                      <a href="#" style={dropdownLinkStyle}>
                        Service 3
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-base font-medium text-white hover:text-black"
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                    style={hoverLinkStyle} // Added: Hover style
                  >
                    MISP HISTORY
                  </a>
                  {isDropdown3Open && (
                    <div style={dropdownMenuStyle}>
                      <a
                        href="http://iiti.ac.in/people/~mlsp/index.html"
                        style={dropdownLinkStyle}
                      >
                        MISP-2017
                      </a>
                      <a
                        href="https://misp.iiita.ac.in/"
                        style={dropdownLinkStyle}
                      >
                        MISP-2019
                      </a>
                      <a
                        href="https://www.misp.nitap.ac.in/"
                        style={dropdownLinkStyle}
                      >
                        MISP-2021
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <a
                href="#"
                className="text-base font-medium text-white block hover:text-black"
              >
                VENUE
              </a>
              <a
                href="#"
                className="text-base font-medium text-white block hover:text-black"
              >
                CONTACT US
              </a>
              <a
                href="#"
                className="text-base font-medium text-white block hover:text-black"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
