import React, { Fragment, useEffect, useState } from "react";
import logo from "./mnnit.png";
import { Link } from "react-router-dom";
import Aos from "aos";
import { Menu } from "@headlessui/react";
import { Transition } from "react-transition-group";

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

  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  function handleMouseEnter1() {
    setIsDropdown1Open(true);
  }

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

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

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
    zIndex: 1,
    transition: "all 0.3s ease-in-out",
  };
  const navbarStyle1 = {
    position: "sticky",
    top: 0,
    right: 0,
    visibility: "inheret",
    width: "100%",
    backgroundColor: "#ffffff", // Updated: Make navbar white
    zIndex: 1,
    transition: "all 0.3s ease-in-out",
  };

  const logoImageStyle = {
    width: "120px",
    height: "70px",
    marginLeft: "8px",
    zIndex: 1,
  };

  const logonavImageStyle = {
    width: "120px",
    height: "70px",
    marginTop: "16px",
    zIndex: 1,
  };

  const logonav1ImageStyle = {
    width: "120px",
    height: "70px",
    marginLeft: "80px",
    zIndex: 1,
  };

  
   
  
  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#4c51bf", // Updated: Use accent color
    zIndex: 1,
  };

  const primaryLinksStyle = {
    color: "#000000", // Updated: Use accent color
    fontFamily: "Roboto,Montserrat,Open Sans",
    zIndex: 1,
    padding: "10px",
    textAlign: "centre",
  };

  const dropdownMenuStyle = {
    display: "none",
    backgroundColor: "#4c51bf", // Updated: Use accent color
    position: "absolute",
    fontFamily: "Roboto,Montserrat,Open Sans",
    zIndex: 1,
    transition: "all 0.3s ease-in-out",
  };

  const dropdownLinkStyle = {
    display: "block",
    padding: "8px",
    color: "#ffffff",
    fontFamily: "Roboto,Montserrat,Open Sans",
    textDecoration: "none",
    zIndex: 1,

    transition: "all 0.3s ease-in-out",
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
  };

  const offCanvasStyle = {
    transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.5s ease-in-out",
    backgroundColor: "#ffffff", // Updated: Make off-canvas whit
  };

  const offCanvasStyle1 = {
    transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0s ease-in-out ",
  };

  

  const offCanvasContentStyle = {
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease-in-out",
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
  };

  return (
    <nav style={navbarStyle} className="px-4 lg:px-8">
      <div className=" max-w-7xl mx-auto md:hidden">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <div className="flex-shrink-0 ">
              <a href="http://www.mnnit.ac.in/" style={logoStyle}>
                <div>
                  <img
                    className="block ml-8px"
                    src={logo}
                    alt="Logo"
                    style={logonavImageStyle}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="md:hidden  ">
            <button
              className={` ease-in-out focus:outline-none ${
                isMobileMenuOpen ? "hidden" : "block"
              } transition-all duration-3000`}
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
          </div>
        </div>
      </div>
      <div className="hidden md:block  ">
        <div className=" max-w-7xl mx-auto ">
          <div className="flex items-center  ">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <a href="http://www.mnnit.ac.in/" style={logoStyle}>
                  <div>
                    <img
                      className="block ml-8px"
                      src={logo}
                      alt="Logo"
                      style={logonavImageStyle}
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="font-sans font-semibold" style={{ fontSize: "25px",paddingLeft: "300px" }}>
              <h1>MOTILAL NEHRU NATIONAL INSTITUTE OF TECHNOLOGY ALLAHABAD</h1>
            </div>
          </div>
        </div>
      </div>
      <div style={navbarStyle1}>
        <div>
          <div className="hidden md:block">
            <div
              className={`flex items-center flex space-x-4
                 "block" 
              `}
              style={primaryLinksStyle}
            >
              <div class="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    <a href="#">HOME</a>
                  </button>
                </div>
              </div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    ABOUT
                    <svg
                      class="w-4 h-4 inline-block ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 12l-5-5h10l-5 5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-300"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-300"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#about"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            ABOUT US
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#confe"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            CONFERENCE TOPIC
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            CONFERENCE PROGRAM
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#sessions"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            SPECIAL SESSIONS
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#collab"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            COLLABORATORS
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#time"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            TIMELINE
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <div class="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    <a href="#contact">CONTACT</a>
                  </button>
                </div>
              </div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    IMPORTANT LINKS
                    <svg
                      class="w-4 h-4 inline-block ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 12l-5-5h10l-5 5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#foot"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                            style={{ scrollBehavior: "smooth" }}
                          >
                            links
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fixed right-0 top-0 h-full bg-gray-800 bg-opacity-80 w-full bg-gray-800 z-50"
        style={offCanvasStyle1}
      ></div>
      <div
        className="fixed right-0 top-0 h-full w-2/3 bg-gray-800 z-50 "
        style={offCanvasStyle}
      >
        <div className="p-8" style={offCanvasContentStyle}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex-shrink-0 ">
              <a href="http://www.mnnit.ac.in/" style={logoStyle}>
                <img src={logo} alt="Logo" style={logoImageStyle} />
              </a>
            </div>
            <button
              className="focus:outline-none transition-all duration-3000"
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
            <div class="block bg-gray-200  hover:bg-gray-300 p-2">
              <a
                href="#"
                className="text-sm font-medium block hover:text-black transition-colors duration-300"
              >
                HOME
              </a>
            </div>

            
            <div className="accordion">
              <div className="accordion-item">
                <div className="block bg-gray-200 hover:bg-gray-300 ">
                  <h2 className="accordion-header">
                    <div className="inline-flex w-full  justify-center gap-x-1.5 rounded-md bg-gray-00 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      <button
                        className={`accordion-button ${
                          activeIndex === 0 ? "active" : ""
                        }  `}
                        type="button"
                        onClick={() => handleAccordionClick(0)}
                      >
                        ABOUT
                      </button>

                      <svg
                        class="w-4 h-4 inline-block ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 12l-5-5h10l-5 5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </h2>
                  {activeIndex === 0 && (
                    <div className="accordion-collapse">
                      <div className="accordion-body">
                        <a
                          href="#about"
                          style={{
                            color: "#555",
                            display: "block",
                            padding: "8px 0",
                          }}
                        >
                          ABOUT US
                        </a>
                        <a
                          href="#confe"
                          style={{
                            color: "#555",
                            display: "block",
                            padding: "8px 0",
                          }}
                        >
                          CONFERENCE TOPIC
                        </a>
                        <a
                          href="#"
                          style={{
                            color: "#555",
                            display: "block",
                            padding: "8px 0",
                          }}
                        >
                          CONFERENCE PROGRAM
                        </a>
                        <a
                          href="#sessions"
                          style={{
                            color: "#555",
                            display: "block",
                            padding: "8px 0",
                          }}
                        >
                          SPECIAL SESSIONS
                        </a>
                        <a
                          href="#collab"
                          style={{
                            color: "#555",
                            display: "block",
                            padding: "8px 0",
                          }}
                        >
                          COLLABORATORS
                        </a>
                        <a
                          href="#timeline"
                          style={{
                            color: "#555",
                            display: "block",
                            padding: "8px 0",
                          }}
                        >
                          TIMELINE
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="block bg-gray-200 hover:bg-gray-300 p-2">
              <a
                href="#contact"
                className="text-sm font-medium block hover:text-black transition-colors duration-300"
              >
                CONTACT
              </a>
            </div>

            
            <div className="accordion">
              <div className="accordion-item">
                <div className="block bg-gray-200 hover:bg-gray-300">
                  <h2 className="accordion-header">
                    <div className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      <button
                        className={`accordion-button ${
                          activeIndex === 1 ? "active" : ""
                        }`}
                        type="button"
                        onClick={() => handleAccordionClick(1)}
                      >
                        IMPORTANT LINKS
                      </button>

                      <svg
                        class="w-4 h-4 inline-block ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 12l-5-5h10l-5 5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </h2>
                  {activeIndex === 1 && (
                    <div className="accordion-collapse">
                      <div className="accordion-body">
                        <a
                          href="#foot"
                          style={{
                            color: "#555",
                            display: "block",
                            padding: "8px 0",
                          }}
                        >
                          LINKS
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            


          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
