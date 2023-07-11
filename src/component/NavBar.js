import React, { useState } from "react";
import logo from "./mnnit.png";

function NavBar() {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
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
    backgroundColor: "#4c51bf",
    borderBottomLeftRadius: "50%",
    borderBottomRightRadius: "50%",
  };

  const logoImageStyle = {
    width: "120px",
    height: "70px",
    marginRight: "8px",
  };

  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#ffffff",
  };

  const primaryLinksStyle = {
    color: "#ffffff",
    fontFamily: "Roboto,Montserrat,Open Sans",
  };

  const dropdownMenuStyle = {
    display: "none",
    backgroundColor: "#4c51bf",
    position: "absolute",
    fontFamily: "Roboto,Montserrat,Open Sans",
    zIndex: 99999999999,
  };

  const dropdownLinkStyle = {
    display: "block",
    padding: "8px",
    color: "#ffffff",
    fontFamily: "Roboto,Montserrat,Open Sans",
    textDecoration: "none",
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
  
  const linksContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
          <div className="md:hidden">
            {isContentScrolled ? (
              <button
                className="focus:outline-none"
                onClick={handleScrollReset}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path className="heroicon-ui" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            ) : (
              <button
                className={`focus:outline-none ${
                  isMobileMenuOpen ? "hidden" : "block"
                }`}
                onClick={handleMobileMenuToggle}
              >
                <svg
                  className="h-6 w-6"
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
          <div style={navbarStyle} className="hidden md:block ml-10">
            <div
              className={`flex space-x-4 ${
                isContentScrolled ? "hidden" : "block"
              }`}
              style={primaryLinksStyle}
            >
              <a href="/" className="text-sm font-medium">
                HOME
              </a>
              <a href="#" className="text-sm font-medium">
                ABOUT
              </a>
              <a href="#" className="text-sm font-medium">
                CONFERENCE TOPICS
              </a>
              <a
                href="#"
                className="text-sm"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                CONFERENCE PROGRAM
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
              </a>
              <a
                href="#"
                className="text-sm"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                COMMITTEE
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
              </a>
              <a
                href="#"
                className="text-sm"
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                MISP HISTORY
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
              </a>
              <a href="#" className="text-sm font-medium">
                VENUE
              </a>
              <a href="#" className="text-sm font-medium">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed right-0 top-0 h-full w-2/3 bg-gray-800 z-50 transform duration-300 ease-in-out">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex-shrink-0">
                <a href="http://www.mnnit.ac.in/" style={logoStyle}>
                  <img src={logo} alt="Logo" style={logoImageStyle} />
                </a>
              </div>
              <button
                className="focus:outline-none"
                onClick={handleMobileMenuToggle}
              >
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path className="heroicon-ui" d="M20 12H4M20 6H4M20 18H4" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <a href="/" className="text-base font-medium text-white block">
                HOME
              </a>
              <a href="#" className="text-base font-medium text-white block">
                ABOUT
              </a>
              <a href="#" className="text-base font-medium text-white block">
                CONFERENCE TOPICS
              </a>
              <div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-base font-medium text-white"
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
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
                    className="text-base font-medium text-white"
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
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
                    className="text-base font-medium text-white"
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
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
              <a href="#" className="text-base font-medium text-white block">
                VENUE
              </a>
              <a href="#" className="text-base font-medium text-white block">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      )}
      {isContentScrolled && (
        <div className="fixed right-0 top-0 h-full bg-gray-800 z-50">
          <button
            className="focus:outline-none h-full w-12 flex items-center justify-center"
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
              <button
                className="focus:outline-none"
                onClick={handleScrollReset}
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
            <div className="space-y-4">
              <a href="/" className="text-base font-medium text-white block">
                HOME
              </a>
              <a href="#" className="text-base font-medium text-white block">
                ABOUT
              </a>
              <a href="#" className="text-base font-medium text-white block">
                CONFERENCE TOPICS
              </a>
              <div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-base font-medium text-white"
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
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
                    className="text-base font-medium text-white"
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
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
                    className="text-base font-medium text-white"
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
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
              <a href="#" className="text-base font-medium text-white block">
                VENUE
              </a>
              <a href="#" className="text-base font-medium text-white block">
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
