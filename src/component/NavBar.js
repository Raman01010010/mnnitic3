import React, { useState } from 'react';
import logo from  './mnnit.png';
  
function NavBar() {

  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);

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
  const navbarStyle = {
    position: 'sticky',
    top: 0,
    left: 0,
    visibility:'inheret',
    overflowX:'visible',
    width: '100%',
    backgroundColor: '#4c51bf',
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
  };

  const logoImageStyle = {
    width: '120px',
    height: '70px',
    marginRight: '8px',
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#ffffff',
  };

  const primaryLinksStyle = {
    color: '#ffffff',
    fontFamily:"Roboto,Montserrat,Open Sans",
  };

  const dropdownMenuStyle = {
    display: 'none',
    backgroundColor: '#4c51bf',
    position: 'absolute',
    fontFamily:"Roboto,Montserrat,Open Sans",
    zIndex: 100,
  };

  const dropdownLinkStyle = {
    display: 'block',
    padding: '8px',
    color: '#ffffff',
    fontFamily:"Roboto,Montserrat,Open Sans",
    textDecoration: 'none',
  };
   
  if (isDropdown1Open) {
    dropdownMenuStyle.display = 'block';
  }
  if (isDropdown2Open) {
    dropdownMenuStyle.display = 'block';
  }
  if (isDropdown3Open) {
    dropdownMenuStyle.display = 'block';
  }

  return (
    <nav style={navbarStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="http://www.mnnit.ac.in/" style={logoStyle}>
              <img src={logo} alt="Logo" style={logoImageStyle} />
              </a>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4" style={primaryLinksStyle}>
                <a href="/" className="text-sm font-medium"  style={{fontFamily:"Roboto,Montserrat,Open Sans"}}>HOME</a>
                <a href="#" className="text-sm font-medium"  style={{fontFamily:"Roboto,Montserrat,Open Sans"}}>ABOUT</a>
                <a href="#" className="text-sm font-medium"  style={{fontFamily:"Roboto,Montserrat,Open Sans"}}>CONFERENCE TOPICS</a>
                <a href="#" className="text-sm " onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}>
                  CONFERENCE PROGRAM
                  {isDropdown1Open && (
                    <div style={dropdownMenuStyle}>
                      <a href="#" style={dropdownLinkStyle}>Service 1</a>
                      <a href="#" style={dropdownLinkStyle}>Service 2</a>
                      <a href="#" style={dropdownLinkStyle}>Service 3</a>
                    </div>
                  )}
                </a>
                <a href="#" className="text-sm " onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}>
                COMMITTEE
                  {isDropdown2Open && (
                    <div style={dropdownMenuStyle}>
                      <a href="#" style={dropdownLinkStyle}>Service 1</a>
                      <a href="#" style={dropdownLinkStyle}>Service 2</a>
                      <a href="#" style={dropdownLinkStyle}>Service 3</a>
                    </div>
                  )}
                </a>
                <a href="#" className="text-sm" onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}>
                   MISP HISTORY
                  {isDropdown3Open && (
                    <div style={dropdownMenuStyle}>
                      <a href="http://iiti.ac.in/people/~mlsp/index.html" style={dropdownLinkStyle}>MISP-2017</a>
                      <a href="https://misp.iiita.ac.in/" style={dropdownLinkStyle}>MISP-2019</a>
                      <a href="https://www.misp.nitap.ac.in/" style={dropdownLinkStyle}>MISP-2021</a>
                    </div>
                  )}
                </a>
                <a href="#" className="text-sm font-medium"  style={{fontFamily:"Roboto,Montserrat,Open Sans"}}>VENUE</a>
                <a href="#" className="text-sm font-medium"  style={{fontFamily:"Roboto,Montserrat,Open Sans"}}>CONTACT US</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;