import logo from "./logo.svg";
import "./App.css";
import data from "./data/data";
import Corousel from "./component/Corousel";
import NavBar from "./component/NavBar";
import one from "./1.jpg";
import Timeline from "./component/Timeline";
import Speaker from "./component/Speakers";
import About from "./component/About";
import Footer from "./component/Footer";
import Contacts from "./component/Contacts";
import Colaborators from "./component/Colaborators";
import Publications from "./component/Punlications";
import Sessions from "./component/Sessions";
import Organisers from "./component/Organisers";
import Advisory from "./component/Advisory";
import Attend from "./components/Attend";
import Confe from "./components/Confe";
import Commite from "./components/Commite";
import News from "./component/News";
import C2 from "./component/C2";
import C3 from "./component/C3";
import Test from "./component/Test";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  Aos.init({
    duration: 600,
    offset: 0
  })
  return (
    <div className="App">
      <NavBar />
      <div data-aos="fade-down">
     
        <C3 />
      </div>
      <News />
      <About />
      <Confe />
      <Advisory />
      <Organisers />
      <Publications />
      <Sessions />
      <Speaker />
      <Attend />
      <Timeline />
      <Colaborators />
      <Contacts />
      <Footer />
      
    
      <div></div>
    </div>
  );
}

export { App };
