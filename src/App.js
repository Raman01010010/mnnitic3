
import Corousel from "./component/Corousel";
import NavBar from "./component/NavBar";
import Timeline from "./component/Timeline";
import Speaker from "./component/Speakers";
import About from "./component/About";
import Footer from "./component/Footer";
import Map from "./component/Map";
import Contacts from "./component/Contacts";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Corousel/>
        <About/>
        <Speaker/>
        <Timeline/>
        <Map/>
        <Contacts/>
        <Footer/>
      </div>
    </div>
  );
}

export { App };
